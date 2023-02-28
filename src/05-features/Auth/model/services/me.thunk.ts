import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from '06-entities/User';
import { USER_LOCALSTORAGE_KEY } from '07-shared/constants/constants';

export const meThunk = createAsyncThunk(
    'auth/meThunk',
    async (_, thunkAPI) => {
        try {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

            if (!user) {
                throw new Error();
            }

            return thunkAPI.dispatch(userActions.setUserData(JSON.parse(user)));
        } catch (err) {
            return thunkAPI.rejectWithValue('no_authorized');
        }
    },
);
