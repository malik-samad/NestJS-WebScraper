import { Get } from '@nestjs/common';
import { Controller, Post, Delete, Put } from '@nestjs/common';
import { ScraperService } from './scraper.service';

@Controller('scraper')
export class ScraperController {
    constructor(private scraperService: ScraperService) { }

    @Get("/")
    get() {
        return "get scraper"
    }

    @Post("run")
    run() {
        return "run scraper"
    }

    @Post("/")
    add() {
        return this.scraperService.add()
    }

    @Put("/")
    update() {
        return this.scraperService.update()
    }

    @Delete("/")
    delete() {
        return this.scraperService.delete()
    }

    @Post("field")
    addField() {
        return this.scraperService.addField()
    }

    @Put("field")
    updateField() {
        return this.scraperService.updateField()
    }

    @Delete("field")
    deleteField() {
        return this.scraperService.deleteField()
    }
}
