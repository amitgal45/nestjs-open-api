import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  ApiBadRequest,
  ApiInternalError,
  ApiNotFound,
} from 'src/common/decorators/error';
import { EmployeeDTO } from './dto';
import { EmployeeService } from './employee.service';
import { BaseController } from 'src/common/base/base.controller';
import {
  useArrayInterceptors,
  useObjectInterceptors,
} from 'src/common/decorators/request';
import { ErrorConsts } from 'src/common/decorators/error/consts';
import { NotFoundError } from 'rxjs';
import { BaseException } from 'src/common/base/base.exception';

@Controller('employee')
@ApiTags('employee')
export class EmployeeController extends BaseController {
  constructor(private readonly employeeService: EmployeeService) {
    super();
  }
  @Post()
  @ApiOperation({
    summary: 'Create new Employee',
    description: 'Lorem ipsum ....',
  })
  @ApiInternalError(
    ErrorConsts.INTERNAL_SERVER_ERROR,
    'Internal Server Error Description',
  )
  @ApiBadRequest(ErrorConsts.BAD_REQUEST, 'Bad Request Description')
  @useObjectInterceptors(
    {
      description: 'CREATED',
      status: 201,
    },
    EmployeeDTO,
  )
  createEmployee(@Body() employeeDto: EmployeeDTO) {
    return this.transformObject(EmployeeDTO, {
      ...employeeDto,
      id: Date.now(),
    });
  }

  @Get('/:id')
  @ApiNotFound(ErrorConsts.NOT_FOUND, 'Employee Not Found Description')
  @useObjectInterceptors(
    {
      description: 'OK',
      status: 200,
    },
    EmployeeDTO,
  )
  getEmployee(@Param('id') id: number) {
    // throw new BaseException(ErrorConsts.NOT_FOUND, HttpStatus.NOT_FOUND);
    return this.transformObject(EmployeeDTO, {
      id,
      first_name: 'Amit',
      last_name: 'Gal',
    });
  }

  @Get('/')
  @useArrayInterceptors(
    {
      description: 'OK',
      status: 200,
    },
    EmployeeDTO,
  )
  getEmployees() {
    return this.transformArray(EmployeeDTO, [
      {
        id: 1,
        first_name: 'Amit',
        last_name: 'Gal',
      },
      {
        id: 2,
        first_name: 'Amit',
        last_name: 'Gal',
      },
    ]);
  }
}
