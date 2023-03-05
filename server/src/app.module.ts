import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ScraperModule } from './scraper/scraper.module';

@Module({
  imports: [
    AuthModule,
    ScraperModule,
    ServeStaticModule.forRoot({
      rootPath: resolve('../client/build'),
    })
  ],
  controllers: [AppController],
})
export class AppModule { }
