import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequest, InternalError } from 'src/common/decorators/error';
import { EmployeeDTO } from './dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
@ApiTags('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  @Post()
  @ApiOperation({
    summary: 'Create new Employee',
    description: 'Lorem ipsum ....',
  })
  @ApiResponse({
    status: 201,
    type: EmployeeDTO,
  })
  @InternalError('Internal Server Error', 'Internal Server Error Description')
  @BadRequest('Bad Request Working', 'Bad Request Description')
  createEmployee(@Body() employeeDto: EmployeeDTO) {
    return { ...employeeDto, id: Date.now() };
  }
}
