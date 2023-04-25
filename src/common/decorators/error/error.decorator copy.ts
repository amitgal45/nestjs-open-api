import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiResponseOptions } from '@nestjs/swagger';

export function ApiErrorDecorator<T extends HttpStatus>(
  statusCode: T,
  message: string,
  description: string,
  options?: ApiResponseOptions,
) {
  return applyDecorators(
    ApiResponse({
      ...options,
      status: statusCode,
      description: description,
      schema: {
        default: {
          message: message,
          status_code: statusCode,
          date: new Date().toISOString(),
        },
        properties: {
          message: {
            type: 'string',
            default: 'Hi',
          },
          status_code: {
            type: 'string',
            enum: [HttpStatus],
          },
          date: {
            type: 'Date',
            default: new Date().toISOString(),
          },
        },
      },
    }),
  );
}
