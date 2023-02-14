import { Injectable } from '@nestjs/common';
import {PrismaClient} from "@prisma/client";

@Injectable()
export class AppPrismaService {
  constructor(private readonly prisma:PrismaClient) {
  }
  async getData(): Promise<{ message: string }> {
    await this.prisma.test.findMany()
    return {message: 'Welcome to prisma-memeory-leak!'};
  }
}
