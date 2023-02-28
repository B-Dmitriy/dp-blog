import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import type { AuthInitialState } from '05-features/Auth';
import type { UserInitialState } from '06-entities/User';
import { createReduxStore } from '../model/store';

const store = createReduxStore();
export type AppDispatch = typeof store.dispatch;

export interface RootState {
    auth: AuthInitialState,
    user: UserInitialState,
}

export interface ReduxProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<RootState>;
}
