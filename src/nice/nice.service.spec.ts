import { Test, TestingModule } from '@nestjs/testing';
import { NiceService } from './nice.service';

describe('NiceService', () => {
  let service: NiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NiceService],
    }).compile();

    service = module.get<NiceService>(NiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
