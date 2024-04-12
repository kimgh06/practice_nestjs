import { Module } from '@nestjs/common';
import { NiceController } from './nice.controller';
import { NiceService } from './nice.service';

@Module({
  controllers: [NiceController],
  providers: [NiceService]
})
export class NiceModule { }
