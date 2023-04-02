import { Provider } from 'react-redux';
import { Navigate } from 'react-router-dom';
import type { To } from 'history';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { ReduxProviderProps, RootState } from '01-app/providers/StoreProvider/types/state.types';
import { createReduxStore } from '../model/store';

export const StoreProvider = ({ children, initialState, asyncReducers }: ReduxProviderProps) => {
    const navigate = (to: To) => <Navigate to={to} />;

    const store = createReduxStore(
        initialState as RootState,
        asyncReducers as ReducersMapObject<RootState>,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
