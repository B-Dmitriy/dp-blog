import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { ReducersMapObject } from '@reduxjs/toolkit';
import type { ReduxProviderProps, RootState } from '01-app/providers/StoreProvider/types/state.types';
import { createReduxStore } from '../model/store';

export const StoreProvider = ({ children, initialState, asyncReducers }: ReduxProviderProps) => {
    const navigate = useNavigate();

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
