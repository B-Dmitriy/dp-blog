import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState, ThunkConfig } from '01-app/providers/StoreProvider';
import type { Profile, ProfileFormValidateErrors } from '06-entities/Profile/types/profile.types';
import {
    validateProfileForm,
} from '05-features/EditableProfileCard/model/services/validateProfileForm/validateProfileForm';

export const updateProfile = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ProfileFormValidateErrors>
    >(
        'editableProfile/updateProfile',
        async (_, thunkAPI) => {
            const { extra, rejectWithValue } = thunkAPI;
            try {
                const date = thunkAPI.getState() as RootState;

                const validateErrors = await thunkAPI.dispatch(validateProfileForm());

                if (typeof validateErrors.payload === 'object'
                    && validateErrors.payload !== null
                    && Object.keys(validateErrors?.payload).length
                ) {
                    return thunkAPI.rejectWithValue(validateErrors.payload);
                }
                const result = await extra.api.post('/profile', date.editableProfile?.profileForm);

                return result.data;
            } catch (err) {
                return rejectWithValue({ server_error: 'updateProfile thunk error' });
            }
        },
    );
