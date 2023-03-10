import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '07-shared/lib/classNames/classNames';
import LangIcon from '07-shared/assets/icons/language.svg';
import classes from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onSelectChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className={classNames(classes.LangSwitcher, {}, [className])}>
            <LangIcon />
            <select name="language" id="lang" onChange={onSelectChangeLang} value={i18n.language}>
                <option value="ru">{t('russian')}</option>
                <option value="en">{t('english')}</option>
            </select>
        </div>
    );
};
