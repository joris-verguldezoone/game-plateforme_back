import { Test, TestingModule } from '@nestjs/testing';
import { ListeamisService } from './listeamis.service';

describe('ListeamisService', () => {
  let service: ListeamisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListeamisService],
    }).compile();

    service = module.get<ListeamisService>(ListeamisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
