import { Theme, useTheme } from '01-app/providers/ThemeProvider';
import SunIcon from '07-shared/assets/icons/sun.svg';
import MoonIcon from '07-shared/assets/icons/moon.svg';
import { Button } from '07-shared/ui/Button/Button';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    const onClick = () => toggleTheme();

    return (
        <Button
            theme="clear"
            onClick={onClick}
            className={classNames(classes.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DARK ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
}
