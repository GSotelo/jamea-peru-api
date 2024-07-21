import { Test, TestingModule } from '@nestjs/testing';
import { AppetizersController } from './appetizers.controller';

describe('AppetizersController', () => {
  let controller: AppetizersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppetizersController],
    }).compile();

    controller = module.get<AppetizersController>(AppetizersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
