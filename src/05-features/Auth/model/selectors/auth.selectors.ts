import type { RootState } from '01-app/providers/StoreProvider';

export const getUsername = (state: RootState) => state?.auth?.username || '';
export const getPassword = (state: RootState) => state?.auth?.password || '';
export const getAuthIsAuth = (state: RootState) => state?.auth?.isAuth || false;
export const getAuthIsLoading = (state: RootState) => state?.auth?.isLoading || false;
export const getAuthError = (state: RootState) => state?.auth?.error || '';
