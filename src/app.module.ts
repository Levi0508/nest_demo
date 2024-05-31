import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.modules';
import { CatsController } from './modules/cats/cats.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { fnMiddleware } from './middleware/fn.middleware';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/entity/user.entity';
import { UserModule } from './modules/user/user.module';

import { BoyModule } from './modules/boy/boy.module';

import { globalModule } from './modules/globalModule';

@Module({
  imports: [
    CatsModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '19980508',
    //   database: 'demo',
    //   entities: [User],
    //   retryDelay: 500,
    //   retryAttempts: 10,
    //   synchronize: true, //是否将实体同步到数据库
    //   autoLoadEntities: true, //自动加载实体
    // }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '1.94.7.79',
      port: 3306,
      username: 'demo_mysql',
      password: 'Clf19980508+',
      database: 'demo',
      entities: [User],
      retryDelay: 500,
      retryAttempts: 10,
      synchronize: true, //是否将实体同步到数据库
      autoLoadEntities: true, //自动加载实体
    }),
    BoyModule,
    UserModule,
    globalModule.forRoot('123'),
  ], //功能模块
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(CatsController);
  }
}
