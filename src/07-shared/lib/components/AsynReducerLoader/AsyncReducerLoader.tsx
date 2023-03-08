import React, { PropsWithChildren, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from '07-shared/lib/hooks/app';
import type { StoreWithReducerManager, RootStateKey } from '01-app/providers/StoreProvider/types/state.types';

export type ReducerList = { [key in RootStateKey]?: Reducer };
export type ReducerListTuple = [RootStateKey, Reducer];

interface AsyncReducerLoaderProps {
    reducers: ReducerList
    removeAfterUnmount?: boolean;
}

export const AsyncReducerLoader = ({
    children,
    reducers,
    removeAfterUnmount = false,
}: PropsWithChildren<AsyncReducerLoaderProps>) => {
    const dispatch = useAppDispatch();
    const store = useStore() as StoreWithReducerManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]: ReducerListTuple) => {
            store.reducerManager.add(reducerName, reducer);
            dispatch({ type: `@INIT ${reducerName}` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerName, _]: ReducerListTuple) => {
                    store.reducerManager.remove(reducerName);
                    dispatch({ type: `@UNMOUNT ${reducerName}` });
                });
            }
        };
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};
