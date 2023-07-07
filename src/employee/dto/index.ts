import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

export class EmployeeDTO {
  @Exclude()
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

  @Expose()
  @ApiProperty({ default: 'Amit Gal' })
  get fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}
