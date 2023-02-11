import { classNames } from '07-shared/lib/classNames/classNames';
import { useState } from 'react';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => setCollapsed((prev) => !prev);

    return (
        <div className={classNames(classes.Sidebar, {
            [classes.collapsed]: collapsed,
        }, [className])}
        >
            <button type="button" onClick={toggleCollapsed}>toggle</button>
        </div>
    );
};
