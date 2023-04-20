import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeDTO } from './dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
@ApiTags('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  // @Get()
  // getEmployee() {
  //   try {
  //     return this.employeeService.getAll();
  //   } catch (err) {
  //     throw err;
  //   }
  // }

  // @Get('/:id')
  // getById(@Param('id') id: number) {
  //   try {
  //     return this.employeeService.findById(id);
  //   } catch (err) {
  //     throw new NotFoundException(err.message);
  //   }
  // }
  @Post()
  @ApiOperation({
    summary: 'Create new Employee',
    description: 'Lorem ipsum ....',
  })
  @ApiResponse({
    status: 201,
    type: EmployeeDTO,
  })
  createEmployee(@Body() employeeDto: EmployeeDTO) {
    return { ...employeeDto, id: Date.now() };
  }
}
