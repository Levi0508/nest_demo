import { Injectable } from '@nestjs/common';

interface Cat {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    return '喵';
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
