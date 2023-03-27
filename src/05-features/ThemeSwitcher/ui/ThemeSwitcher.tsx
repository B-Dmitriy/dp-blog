import { memo } from 'react';
import { Theme, useTheme } from '07-shared/lib/components/ThemeProvider';
import { classNames } from '07-shared/lib/classNames/classNames';
import SunIcon from '07-shared/assets/icons/sun.svg';
import MoonIcon from '07-shared/assets/icons/moon.svg';
import classes from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme();

    const onClick = () => {
        toggleTheme();
    };
    return (
        <button
            type="button"
            className={classes.ThemeSwitcher}
            onClick={onClick}
        >
            <div className={classNames(classes.switcher, {
                [classes.light]: theme === Theme.LIGHT,
                [classes.dark]: theme === Theme.DARK,
            }, [])}
            />
            <MoonIcon />
            <SunIcon />
        </button>
    );
});
