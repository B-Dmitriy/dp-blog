import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfile } from '06-entities/Profile';
import { Country } from '06-entities/Country';
import { Currency } from '06-entities/Currency';
import type { Profile, ProfileSliceState } from '06-entities/Profile';

const initialState: ProfileSliceState = {
    isLoading: false,
    profile: null,
    profileForm: {
        avatar: '',
        username: '',
        first: '',
        lastname: '',
        age: 0,
        city: '',
        country: Country.RUS,
        currency: Currency.RUB,
    },
    error: '',
};

const editableProfileSlice = createSlice({
    name: 'editableProfile',
    initialState,
    reducers: {
        onAvatarChange(state, action: PayloadAction<string>) {
            state.profileForm.avatar = action.payload;
        },
        onUsernameChange(state, action: PayloadAction<string>) {
            state.profileForm.username = action.payload;
        },
        onFirstnameChange(state, action: PayloadAction<string>) {
            state.profileForm.first = action.payload;
        },
        onLastnameChange(state, action: PayloadAction<string>) {
            state.profileForm.lastname = action.payload;
        },
        onAgeChange(state, action: PayloadAction<number>) {
            state.profileForm.age = action.payload;
        },
        onCityChange(state, action: PayloadAction<string>) {
            state.profileForm.city = action.payload;
        },
        onCountryChange(state, action: PayloadAction<Country>) {
            state.profileForm.country = action.payload;
        },
        onCurrencyChange(state, action: PayloadAction<Currency>) {
            state.profileForm.currency = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.profile = action.payload;
                state.profileForm = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.error = action.payload || '';
                state.isLoading = true;
            });
    },
});

export const editableProfileReducer = editableProfileSlice.reducer;
export const editableProfileActions = editableProfileSlice.actions;
