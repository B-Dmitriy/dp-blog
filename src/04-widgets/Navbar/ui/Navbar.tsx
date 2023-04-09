import { memo } from 'react';
import { Auth } from '05-features/Auth';
import { LangSwitcher } from '05-features/LangSwitcher';
import { ThemeSwitcher } from '05-features/ThemeSwitcher';
import { IconLink } from '07-shared/ui/IconLink/IconLink';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => (
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
                <Auth />
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
));
