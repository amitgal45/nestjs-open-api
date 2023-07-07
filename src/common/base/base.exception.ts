import { HttpException, HttpStatus } from '@nestjs/common';

export class BaseException extends HttpException {
  constructor(
    public readonly message: string,
    public readonly code: HttpStatus,
  ) {
    super({ message, status_code: code, date: new Date().toISOString() }, code);
  }
}
