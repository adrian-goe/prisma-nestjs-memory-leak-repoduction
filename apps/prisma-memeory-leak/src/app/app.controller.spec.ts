import {Test, TestingModule} from '@nestjs/testing';
import {AppController} from './app.controller';
import {AppService} from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  afterAll(async () => {
    await app.close()
  })

  describe('getData', () => {
    it('should return "Welcome to prisma-memeory-leak!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to prisma-memeory-leak!',
      });
    });
  });
});
