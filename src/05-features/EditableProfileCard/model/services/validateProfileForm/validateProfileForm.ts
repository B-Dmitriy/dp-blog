import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '01-app/providers/StoreProvider';
import { ProfileFormValidateErrors } from '06-entities/Profile/types/profile.types';
import i18n from '07-shared/config/i18n/i18n';

export const validateProfileForm = createAsyncThunk<ProfileFormValidateErrors, void>(
    'editableProfile/validateProfileForm',
    async (_, thunkAPI) => {
        try {
            const errors: ProfileFormValidateErrors = {};
            const state = thunkAPI.getState() as RootState;

            const profileForm = state.editableProfile?.profileForm;

            if (!profileForm?.username) {
                errors.username = i18n.t('errors.required', {
                    ns: 'profile',
                });
            }

            if (!profileForm?.first) {
                errors.first = i18n.t('errors.required', {
                    ns: 'profile',
                });
            }

            if (!profileForm?.lastname) {
                errors.lastname = i18n.t('errors.required', {
                    ns: 'profile',
                });
            }

            if (!profileForm?.age) {
                errors.age = i18n.t('errors.not_zero', {
                    ns: 'profile',
                });
            }

            return errors;
        } catch (e) {
            return thunkAPI.rejectWithValue('asd');
        }
    },
);
