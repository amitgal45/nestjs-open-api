import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiResponse,
  ApiResponseOptions,
  getSchemaPath,
} from '@nestjs/swagger';

export const ApiArrayResponse = <DataDto extends Type<unknown>>(
  options: ApiResponseOptions,
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiResponse({
      ...options,
      status: options.status,
      description: options.description,
      schema: {
        properties: {
          message: {
            type: 'string',
            default: options.description,
          },
          statusCode: {
            type: 'number',
            default: options.status,
          },
          date: {
            type: 'string',
            default: new Date().toISOString(),
          },
          total: {
            type: 'number',
            default: 0,
          },
          data: {
            type: 'array',
            items: { $ref: getSchemaPath(dataDto) },
          },
        },
      },
    }),
  );
