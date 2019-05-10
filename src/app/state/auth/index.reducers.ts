import { AppState } from './index.state';
import { actionTypeList, AppActions } from './index.action';

export const initialState: AppState = {
    drawer: false,
    actionName: 'initial Action state'
}

export function appReducer( state = initialState, action: AppActions) {

    if( action.type === actionTypeList.ACTION1) {
        return Object.assign( state, {
            ...state,
            drawer: true,
            actionName: 'First Action to be performed!'
        })
    }else if ( action.type === actionTypeList.ACTION2) {
        return Object.assign( state, {
            ...state,
            drawer: true,
            actionName: 'Second action to be performed!'
        })
    }

}