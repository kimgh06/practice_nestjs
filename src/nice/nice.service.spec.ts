import { Test, TestingModule } from '@nestjs/testing';
import { NiceService } from './nice.service';
import { NiceController } from './nice.controller';
import { NotFoundException } from '@nestjs/common';

describe('NiceService', () => {
  let service: NiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NiceController],
      providers: [NiceService],
    }).compile();

    service = module.get<NiceService>(NiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('getAll', () => {
    it('should return nice array', () => {
      const result = service.getall();
      expect(result).toBeInstanceOf(Array)
    })
  })

  describe('getone', () => {
    it('should return one', () => {
      service.create({
        "title": "helloworL",
        "year": 1324,
        "genres": ["asdfasdf", "fefe"]
      });
      const result = service.getone(1);
      expect(result).toBeDefined();
      expect(result['id']).toEqual(1);
    })
  })

  describe('404', () => {
    it('not found', () => {
      try {
        service.getone(9999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`not found the id: ${9999}`);
      }
    })
  })

  describe('delon', () => {
    it('delets one', () => {
      service.create({
        "title": "helloworL",
        "year": 1324,
        "genres": ["asdfasdf", "fefe"]
      });
      const before = service.getall();
      service.delone(1);
      const after = service.getall();
      expect(after.length).toBeLessThan(before.length);
    })
    it('not found', () => {
      try {
        service.delone(-1);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })
  })

  describe('create', () => {
    it('create one', () => {
      const before = service.getall().length;
      service.create({
        "title": "helloworL",
        "year": 1324,
        "genres": ["asdfasdf", "fefe"]
      });
      const after = service.getall().length;
      expect(after).toBeGreaterThan(before);
    })
    it('not found', () => {
      try {
        service.patone(-1, { title: 'fck' });
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    })
  })

  describe('update', () => {
    it('patch one', () => {
      service.create({
        "title": "helloworL",
        "year": 1324,
        "genres": ["asdfasdf", "fefe"]
      });
      service.patone(1, { title: 'hello' });
      const one = service.getone(1);
      expect(one.title).toEqual('hello')
    })
  })
});
