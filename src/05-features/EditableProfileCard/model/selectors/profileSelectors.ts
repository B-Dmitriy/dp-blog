import type { RootState } from '01-app/providers/StoreProvider';

export const getProfileIsLoading = (state: RootState) => state?.editableProfile?.isLoading || false;
export const getProfileInfo = (state: RootState) => state?.editableProfile?.profile || null;
export const getProfileFormInfo = (state: RootState) => state?.editableProfile?.profileForm || null;
export const getProfileError = (state: RootState) => state?.editableProfile?.error || null;
