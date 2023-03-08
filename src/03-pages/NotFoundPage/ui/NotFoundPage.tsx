import { useTranslation } from 'react-i18next';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './NotFoundPage.module.scss';

interface NotFountPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFountPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.NotFountPage, {}, [className])}>
            {t('page_not_found')}
        </div>
    );
};
