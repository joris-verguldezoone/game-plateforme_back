import { Test, TestingModule } from '@nestjs/testing';
import { ReglesjeuxService } from './reglesjeux.service';

describe('ReglesjeuxService', () => {
  let service: ReglesjeuxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReglesjeuxService],
    }).compile();

    service = module.get<ReglesjeuxService>(ReglesjeuxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
