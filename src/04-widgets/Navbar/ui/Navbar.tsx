import { classNames } from '07-shared/lib/classNames/classNames';
import { ThemeSwitcher } from '05-features/ThemeSwitcher';
import { LangSwitcher } from '05-features/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { IconLink } from '07-shared/ui/IconLink/IconLink';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <header className={classNames(classes.Navbar, {}, [className])}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <div className={classes.logo}>
                        Logo
                    </div>
                    <div className={classes.search}>
                        search
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.divider} />
                    <div className={classes.switchers}>
                        <LangSwitcher />
                        <div className={classes.divider} />
                        <ThemeSwitcher />
                    </div>
                    <div className={classes.links}>
                        <IconLink type="gh" href="ref" />
                        <IconLink type="tg" href="ref" />
                        <IconLink type="vk" href="ref" />
                        <IconLink type="li" href="ref" />
                    </div>
                </div>
            </div>
        </header>
    );
};
