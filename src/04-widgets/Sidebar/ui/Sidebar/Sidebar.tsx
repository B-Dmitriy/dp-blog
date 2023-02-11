import { classNames } from '07-shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from '05-features/ThemeSwitcher';
import { LangSwitcher } from '05-features/LangSwitcher';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export function Sidebar({ className }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => setCollapsed((prev) => !prev);

    return (
        <div className={classNames(classes.Sidebar, {
            [classes.collapsed]: collapsed,
        }, [className])}
        >
            <button type="button" onClick={toggleCollapsed}>toggle</button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
}
