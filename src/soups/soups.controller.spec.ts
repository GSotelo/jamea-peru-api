import { Test, TestingModule } from '@nestjs/testing';
import { SoupsController } from './soups.controller';

describe('SoupsController', () => {
  let controller: SoupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoupsController],
    }).compile();

    controller = module.get<SoupsController>(SoupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
