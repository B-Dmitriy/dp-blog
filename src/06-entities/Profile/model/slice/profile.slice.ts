import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfile } from '06-entities/Profile';
import type { ProfileSliceState, Profile } from '../../types/profile.types';

const initialState: ProfileSliceState = {
    isLoading: false,
    profile: null,
    error: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.profile = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.error = action.payload || '';
                state.isLoading = true;
            });
    },
});

export const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
