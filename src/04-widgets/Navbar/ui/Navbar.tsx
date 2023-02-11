import { classNames } from '07-shared/lib/classNames/classNames';
import { AppLink } from '07-shared/ui/AppLink/AppLink';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <section className={classNames(classes.Navbar, {}, [className])}>
        <div className={classes.links}>
            <AppLink theme="secondary" to="/">Main</AppLink>
            <AppLink theme="secondary" to="/about">About</AppLink>
        </div>
    </section>
);
