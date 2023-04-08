import type { RootState } from '01-app/providers/StoreProvider';

export const getProfileIsLoading = (state: RootState) => state?.profile?.isLoading || false;
export const getProfileInfo = (state: RootState) => state?.profile?.profile || null;
export const getProfileFormInfo = (state: RootState) => state?.profile?.profileForm || null;
export const getProfileError = (state: RootState) => state?.profile?.error || null;
