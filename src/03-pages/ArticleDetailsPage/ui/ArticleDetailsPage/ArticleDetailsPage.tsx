import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from '06-entities/Article';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = memo(({
    className,
}: ArticleDetailsPageProps) => {
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('article-details');

    if (!id) {
        return (
            <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
});

export default ArticleDetailsPage;
