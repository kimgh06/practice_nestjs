import { Controller, Get, Param } from '@nestjs/common';

@Controller('nice')
export class NiceController {
  @Get(':id')
  hello(@Param("id") id: string): string {
    return id
  }
}
