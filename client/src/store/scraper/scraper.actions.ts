import { Dispatch } from "redux";
import { Scraper } from "../../types";

export const ActionTypes_Scraper = {
    SET_SCRAPER_LIST: "SET_SCRAPER_LIST",
    CREATE_SCRAPER: "CREATE_SCRAPER",
    DELETE_SCRAPER: "DELETE_SCRAPER",
}

export  type ActionType_ScraperReducer = ActionType_CreateScraper |ActionType_DeleteScraper|ActionType_SetScrapers;

export  type ActionType_CreateScraper = {
    type: typeof ActionTypes_Scraper.CREATE_SCRAPER,
    payload: Scraper
}

export  type ActionType_DeleteScraper = {
    type: typeof ActionTypes_Scraper.DELETE_SCRAPER,
    payload: string // scraper id
}

export  type ActionType_SetScrapers = {
    type: typeof ActionTypes_Scraper.SET_SCRAPER_LIST,
    payload: Scraper[]
}

export function setScraperList(scrapers: Scraper[]){
    return (dispatch:Dispatch) => {
        try{
            dispatch({type:ActionTypes_Scraper.SET_SCRAPER_LIST, payload:scrapers})
        }catch(err){
            console.log(err)
        }
    }
}