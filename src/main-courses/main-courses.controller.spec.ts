import { Test, TestingModule } from '@nestjs/testing';
import { MainCoursesController } from './main-courses.controller';

describe('MainCoursesController', () => {
  let controller: MainCoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainCoursesController],
    }).compile();

    controller = module.get<MainCoursesController>(MainCoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
