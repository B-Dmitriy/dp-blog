import classes from './Sidebar.module.scss';
import {classNames} from "07-shared/lib/classNames/classNames";
import {useState} from "react";
import {ThemeSwitcher} from "04-widgets/ThemeSwitcher";
import {LangSwitcher} from "04-widgets/LangSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => setCollapsed(prev => !prev);

    return (
        <div className={classNames(classes.Sidebar, {
            [classes.collapsed]: collapsed
        }, [className])}>
            <button onClick={toggleCollapsed}>toggle</button>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
