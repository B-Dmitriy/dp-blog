import type { DeepPartial } from '@reduxjs/toolkit';
import type { RootState } from '01-app/providers/StoreProvider';
import {
    getAuthError, getAuthIsAuth, getAuthIsLoading, getPassword, getUsername,
} from './authSelectors';

const testState: DeepPartial<RootState> = {
    auth: {
        isAuth: true,
        isLoading: true,
        password: '123',
        username: 'user',
        error: 'error',
    },
};

describe('auth selectors', () => {
    it('should be return username', () => {
        expect(getUsername(testState as RootState)).toBe('user');
    });
    it('should be return empty string', () => {
        expect(getUsername({} as RootState)).toBe('');
    });
    it('should be return password', () => {
        expect(getPassword(testState as RootState)).toBe('123');
    });
    it('should be return empty string', () => {
        expect(getPassword({} as RootState)).toBe('');
    });
    it('should be return isAuth state', () => {
        expect(getAuthIsAuth(testState as RootState)).toBeTruthy();
    });
    it('should be return empty string', () => {
        expect(getAuthIsAuth({} as RootState)).toBeFalsy();
    });
    it('should be return isLoading state', () => {
        expect(getAuthIsLoading(testState as RootState)).toBeTruthy();
    });
    it('should be return empty string', () => {
        expect(getAuthIsLoading({} as RootState)).toBeFalsy();
    });
    it('should be return error', () => {
        expect(getAuthError(testState as RootState)).toBe('error');
    });
    it('should be return empty string', () => {
        expect(getAuthError({} as RootState)).toBe('');
    });
});
