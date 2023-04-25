import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
import { ApiErrorDecorator } from './error.decorator';

export function BadRequest(
  message: string,
  description?: string,
  options?: ApiResponseOptions,
) {
  return ApiErrorDecorator(
    HttpStatus.BAD_REQUEST,
    message,
    description,
    options,
  );
}

export function InternalError(
  message: string,
  description?: string,
  options?: ApiResponseOptions,
) {
  return ApiErrorDecorator(
    HttpStatus.INTERNAL_SERVER_ERROR,
    message,
    description,
    options,
  );
}

export function NotFound(
  message: string,
  description?: string,
  options?: ApiResponseOptions,
) {
  return ApiErrorDecorator(HttpStatus.NOT_FOUND, message, description, options);
}

export function Unauthorized(
  message: string,
  description?: string,
  options?: ApiResponseOptions,
) {
  return ApiErrorDecorator(
    HttpStatus.UNAUTHORIZED,
    message,
    description,
    options,
  );
}
