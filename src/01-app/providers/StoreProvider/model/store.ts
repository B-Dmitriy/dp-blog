import {
    CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from '06-entities/User';
import { $api } from '07-shared/api/api';
import type { To } from 'history';
import type { NavigateOptions } from 'react-router';
import { createReducerManager } from './reducerManager';
import type { RootState, ThunkExtraArg } from '../types/state.types';

export function createReduxStore(
    initialState?: RootState,
    asyncReducers?: ReducersMapObject<RootState>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<RootState> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArgs: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<RootState>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
