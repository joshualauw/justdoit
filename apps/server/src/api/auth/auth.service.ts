import { ICreateUser } from '@justdoit/interface';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { PrismaService } from 'src/lib/prisma.service';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(body: ICreateUser) {
    const isEmailSafe = await this.prisma.user.count({
      where: { email: body.email },
    });

    if (isEmailSafe > 0) {
      throw new HttpException('email already used', HttpStatus.BAD_REQUEST);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newUser = await this.prisma.user.create({
      data: {
        email: body.email,
        password: hashedPassword,
        username: '@' + Date.now().toString(),
        display_name: '',
      },
    });

    return newUser;
  }

  async findOne() {
    const user = await this.prisma.user.findFirst();
    if (!user) throw new NotFoundError('user not found');

    return user;
  }
}
