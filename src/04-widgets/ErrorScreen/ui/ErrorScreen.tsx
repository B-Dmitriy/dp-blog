import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './ErrorScreen.module.scss';

interface ErrorScreenProps {
    className?: string;
}

export const ErrorScreen = memo(({ className }: ErrorScreenProps) => {
    const { t } = useTranslation('translation');

    const reload = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(classes.ErrorScreen, {}, [className])}>
            {t('something_went_wrong')}
            <button type="button" onClick={reload}>{t('reload_page')}</button>
        </div>
    );
});
