import { Dispatch } from "redux"
import { User } from "../../types"

export const ActionTypes_User ={
    SET_USER: "SET_USER"
}

export type ActionType_UserReducer = ActionType_SetUser

export type ActionType_SetUser = {
    type: typeof ActionTypes_User.SET_USER,
    payload: User
}

export function setUserState(user:User){
    return (dispatch: Dispatch) => {
        try{
            dispatch({type: ActionTypes_User.SET_USER, payload: user})
        }catch(err){
            console.log(err);
        }
    }
}