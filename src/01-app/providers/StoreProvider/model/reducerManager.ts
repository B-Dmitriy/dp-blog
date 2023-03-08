import {
    AnyAction, CombinedState, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import type { ReducerManager, RootState, RootStateKey } from '../types/state.types';

export function createReducerManager(
    initialReducers: ReducersMapObject<RootState>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: RootStateKey[] = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: RootState, action: AnyAction): CombinedState<RootState> => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },

        add: (key: RootStateKey, reducer: Reducer): void => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            combinedReducer = combineReducers(reducers);
        },

        remove: (key) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers);
        },
    };
}
