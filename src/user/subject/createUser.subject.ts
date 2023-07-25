import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CreateUserSubject {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  get posts() {
    return this.email;
  }
}
