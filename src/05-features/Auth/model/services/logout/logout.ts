import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '06-entities/User';
import { USER_LOCALSTORAGE_KEY } from '07-shared/constants/constants';

export const logout = createAsyncThunk(
    'auth/logoutThunk',
    async (_, thunkAPI) => {
        try {
            localStorage.setItem(USER_LOCALSTORAGE_KEY, '');

            return thunkAPI.dispatch(userActions.removeUserData());
        } catch (err) {
            return thunkAPI.rejectWithValue('no_authorized');
        }
    },
);
