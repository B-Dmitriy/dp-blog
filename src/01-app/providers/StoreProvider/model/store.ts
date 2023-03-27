import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from '06-entities/User';
import { $api } from '07-shared/api/api';
import type { To } from 'history';
import type { NavigateOptions } from 'react-router';
import { createReducerManager } from './reducerManager';
import type { RootState } from '../types/state.types';

export function createReduxStore(
    initialState?: RootState,
    asyncReducers?: ReducersMapObject<RootState>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: IS_DEV,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                },
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
