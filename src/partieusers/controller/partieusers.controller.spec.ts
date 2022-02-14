import { Test, TestingModule } from '@nestjs/testing';
import { PartieusersController } from './partieusers.controller';
import { PartieusersService } from '../service/partieusers.service';

describe('PartieusersController', () => {
  let controller: PartieusersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartieusersController],
      providers: [PartieusersService],
    }).compile();

    controller = module.get<PartieusersController>(PartieusersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
