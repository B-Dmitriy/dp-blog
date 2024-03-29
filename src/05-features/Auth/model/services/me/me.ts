import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '07-shared/constants/constants';
import { userActions } from '06-entities/User';

export const me = createAsyncThunk(
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
