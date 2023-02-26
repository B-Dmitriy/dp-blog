import axios from 'axios';
import i18n from 'i18next';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '06-entities/User';
import { USER_LOCALSTORAGE_KEY } from '07-shared/constants/constants';
import { LoginThunk } from '../../types/auth.types';

export const loginThunk = createAsyncThunk<User, LoginThunk, { rejectValue: string }>(
    'auth/loginThunk',
    async ({ username, password }: LoginThunk, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', { username, password });

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
