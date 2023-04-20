import { RootState } from '01-app/providers/StoreProvider';

export const getArticleDetailsData = (
    state: RootState,
) => state.articleDetails?.data;

export const getArticleDetailsIsLoading = (
    state: RootState,
) => state.articleDetails?.isLoading || false;

export const getArticleDetailsError = (
    state: RootState,
) => state.articleDetails?.error;
