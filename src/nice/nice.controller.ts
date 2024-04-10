import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ForNice, Nice } from './entities/nice.entity';
import { NiceService } from './nice.service';

@Controller('nice')
export class NiceController {
  constructor(private readonly S: NiceService) { }

  @Get()
  getall(): Nice[] {
    return this.S.getall();
  }
  @Get("/search")
  search(@Query("id") id: string): Nice {
    return this.S.getone(id);
  }
  @Get(':id')
  hello(@Param("id") id: string): Nice {
    return this.S.getone(id);
  }
  @Post()
  creates(@Body() movie: ForNice): void {
    return this.S.create(movie);
  }
  @Put(":id")
  asdf(@Param("id") id: string, @Body() body: object): object {
    return this.S.putone(id, body);
  }
  @Delete(":id")
  delId(@Param('id') id: string) {
    return this.S.delone(id)
  }
  @Patch(":id")
  asdasdff(@Param('id') id: string, @Body() body: object): void {
    return this.S.patone(id, body);
  }
}
