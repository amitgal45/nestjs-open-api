import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ApiObjectResDTO<TData> {
  @ApiProperty({ enum: HttpStatus, default: HttpStatus.OK })
  statusCode: number;

  @ApiProperty({ default: 'Success message' })
  message: string;

  @ApiProperty({ default: new Date().toISOString() })
  date: Date;

  @ApiProperty()
  data: TData;
}

export class ApiArrayResDTO<TData> {
  @ApiProperty({ enum: HttpStatus, default: HttpStatus.OK })
  statusCode: number;

  @ApiProperty({ default: 'Success message' })
  message: string;

  @ApiProperty({ default: new Date().toISOString() })
  date: Date;

  @ApiProperty({ type: [Object] })
  data: TData[];
}
