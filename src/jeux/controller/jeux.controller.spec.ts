import { Test, TestingModule } from '@nestjs/testing';
import { JeuxController } from './jeux.controller';
import { JeuxService } from '../service/jeux.service';

describe('JeuxController', () => {
  let controller: JeuxController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JeuxController],
      providers: [JeuxService],
    }).compile();

    controller = module.get<JeuxController>(JeuxController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
