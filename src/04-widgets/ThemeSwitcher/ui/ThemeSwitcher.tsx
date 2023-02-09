import {Theme, useTheme} from "01-app/providers/ThemeProvider";
import SunIcon from '07-shared/assets/icons/sun.svg';
import MoonIcon from '07-shared/assets/icons/moon.svg';
import {Button} from "07-shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    const onClick = () => toggleTheme();

    return (
        <Button
            theme={'clear'}
            onClick={onClick}
        >
            {theme === Theme.DARK ? <MoonIcon/> : <SunIcon/>}
        </Button>
    );
};
