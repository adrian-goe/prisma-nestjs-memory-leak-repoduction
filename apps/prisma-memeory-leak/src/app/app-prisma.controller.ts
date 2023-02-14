import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import {AppPrismaService} from "./app-prisma.service";

@Controller()
export class AppPrismaController {
  constructor(private readonly appService: AppPrismaService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
