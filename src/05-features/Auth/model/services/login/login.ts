import i18n from 'i18next';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '06-entities/User';
import { USER_LOCALSTORAGE_KEY } from '07-shared/constants/constants';
import type { ThunkConfig } from '01-app/providers/StoreProvider/types/state.types';
import type { LoginThunk } from '../../../types/auth.types';

export const login = createAsyncThunk<User, LoginThunk, ThunkConfig<string>>(
    'auth/loginThunk',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<User>('/login', { username, password });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setUserData(response.data));

            return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(i18n.t('auth.incorrect_data_error'));
        }
    },
);
