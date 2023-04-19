import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleCodeBlockComponent } from '06-entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '06-entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '06-entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Avatar } from '07-shared/ui/Avatar/Avatar';
import EyeIcon from '07-shared/assets/icons/view.svg';
import NewsImage from '07-shared/assets/images/news.png';
import { Skeleton } from '07-shared/ui/Skeleton/Skeleton';
import CalendarIcon from '07-shared/assets/icons/calendar.svg';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize } from '07-shared/ui/Text/Text';
import { useAppDispatch, useAppSelector } from '07-shared/lib/hooks/app';
import { ReducerList, AsyncReducerLoader } from '07-shared/lib/components/AsyncReducerLoader/AsyncReducerLoader';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import classes from './ArticleDetails.module.scss';

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../types/article.types';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({
    className,
    id,
}: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(getArticleDetailsIsLoading);
    const article = useAppSelector(getArticleDetailsData);
    const error = useAppSelector(getArticleDetailsError);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    key={block.id}
                    block={block}
                    className={classes.block}
                />
            );
        case ArticleBlockType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    key={block.id}
                    block={block}
                    className={classes.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    key={block.id}
                    className={classes.block}
                    block={block}
                />
            );
        default:
            return null;
        }
    }, []);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
                <Skeleton className={classes.title} width={300} height={32} />
                <Skeleton className={classes.skeleton} width={600} height={24} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
                <Skeleton className={classes.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
            >
                {t('Произошла ошибка при загрузке статьи.')}
            </Text>
        );
    } else {
        content = (
            <>
                <div className={classes.avatarWrapper}>
                    <Avatar
                        size="large"
                        src={article?.img || NewsImage}
                        alt={article?.title || 'article'}
                        className={classes.avatar}
                    />
                </div>
                <Text
                    className={classes.title}
                    view="header"
                    size={TextSize.L}
                >
                    {article?.title}
                </Text>
                <Text
                    className={classes.title}
                    view="paragraph"
                    size={TextSize.L}
                >
                    {article?.subtitle}
                </Text>
                <div className={classes.articleInfo}>
                    <EyeIcon className={classes.icon} />
                    <Text view="paragraph">{String(article?.views)}</Text>
                </div>
                <div className={classes.articleInfo}>
                    <CalendarIcon className={classes.icon} />
                    <Text view="paragraph">{article?.createdAt}</Text>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <AsyncReducerLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(classes.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </AsyncReducerLoader>
    );
});
