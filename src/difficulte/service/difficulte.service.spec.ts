import { Test, TestingModule } from '@nestjs/testing';
import { DifficulteService } from './difficulte.service';

describe('DifficulteService', () => {
  let service: DifficulteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DifficulteService],
    }).compile();

    service = module.get<DifficulteService>(DifficulteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
