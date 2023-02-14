import {Test, TestingModule} from '@nestjs/testing';
import {AppController} from './app.controller';
import {PrismaModule} from "./prisma/prisma.module";
import {AppPrismaController} from "./app-prisma.controller";
import {AppPrismaService} from "./app-prisma.service";

describe('AppPrismaController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [PrismaModule],
      controllers: [AppPrismaController],
      providers: [AppPrismaService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to prisma-memeory-leak!"', async () => {
      const appController = app.get<AppPrismaController>(AppPrismaController);

      expect(await appController.getData()).toEqual({
        message: 'Welcome to prisma-memeory-leak!',
      });
    });
  });
});
