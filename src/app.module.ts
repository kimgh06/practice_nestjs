import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NiceModule } from './nice/nice.module';

@Module({
  imports: [ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
  }), NiceModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
