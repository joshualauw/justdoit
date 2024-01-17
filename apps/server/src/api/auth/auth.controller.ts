import { ICreateUser, ISignInUser } from '@justdoit/interface';
import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ValidationPipe } from '~/common/pipes/ValidationPipe';
import { createUserSchema } from '@justdoit/interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @UsePipes(new ValidationPipe(createUserSchema))
  async register(@Body() body: ICreateUser) {
    const user = await this.authService.createUser(body);
    return {
      message: 'registration success',
      data: user,
    };
  }

  @Post('login')
  async login(@Body() body: ISignInUser) {
    const signInData = await this.authService.signInUser(body);
    return {
      message: 'login successful',
      data: signInData,
    };
  }
}
