import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Nice } from './entities/nice.entity';
import { NiceService } from './nice.service';
import { CreateDTO } from './dtos/create.dto';

@Controller('nice')
export class NiceController {
  constructor(private readonly S: NiceService) { }

  @Get()
  getall(): Nice[] {
    return this.S.getall();
  }
  @Get("/search")
  search(@Query("id") id: number): Nice {
    return this.S.getone(id);
  }
  @Get(':id')
  hello(@Param("id") id: number): Nice {
    return this.S.getone(id);
  }
  @Post()
  creates(@Body() movie: CreateDTO): void {
    return this.S.create(movie);
  }
  @Put(":id")
  asdf(@Param("id") id: number, @Body() body: CreateDTO): object {
    return this.S.putone(id, body);
  }
  @Delete(":id")
  delId(@Param('id') id: number) {
    return this.S.delone(id)
  }
  @Patch(":id")
  asdasdff(@Param('id') id: number, @Body() body: CreateDTO): void {
    return this.S.patone(id, body);
  }
}
