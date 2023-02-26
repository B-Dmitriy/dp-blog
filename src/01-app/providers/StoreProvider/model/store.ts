import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from '05-features/Auth';
import { userReducer } from '06-entities/User';
import type { RootState } from '../types/state.types';

export function createReduxStore(initialState?: RootState) {
    return configureStore<RootState>({
        reducer: {
            auth: authReducer,
            user: userReducer,
        },
        devTools: IS_DEV,
        preloadedState: initialState,
    });
}
