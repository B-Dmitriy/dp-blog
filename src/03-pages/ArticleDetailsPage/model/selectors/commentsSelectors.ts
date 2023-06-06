import { RootState } from '01-app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (
    state: RootState,
) => state.articleDetailsComments?.isLoading;

export const getArticleCommentsError = (
    state: RootState,
) => state.articleDetailsComments?.error;
