import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Module({
  providers: [
    {
      provide: PrismaClient,
      useClass: PrismaService,
    },
  ],
  exports: [PrismaClient],
})
export class PrismaModule {}
