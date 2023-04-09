import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfile } from '06-entities/Profile';
import { Country } from '06-entities/Country';
import { Currency } from '06-entities/Currency';
import type { Profile, ProfileSliceState } from '06-entities/Profile';
import { updateProfile } from '05-features/EditableProfileCard/model/services/updateProfile/updateProfile';
import {
    validateProfileForm,
} from '05-features/EditableProfileCard/model/services/validateProfileForm/validateProfileForm';
import { ProfileFormValidateErrors } from '06-entities/Profile/types/profile.types';

const initialForm = {
    avatar: '',
    username: '',
    first: '',
    lastname: '',
    age: 0,
    city: '',
    country: Country.RUS,
    currency: Currency.RUB,
};

const initialState: ProfileSliceState = {
    isLoading: false,
    isValidateLoading: false,
    profile: null,
    profileForm: initialForm,
    profileFormErrors: {},
    error: '',
};

const editableProfileSlice = createSlice({
    name: 'editableProfile',
    initialState,
    reducers: {
        onAvatarChange(state, action: PayloadAction<string>) {
            delete state.profileFormErrors.avatar;
            state.profileForm.avatar = action.payload;
        },
        onUsernameChange(state, action: PayloadAction<string>) {
            delete state.profileFormErrors.username;
            state.profileForm.username = action.payload;
        },
        onFirstnameChange(state, action: PayloadAction<string>) {
            delete state.profileFormErrors.first;
            state.profileForm.first = action.payload;
        },
        onLastnameChange(state, action: PayloadAction<string>) {
            delete state.profileFormErrors.lastname;
            state.profileForm.lastname = action.payload;
        },
        onAgeChange(state, action: PayloadAction<number>) {
            delete state.profileFormErrors.age;
            state.profileForm.age = action.payload;
        },
        onCityChange(state, action: PayloadAction<string>) {
            delete state.profileFormErrors.city;
            state.profileForm.city = action.payload;
        },
        onCountryChange(state, action: PayloadAction<Country>) {
            delete state.profileFormErrors.country;
            state.profileForm.country = action.payload;
        },
        onCurrencyChange(state, action: PayloadAction<Currency>) {
            delete state.profileFormErrors.currency;
            state.profileForm.currency = action.payload;
        },
        resetForm(state) {
            if (state.profile) {
                state.profileForm = state.profile;
            } else {
                state.profileForm = initialForm;
            }
            state.profileFormErrors = {};
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
                state.isLoading = false;
            })
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.profile = action.payload;
                state.profileForm = action.payload;
                state.isLoading = false;
            })
            .addCase(updateProfile.rejected, (state, action) => {
                if (typeof action.payload === 'object') {
                    state.profileFormErrors = action.payload;
                }
                state.isLoading = false;
            })
            .addCase(validateProfileForm.pending, (state) => {
                state.isValidateLoading = true;
            })
            .addCase(validateProfileForm.fulfilled, (
                state,
                action: PayloadAction<ProfileFormValidateErrors>,
            ) => {
                state.profileFormErrors = action.payload;
                state.isValidateLoading = false;
            })
            .addCase(validateProfileForm.rejected, (state) => {
                state.isValidateLoading = false;
            });
    },
});

export const editableProfileReducer = editableProfileSlice.reducer;
export const editableProfileActions = editableProfileSlice.actions;
