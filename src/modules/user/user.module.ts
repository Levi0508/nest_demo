import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entity/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { BoyService } from '../boy/boy.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  //依赖注入
  providers: [
    BoyService, //共享模块
    {
      provide: 'US',
      useClass: UserService,
    },
    //UserService
    {
      provide: 'IOC-Array',
      useValue: ['wahaha', 'ohoho'],
    },
    {
      provide: 'IOC-Factory',
      useFactory: () => {
        console.log('%c这是锋酱的打印', 'color: red; font-size: 30px;', 123);
        return 'ICO-Factory';
      },
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
