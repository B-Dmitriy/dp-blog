import { classNames } from '07-shared/lib/classNames/classNames';
import { ThemeSwitcher } from '05-features/ThemeSwitcher';
import { LangSwitcher } from '05-features/LangSwitcher';
import { AppNavLink } from '07-shared/ui/AppNavLink/AppNavLink';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <section className={classNames(classes.Navbar, {}, [className])}>
            <div className={classes.switchers}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
            <div className={classes.links}>
                <AppNavLink to="/">{t('main')}</AppNavLink>
                <AppNavLink to="/about">{t('about')}</AppNavLink>
            </div>
        </section>
    );
};
