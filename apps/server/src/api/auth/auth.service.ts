import { ICreateUser, ISignInUser } from '@justdoit/interface';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '~/lib/prisma.service';
import bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { exclude } from '@justdoit/utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async createUser(payload: ICreateUser) {
    const isEmailSafe = await this.prisma.user.count({
      where: { email: payload.email },
    });

    if (isEmailSafe > 0) {
      throw new BadRequestException('email already used');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(payload.password, salt);

    const user = await this.prisma.user.create({
      data: {
        email: payload.email,
        password: hashedPassword,
        username: '@' + Date.now().toString(),
        display_name: '',
      },
    });

    return user;
  }

  async signInUser(payload: ISignInUser) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: payload.email,
      },
    });

    if (!user) {
      throw new NotFoundException('user not found');
    }

    const isPasswordCorrect = bcrypt.compare(payload.password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException('invalid credentials');
    }

    const userPayload = exclude(user, ['password']);

    return {
      user: userPayload,
      access_token: await this.jwtService.signAsync(userPayload),
    };
  }
}
