import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';

@Injectable()
export class UserService {
  //依赖注入,来操作实体
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  add(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }

  update(id: number, user: User) {
    return this.userRepository.update(id, user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findById(id: number) {
    return this.userRepository.findOneBy({ id });
  }
  // findAll(): Promise<User[]> {
  //   return this.userRepository.find();
  // }

  // async findOne(id: number): Promise<User | undefined> {
  //   return this.userRepository.findOneBy({ id });
  // }

  // async create(user: User): Promise<User> {
  //   return this.userRepository.save(user);
  // }

  // async remove(id: number): Promise<void> {
  //   await this.userRepository.delete(id);
  // }
}
