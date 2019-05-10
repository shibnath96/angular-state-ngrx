import { Action } from '@ngrx/store';

export const actionTypeList = {
    ACTION1: '[UI] ACTION1',
    ACTION2: '[UI] ACTION2'
}

export class Action1 implements Action {
    type = actionTypeList.ACTION1;
    constructor( public payload: any) {}
}

export class Action2 implements Action {
    type = actionTypeList.ACTION2;
    constructor( public payload: any) {}
}

export type AppActions = Action1 | Action2