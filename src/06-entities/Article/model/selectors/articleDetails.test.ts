import { DeepPartial } from '@reduxjs/toolkit';
import { RootState } from '01-app/providers/StoreProvider';
import { ArticleState } from '06-entities/Article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<RootState> = {
            articleDetails: {
                data,
            } as ArticleState,
        };
        expect(getArticleDetailsData(state as RootState)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<RootState> = {};
        expect(getArticleDetailsData(state as RootState)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<RootState> = {
            articleDetails: {
                isLoading: false,
                error: 'error',
            } as ArticleState,
        };
        expect(getArticleDetailsError(state as RootState)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<RootState> = {};
        expect(getArticleDetailsError(state as RootState)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<RootState> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as RootState)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<RootState> = {};
        expect(getArticleDetailsIsLoading(state as RootState)).toEqual(false);
    });
});
