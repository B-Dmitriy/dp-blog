import { Profile } from '06-entities/Profile';
import { Country } from '06-entities/Country';
import { Currency } from '06-entities/Currency';
import {
    getProfileError,
    getProfileFormErrors, getProfileFormInfo, getProfileInfo,
    getProfileIsLoading, getProfileValidateIsLoading,
} from '05-features/EditableProfileCard/model/selectors/profileSelectors';
import { RootState } from '01-app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

const profile: Profile = {
    lastname: 'lastname',
    first: 'firstname',
    country: Country.BEL,
    currency: Currency.USD,
    avatar: 'avatar.jpg',
    city: 'Minsk',
    age: 30,
    username: 'username',
};

const profileForm = { ...profile, username: 'form_username' };

const profileFormErrors = { lastname: 'lastname_error' };

const editableProfileState: DeepPartial<RootState> = {
    editableProfile: {
        isLoading: true,
        error: 'error',
        profileFormErrors,
        profile,
        profileForm,
        isValidateLoading: true,
    },
};

describe('profileSelectors test', () => {
    it('should be return isLoading', () => {
        const result = getProfileIsLoading(editableProfileState as RootState);
        expect(result).toBeTruthy();
    });
    it('should be return isLoading false', () => {
        const result = getProfileIsLoading({} as RootState);
        expect(result).toBeFalsy();
    });
    it('should be return error', () => {
        const result = getProfileError(editableProfileState as RootState);
        expect(result).toBe('error');
    });
    it('should be return error null', () => {
        const result = getProfileError({} as RootState);
        expect(result).toBeNull();
    });
    it('should be return FormErrors', () => {
        const result = getProfileFormErrors(editableProfileState as RootState);
        expect(result).toEqual(profileFormErrors);
    });
    it('should be return FormErrors empty object', () => {
        const result = getProfileFormErrors({} as RootState);
        expect(result).toEqual({});
    });
    it('should be return validate loading', () => {
        const result = getProfileValidateIsLoading(editableProfileState as RootState);
        expect(result).toBeTruthy();
    });
    it('should be return validate loading false', () => {
        const result = getProfileValidateIsLoading({} as RootState);
        expect(result).toBeFalsy();
    });
    it('should be return profile', () => {
        const result = getProfileInfo(editableProfileState as RootState);
        expect(result).toEqual(profile);
    });
    it('should be return profile null', () => {
        const result = getProfileInfo({} as RootState);
        expect(result).toBeNull();
    });
    it('should be return profileForm', () => {
        const result = getProfileFormInfo(editableProfileState as RootState);
        expect(result).toEqual(profileForm);
    });
    it('should be return profileForm null', () => {
        const result = getProfileFormInfo({} as RootState);
        expect(result).toBeNull();
    });
});
