import { Test, TestingModule } from '@nestjs/testing';
import { DifficulteController } from './difficulte.controller';
import { DifficulteService } from '../service/difficulte.service';

describe('DifficulteController', () => {
  let controller: DifficulteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DifficulteController],
      providers: [DifficulteService],
    }).compile();

    controller = module.get<DifficulteController>(DifficulteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
