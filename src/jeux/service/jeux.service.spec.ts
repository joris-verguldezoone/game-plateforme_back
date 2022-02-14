import { Test, TestingModule } from '@nestjs/testing';
import { JeuxService } from './jeux.service';

describe('JeuxService', () => {
  let service: JeuxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JeuxService],
    }).compile();

    service = module.get<JeuxService>(JeuxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
