import { HttpStatus } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
import { ApiErrorDecorator } from './error.decorator';

export function ApiBadRequest(
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

export function ApiInternalError(
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

export function ApiNotFound(
  message: string,
  description?: string,
  options?: ApiResponseOptions,
) {
  return ApiErrorDecorator(HttpStatus.NOT_FOUND, message, description, options);
}

export function ApiUnauthorized(
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
