import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ScraperModule } from './scraper/scraper.module';

@Module({
  imports: [AuthModule, ScraperModule],
  controllers: [AppController],
})
export class AppModule {}
