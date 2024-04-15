import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NiceModule } from './nice/nice.module';
import { SseController } from './sse/sse.controller';

@Module({
  imports: [ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
  }), NiceModule],
  controllers: [SseController],
  providers: [],
})
export class AppModule { }
