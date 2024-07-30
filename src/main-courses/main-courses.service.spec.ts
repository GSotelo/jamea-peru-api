import { Test, TestingModule } from '@nestjs/testing';
import { MainCoursesService } from './main-courses.service';

describe('MainCoursesService', () => {
  let service: MainCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainCoursesService],
    }).compile();

    service = module.get<MainCoursesService>(MainCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
