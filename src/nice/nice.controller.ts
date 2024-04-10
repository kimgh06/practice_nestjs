import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('nice')
export class NiceController {
  @Get("/search")
  search(@Query("id") id: string): string {
    return id
  }
  @Get(':id')
  hello(@Param("id") id: string): string {
    return id
  }
  @Post()
  creates(@Body() movie: object): object {
    console.log(movie)
    return movie
  }
  @Put(":id")
  asdf(@Param("id") id: string, @Body() body: object): object {
    return {
      fxxk: id,
      ...body
    }
  }
  @Delete()
  asdfasdf(): string {
    return 'del'
  }
  @Patch()
  asdasdff(): string {
    return 'patch'
  }
}
