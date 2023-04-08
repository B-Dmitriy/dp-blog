import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState, ThunkConfig } from '01-app/providers/StoreProvider';
import type { Profile } from '06-entities/Profile/types/profile.types';

export const updateProfile = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'editableProfile/updateProfile',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const date = thunkAPI.getState() as RootState;
            const result = await extra.api.post('/profile', date.editableProfile?.profileForm);

            return result.data;
        } catch (err) {
            return rejectWithValue('updateProfile thunk error');
        }
    },
);
