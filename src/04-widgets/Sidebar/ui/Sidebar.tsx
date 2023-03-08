import { useTranslation } from 'react-i18next';
import { classNames } from '07-shared/lib/classNames/classNames';
import { AppNavLink } from '07-shared/ui/AppNavLink/AppNavLink';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const { t } = useTranslation();
    return (
        <nav className={classNames(classes.Sidebar, {}, [className])}>
            <div className={classes.routes}>
                <AppNavLink to="/">{t('main')}</AppNavLink>
                <AppNavLink to="/about">{t('about')}</AppNavLink>
            </div>
        </nav>
    );
};
