import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';
import { ErrorDTO } from 'src/common/dto/error.dto';

export function ApiErrorDecorator(
  statusCode: HttpStatus,
  message: string,
  description?: string,
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
        type: getSchemaPath(ErrorDTO),
      },
    }),
  );
}
