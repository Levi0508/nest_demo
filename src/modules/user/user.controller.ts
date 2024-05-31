import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { UserService } from './user.service';
import { BoyService } from '../boy/boy.service';
import { CatsService } from '../cats/cats.service';

import { User } from './entity/user.entity';

@Controller('users')
export class UserController {
  // constructor(private readonly userService: UserService) {}

  @Inject('US')
  private readonly userService: UserService;
  @Inject('IOC-Array')
  private readonly IOCArray: string[];
  @Inject('IOC-Factory')
  private readonly IOCFactory: string;
  @Inject()
  private readonly BoyService: BoyService; //共享模块
  @Inject()
  private readonly CatsService: CatsService; //全局模块

  @Post('/add')
  add(@Body() user: User): Promise<User> {
    console.log(
      '%c这是锋酱的打印',
      'color: red; font-size: 30px;',
      this.IOCArray,
      this.IOCFactory,
      this.BoyService.create(''),
      this.CatsService.create('' as any),
    );

    return this.userService.add(user);
  }
  // @Post('/delete/:id')
  // detele(@Param('id') id: number): any {
  //   return this.userService.delete(id);
  // }
  @Post('/delete')
  detele(@Body('id') id: number): Promise<any> {
    return this.userService.delete(id);
  }

  @Post('/update/:id')
  update(@Param('id') id: number, @Body() user: User): any {
    return this.userService.update(id, user);
  }

  @Get('/findAll')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/findById/:id')
  findById(@Param('id') id: number): any {
    return this.userService.findById(id);
  }

  // @Get()
  // findAll(): Promise<User[]> {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: number): Promise<User> {
  //   return this.userService.findOne(id);
  // }

  // @Post()
  // create(@Body() user: User): Promise<User> {
  //   return this.userService.create(user);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: number): Promise<void> {
  //   return this.userService.remove(id);
  // }
}
