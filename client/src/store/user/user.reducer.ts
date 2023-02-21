import {User} from '../../types'
import { ActionTypes_User, ActionType_UserReducer } from './user.actions'

export type UserReducerState = {user:User|null}

export const INITIAL_STATE_USER:UserReducerState  = {user:null}

export function UserReducer(state:UserReducerState, action: ActionType_UserReducer ){
    state = state || INITIAL_STATE_USER;

    switch(action.type){
        case ActionTypes_User.SET_USER:
            return {...state, user: action.payload};
    }
}