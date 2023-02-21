import { Scraper } from "../../types"
import { ActionTypes_Scraper, ActionType_ScraperReducer } from "./scraper.actions";

export type ScraperState = {
    scrapers: Scraper[]
}

export const INITIAL_STATE_SCRAPER: ScraperState = {
    scrapers: [] 
}

export function ScraperReducer(state:ScraperState, action:ActionType_ScraperReducer){
    state = state || INITIAL_STATE_SCRAPER;
    switch(action.type){
        case ActionTypes_Scraper.SET_SCRAPER_LIST:
            return {...state, ...(action.payload as Scraper[])};
    }
}