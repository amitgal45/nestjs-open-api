import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface ResponseWithObject<T> {
  statusCode: number;
  total?: number;
  data: T;
  message: string;
}

export interface ResponseWithArray<T> {
  statusCode: number;
  total?: number;
  data: T[];
  message: string;
}

@Injectable()
export class TransformationInterceptor<T>
  implements NestInterceptor<T, ResponseWithObject<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseWithObject<T>> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = response.statusCode;
    return next.handle().pipe(
      map((data: T) => ({
        data: data,
        statusCode: statusCode,
        message: statusCode === 200 ? 'OK' : 'CREATED',
        date: new Date().toISOString(),
      })),
    );
  }
}

@Injectable()
export class TransformationInterceptorArray<T>
  implements NestInterceptor<T, ResponseWithArray<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseWithArray<T>> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = response.statusCode;
    return next.handle().pipe(
      map((data: T[]) => ({
        total: data.length ?? undefined,
        data: data,
        statusCode: statusCode,
        date: new Date().toISOString(),
        message: statusCode === 200 ? 'OK' : 'CREATED',
      })),
    );
  }
}
