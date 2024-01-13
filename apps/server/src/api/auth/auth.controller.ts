import { ICreateUser } from '@justdoit/interface';
import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidationPipe } from 'src/common/pipes/ValidationPipe';
import { createUserSchema } from '@justdoit/interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(new ValidationPipe(createUserSchema))
  async register(@Body() payload: ICreateUser) {
    const user = await this.authService.createUser(payload);
    return user;
  }
}
