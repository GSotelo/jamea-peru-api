import { Test, TestingModule } from '@nestjs/testing';
import { SoupsController } from './soups.controller';
import { SoupsService } from './soups.service';

describe('SoupsController', () => {
  let controller: SoupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoupsController],
      providers: [SoupsService],
    }).compile();

    controller = module.get<SoupsController>(SoupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
