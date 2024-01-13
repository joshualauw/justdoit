import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@justdoit/database';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
