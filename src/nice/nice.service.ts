import { Injectable } from '@nestjs/common';
import { ForNice, Nice } from './entities/nice.entity';

@Injectable()
export class NiceService {
  private nices: Nice[] = [];

  getall(): Nice[] {
    return this.nices;
  }

  getone(id: string): Nice {
    return this.nices.find(e => e.id === +id);
  }

  getParam(id: string): string {
    return id
  }

  create(ob: ForNice): object {
    this.nices.push({
      id: this.nices.length + 1,
      ...ob
    })
    return ob
  }

  putone(id: string, ob: object): object {
    return {
      fxxk: id,
      ...ob
    }
  }

  delone(id: string): string {
    this.nices.filter(e => e.id !== +id)
    return 'del' + id;
  }

  patone(): string {
    return 'patch'
  }
}
