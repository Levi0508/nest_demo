import {
  Controller,
  Get,
  Post,
  HttpCode,
  Header,
  Param,
  Body,
  Delete,
  Put,
  HttpException,
  HttpStatus,
  UseFilters,
  ForbiddenException,
  UsePipes,
  UseInterceptors,
} from '@nestjs/common';

import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../../filter/http-exception.filter';
import { AllExceptionsFilter } from '../../filter/any-exception.filter';

import { JoiValidationPipe } from '../../pipe/joi-validation.pipe';

import { LoggingInterceptor } from '../../interceptor/logging.interceptor';

import { User } from '../../decorator/user.decorator';

import * as Joi from '@hapi/joi';

/*
  create-cat.dto.ts
*/
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export const createCatSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().required(),
  breed: Joi.string().required(),
});

@Controller('cats')
// @UseInterceptors(LoggingInterceptor)
// @UseFilters(new AllExceptionsFilter())
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post('create')
  @UsePipes(new JoiValidationPipe(createCatSchema))
  async create(@Body() createCatDto: CreateCatDto) {
    return `This action returns a #${createCatDto.name} cat`;
  }
  @Post('findOne')
  async findOne(@User('firstName') firstName: string) {
    console.log(
      '%c这是锋酱的打印11',
      'color: red; font-size: 30px;',
      firstName,
    );
    return 'haha';
  }

  @Get()
  async findAll() {
    throw new HttpException(
      {
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      },
      HttpStatus.FORBIDDEN,
    );
  }

  // @Post()
  // // @HttpCode(204)
  // @Header('Cache-Control', 'none')
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return `This action returns a #${createCatDto.name} cat`;
  // }
  // @Get('findAll')
  // findAll(): string {
  //   return 'This action returns all cats';
  // }
  // @Get(':id')
  // findOne(@Param() params): string {
  //   return `This action returns a #${params.id} cat`;
  // }
  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: any) {
  //   return `This action updates a #${id} cat`;
  // }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}
