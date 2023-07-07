import { plainToInstance } from 'class-transformer';

export class BaseController {
  protected transformObject<T>(type: new () => T, data: Partial<T>) {
    return plainToInstance(type, data);
  }

  protected transformArray<T>(type: new () => T, data: Partial<T>[]) {
    return plainToInstance(type, data);
  }
}
