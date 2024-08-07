import { Test, TestingModule } from '@nestjs/testing';
import { SoupsService } from './soups.service';

describe('SoupsService', () => {
  let service: SoupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoupsService],
    }).compile();

    service = module.get<SoupsService>(SoupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
