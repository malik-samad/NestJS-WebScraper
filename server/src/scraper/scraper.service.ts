import { Injectable } from '@nestjs/common';

@Injectable()
export class ScraperService {
    
    add(){
        return "add scraper"
    }
    
    update(){
        return "update scraper"
    }
    
    delete(){
        return "delete scraper"
    }

    addField(){
        return "add field"
    }
    
    updateField(){
        return "update field"
    }
    
    deleteField(){
        return "delete field"
    }
}
