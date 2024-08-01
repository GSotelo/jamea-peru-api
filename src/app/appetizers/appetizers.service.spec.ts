import { Test, TestingModule } from '@nestjs/testing';
import { AppetizersService } from './appetizers.service';

describe('AppetizersService', () => {
  let service: AppetizersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppetizersService],
    }).compile();

    service = module.get<AppetizersService>(AppetizersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
