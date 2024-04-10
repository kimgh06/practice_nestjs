import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NiceController } from './nice/nice.controller';

@Module({
  imports: [ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
  })],
  controllers: [NiceController],
  providers: [],
})
export class AppModule { }
