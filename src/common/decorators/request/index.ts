import {
  ClassSerializerInterceptor,
  Type,
  UseInterceptors,
  applyDecorators,
} from '@nestjs/common';
import { ApiArrayResponse } from '../response/array.response';
import {
  TransformationInterceptor,
  TransformationInterceptorArray,
} from 'src/common/interceptors';
import { ApiResponseOptions } from '@nestjs/swagger';
import { ApiObjectResponse } from '../response/object.response';

export const useArrayInterceptors = <DataDto extends Type<unknown>>(
  options: ApiResponseOptions,
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiArrayResponse(options, dataDto),
    UseInterceptors(TransformationInterceptorArray<DataDto>),
    UseInterceptors(ClassSerializerInterceptor),
  );

export const useObjectInterceptors = <DataDto extends Type<unknown>>(
  options: ApiResponseOptions,
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiObjectResponse(options, dataDto),
    UseInterceptors(TransformationInterceptor<DataDto>),
    UseInterceptors(ClassSerializerInterceptor),
  );
