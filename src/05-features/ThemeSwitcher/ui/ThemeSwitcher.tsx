import { Theme, useTheme } from '01-app/providers/ThemeProvider';
import SunIcon from '07-shared/assets/icons/sun.svg';
import MoonIcon from '07-shared/assets/icons/moon.svg';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({
    className,
}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    const onClick = () => {
        toggleTheme();
    };
    return (
        <button
            type="button"
            className={classNames(classes.Switch, {}, [className])}
            onClick={onClick}
        >
            <div className={classNames(classes.switcher, {
                [classes.light]: theme === Theme.LIGHT,
                [classes.dark]: theme === Theme.DARK,
            }, [])}
            />
            <SunIcon />
            <MoonIcon />
        </button>
    );
};
