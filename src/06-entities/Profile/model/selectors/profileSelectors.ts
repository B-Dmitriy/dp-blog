import type { RootState } from '01-app/providers/StoreProvider';

export const getProfileIsLoading = (state: RootState) => state?.profile?.isLoading || false;
export const getProfileInfo = (state: RootState) => state?.profile?.profile || null;
