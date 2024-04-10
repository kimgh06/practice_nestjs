import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('nice')
export class NiceController {
  @Get(':id')
  hello(@Param("id") id: string): string {
    return id
  }
  @Post()
  creates(): string {
    return "sdfd"
  }
  @Put(":id")
  asdf(@Param("id") id: string): string {
    return id + "puts"
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
