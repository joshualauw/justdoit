import {
  PipeTransform,
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Schema, ValidationError as YupError } from 'yup';

@Injectable()
export class ValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}

  async transform(value: any) {
    try {
      await this.schema.validate(value, { abortEarly: false });
      return value;
    } catch (err) {
      const _err = err as YupError;
      console.log(_err);
      throw new HttpException({ errors: _err.errors }, HttpStatus.BAD_REQUEST);
    }
  }
}
