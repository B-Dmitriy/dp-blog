import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '01-app/providers/StoreProvider';
import type { Profile } from '../../../types/profile.types';

export const getProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/getProfile',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const result = await extra.api.get('/profile');

            return result.data;
        } catch (err) {
            return rejectWithValue('getProfile thunk error');
        }
    },
);
