import { Test, TestingModule } from '@nestjs/testing';
import { NiceController } from './nice.controller';

describe('NiceController', () => {
  let controller: NiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NiceController],
    }).compile();

    controller = module.get<NiceController>(NiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
