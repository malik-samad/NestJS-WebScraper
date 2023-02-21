import { combineReducers } from "redux";
import { INITIAL_STATE_SCRAPER ,ScraperReducer } from "./scraper/scraper.reducer";
import { INITIAL_STATE_USER, UserReducer } from "./user/user.reducer";

export default combineReducers({user: UserReducer, scraper: ScraperReducer});


export const saveState = (state:any) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxPersist_nest_scraper", serializedState);
    }catch(err){
        console.log(err)
    }
}

export const loadState = () => {
    try{
        const state = JSON.parse(localStorage.getItem("reduxPersist_nest_scraper") || "")
        if(state)
         return state;
    }catch(error){
        console.log(error);
    } 
    return {user: INITIAL_STATE_USER, scraper: INITIAL_STATE_SCRAPER}
}