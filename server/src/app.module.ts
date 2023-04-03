import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ScraperModule } from './scraper/scraper.module';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:pass@localhost:27017/ScraperDb?authSource=admin'),
    AuthModule,
    ScraperModule,
  ],
  controllers: [AppController],
})
export class AppModule { }
