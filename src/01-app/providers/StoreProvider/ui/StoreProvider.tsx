import { Provider } from 'react-redux';
import type { ReduxProviderProps, RootState } from '01-app/providers/StoreProvider/types/state.types';
import { createReduxStore } from '../model/store';

export const StoreProvider = ({ children, initialState }: ReduxProviderProps) => {
    const store = createReduxStore(initialState as RootState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
