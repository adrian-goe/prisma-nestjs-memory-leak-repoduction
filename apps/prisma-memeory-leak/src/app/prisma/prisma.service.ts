import { OnApplicationShutdown } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient implements OnApplicationShutdown {
  async onApplicationShutdown(): Promise<void> {
    console.log('before prisma close')
    await this.$disconnect();
    console.log('after prisma close')
  }
}
