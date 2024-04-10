import { Injectable, NotFoundException } from '@nestjs/common';
import { ForNice, Nice } from './entities/nice.entity';

@Injectable()
export class NiceService {
  private nices: Nice[] = [];

  getall(): Nice[] {
    return this.nices;
  }

  getone(id: string): Nice {
    if (!this.nices.find(e => e.id === +id)) {
      throw new NotFoundException(`not found the id: ${id}`);
    }
    return this.nices.find(e => e.id === +id);
  }

  create(ob: ForNice): void {
    this.nices.push({
      id: this.nices.length + 1,
      ...ob
    })
  }

  putone(id: string, ob: object): object {
    return {
      fxxk: id,
      ...ob
    }
  }

  delone(id: string) {
    this.getone(id);
    this.nices = this.nices.filter(e => e.id !== +id)
  }

  patone(id: string, update: object): void {
    const asdf = this.getone(id);
    this.delone(id);
    this.nices.push({ ...asdf, ...update })
    this.nices.sort((a: Nice, b: Nice) => a.id > b.id ? 1 : -1);
  }
}
