import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

export class EmployeeDTO {
  @ApiResponseProperty()
  id?: number;
  @ApiProperty({
    description: 'The first name of a employee',
    minLength: 3,
    default: 'Amit',
  })
  first_name: string;
  @ApiProperty({
    description: 'The first name of a employee',
    minLength: 2,
    default: 'Gal',
  })
  last_name: string;
}
