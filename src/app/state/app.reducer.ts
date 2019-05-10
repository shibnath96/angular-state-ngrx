import { ActionReducerMap } from '@ngrx/store';
import { AppStore } from './app.state';
import { appReducer } from './auth/index.reducers';

export const reducers: ActionReducerMap<AppStore> = {
    ui: appReducer
}