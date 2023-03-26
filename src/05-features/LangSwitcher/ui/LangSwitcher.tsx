import { ChangeEvent, memo } from 'react';
import { useTranslation } from 'react-i18next';
import LangIcon from '07-shared/assets/icons/language.svg';
import classes from './LangSwitcher.module.scss';

export const LangSwitcher = memo(() => {
    const { t, i18n } = useTranslation();

    const onSelectChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <div className={classes.LangSwitcher}>
            <LangIcon />
            <select name="language" id="lang" onChange={onSelectChangeLang} value={i18n.language}>
                <option value="ru">{t('russian')}</option>
                <option value="en">{t('english')}</option>
            </select>
        </div>
    );
});
