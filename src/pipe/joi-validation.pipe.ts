import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    console.log('%c这是锋酱的打印', 'color: red; font-size: 30px;', error);

    if (error) {
      throw new BadRequestException('锋酱的错误');
    }
    return value;
  }
}
