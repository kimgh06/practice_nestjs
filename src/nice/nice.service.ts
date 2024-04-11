import { Injectable, NotFoundException } from '@nestjs/common';
import { Nice } from './entities/nice.entity';
import { CreateDTO } from './dtos/create.dto';

@Injectable()
export class NiceService {
  private nices: Nice[] = [];

  getall(): Nice[] {
    return this.nices;
  }

  getone(id: number): Nice {
    if (!this.nices.find(e => e.id === id)) {
      throw new NotFoundException(`not found the id: ${id}`);
    }
    return this.nices.find(e => e.id === id);
  }

  create(ob: CreateDTO): void {
    this.nices.push({
      id: this.nices.length + 1,
      ...ob
    })
  }

  putone(id: number, ob: CreateDTO): object {
    return {
      fxxk: id,
      ...ob
    }
  }

  delone(id: number) {
    this.getone(id);
    this.nices = this.nices.filter(e => e.id !== id)
  }

  patone(id: number, update: CreateDTO): void {
    const asdf = this.getone(id);
    this.delone(id);
    this.nices.push({ ...asdf, ...update })
    this.nices.sort((a: Nice, b: Nice) => a.id > b.id ? 1 : -1);
  }
}
