import { Injectable } from '@nestjs/common';
import { EmployeeDTO } from './dto';

@Injectable()
export class EmployeeService {
  private _EMPLOYEES: Array<EmployeeDTO> = [];

  getAll() {
    return this._EMPLOYEES;
  }

  findById(id: number) {
    const employee = this._EMPLOYEES.find((employee) => employee.id === id);
    if (!employee) {
      const err = new Error('employee not found');
      throw err;
    }
    return employee;
  }

  create(dto: EmployeeDTO) {
    const employee = dto;
    employee.id = Date.now();
    this._EMPLOYEES.push(employee);
    return employee;
  }
}
