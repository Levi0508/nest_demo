import { Module, Global } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AppModule } from '../../app.module';

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], //共享模块
})
export class CatsModule {}
