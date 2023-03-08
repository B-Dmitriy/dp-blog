import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '06-entities/User';
import { createReducerManager } from './reducerManager';
import type { RootState } from '../types/state.types';

export function createReduxStore(
    initialState?: RootState,
    asyncReducers?: ReducersMapObject<RootState>,
) {
    const rootReducers = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<RootState>({
        reducer: reducerManager.reduce,
        devTools: IS_DEV,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
