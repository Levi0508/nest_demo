import { Module, DynamicModule, Global } from '@nestjs/common';

import { CatsService } from './cats/cats.service';

//自定义模块
@Global()
@Module({})
export class globalModule {
  static forRoot(options: string): DynamicModule {
    return {
      module: globalModule,
      providers: [CatsService],
      exports: [CatsService],
    };
  }
}
