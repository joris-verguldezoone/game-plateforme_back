import { Test, TestingModule } from '@nestjs/testing';
import { ReglesjeuxController } from './reglesjeux.controller';
import { ReglesjeuxService } from '../service/reglesjeux.service';

describe('ReglesjeuxController', () => {
  let controller: ReglesjeuxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReglesjeuxController],
      providers: [ReglesjeuxService],
    }).compile();

    controller = module.get<ReglesjeuxController>(ReglesjeuxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
