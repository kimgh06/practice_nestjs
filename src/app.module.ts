import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NiceController } from './nice/nice.controller';
import { NiceService } from './nice/nice.service';

@Module({
  imports: [ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
  })],
  controllers: [NiceController],
  providers: [NiceService],
})
export class AppModule { }
