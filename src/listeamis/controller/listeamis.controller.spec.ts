import { Test, TestingModule } from '@nestjs/testing';
import { ListeamisController } from './listeamis.controller';
import { ListeamisService } from '../service/listeamis.service';

describe('ListeamisController', () => {
  let controller: ListeamisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListeamisController],
      providers: [ListeamisService],
    }).compile();

    controller = module.get<ListeamisController>(ListeamisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
