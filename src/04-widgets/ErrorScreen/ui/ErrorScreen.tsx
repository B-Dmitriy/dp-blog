import { classNames } from '07-shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '07-shared/ui/Button/Button';
import classes from './ErrorScreen.module.scss';

interface ErrorScreenProps {
    className?: string;
}

export const ErrorScreen = ({ className }: ErrorScreenProps) => {
    const { t } = useTranslation('translation');

    const reload = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(classes.ErrorScreen, {}, [className])}>
            {t('something_went_wrong')}
            <Button theme="primary" onClick={reload}>{t('reload_page')}</Button>
        </div>
    );
};
