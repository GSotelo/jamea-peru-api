import { Test, TestingModule } from '@nestjs/testing';
import { SideDishesController } from './side-dishes.controller';

describe('SideDishesController', () => {
  let controller: SideDishesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SideDishesController],
    }).compile();

    controller = module.get<SideDishesController>(SideDishesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
