import { Test, TestingModule } from '@nestjs/testing';
import { PartieusersService } from './partieusers.service';

describe('PartieusersService', () => {
  let service: PartieusersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartieusersService],
    }).compile();

    service = module.get<PartieusersService>(PartieusersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
