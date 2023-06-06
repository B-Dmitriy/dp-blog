import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CommentList } from '06-entities/Comment';
import { ArticleDetails } from '06-entities/Article';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Text } from '07-shared/ui/Text/Text';
import { AsyncReducerLoader, ReducerList } from '07-shared/lib/components';
import {
    articleDetailsCommentsReducer,
    getArticleComments,
} from '03-pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import {
    fetchCommentsByArticleId,
} from '03-pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch, useAppSelector } from '07-shared/lib/hooks/app';
import { useInitialEffect } from '07-shared/lib/hooks/useInitialEffect';
import { getArticleCommentsIsLoading } from '03-pages/ArticleDetailsPage/model/selectors/commentsSelectors';

import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(({
    className,
}: ArticleDetailsPageProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article-details');
    const comments = useAppSelector(getArticleComments.selectAll);
    const commentsIsLoading = useAppSelector(getArticleCommentsIsLoading);

    if (!id) {
        return (
            <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                {t('article_not_found')}
            </div>
        );
    }

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <AsyncReducerLoader reducers={reducers}>
            <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text view="header">{t('comments')}</Text>
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            </div>
        </AsyncReducerLoader>
    );
});

export default ArticleDetailsPage;
