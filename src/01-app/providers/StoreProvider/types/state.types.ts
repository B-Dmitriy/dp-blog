import { ReactNode } from 'react';
import {
    AnyAction, CombinedState, DeepPartial, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { To } from 'history';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router';
import type { ArticleDetailsCommentsState } from '03-pages/ArticleDetailsPage';
import type { AuthInitialState } from '05-features/Auth';
import type { UserInitialState } from '06-entities/User';
import type { ProfileSliceState } from '06-entities/Profile';
import { ArticleState } from '06-entities/Article/types/article.types';
import { createReduxStore } from '../model/store';

const store = createReduxStore();
export type AppDispatch = typeof store.dispatch;

export interface RootState {
    user: UserInitialState,

    // Async reducers
    auth?: AuthInitialState,
    editableProfile?: ProfileSliceState,
    articleDetails?: ArticleState;
    articleDetailsComments?: ArticleDetailsCommentsState;
}

export interface ReduxProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<RootState>;
    asyncReducers?: DeepPartial<ReducersMapObject<RootState>>;
}

export type RootStateKey = keyof RootState;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<RootState>;
    reduce: (state: RootState, action: AnyAction) => CombinedState<RootState>;
    add: (key: RootStateKey, reducer: Reducer) => void;
    remove: (key: RootStateKey) => void;
}

export interface StoreWithReducerManager extends EnhancedStore<RootState> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T = string> {
    rejectValue: T;
    extra: ThunkExtraArg;
}
