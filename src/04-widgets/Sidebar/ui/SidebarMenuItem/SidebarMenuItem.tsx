import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '07-shared/lib/classNames/classNames';
import { AppNavLink } from '07-shared/ui/AppNavLink/AppNavLink';
import { useAppSelector } from '07-shared/lib/hooks/app';
import { getUser } from '06-entities/User';
import type { SidebarMenuItemType } from '../../model/sidebar.types';
import classes from './SidebarMenuItem.module.scss';

interface SidebarMenuItemProps {
    item: SidebarMenuItemType;
    className?: string;
}

export const SidebarMenuItem = memo(({ item, className }: SidebarMenuItemProps) => {
    const { t } = useTranslation();
    const user = useAppSelector(getUser);

    if (item.authOnly && !user) {
        return null;
    }

    return (
        <div className={classNames(classes.SidebarMenuItem, {}, [className])}>
            <item.Icon />
            <AppNavLink
                className={classes.link}
                to={item.path}
            >
                {t(item.titleKey)}
            </AppNavLink>
        </div>
    );
});
