import { memo } from 'react';
import { SidebarMenuItem } from '04-widgets/Sidebar/ui/SidebarMenuItem/SidebarMenuItem';
import { classNames } from '07-shared/lib/classNames/classNames';
import { sidebarMenuList } from '../lib/sidebarMenuList';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => (
    <nav className={classNames(classes.Sidebar, {}, [className])}>
        <div className={classes.routes}>
            {sidebarMenuList.map((item) => <SidebarMenuItem key={item.path} item={item} />)}
        </div>
    </nav>
));
