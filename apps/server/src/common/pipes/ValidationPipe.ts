import {
  PipeTransform,
  Injectable,
  HttpStatus,
  BadRequestException,
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
      throw new BadRequestException({
        details: _err.errors,
        statusCode: HttpStatus.BAD_REQUEST,
        message: _err.name,
      });
    }
  }
}
