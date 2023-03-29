import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProfile } from '06-entities/Profile';
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
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.profile = action.payload;
                state.isLoading = false;
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = true;
            });
    },
});

export const profileReducer = profileSlice.reducer;
export const profileActions = profileSlice.actions;
