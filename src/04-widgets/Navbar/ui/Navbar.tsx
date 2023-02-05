import classes from './Navbar.module.scss';
import {classNames} from "07-shared/lib/classNames/classNames";
import {AppLink} from "07-shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <section className={classNames(classes.Navbar, {}, [className])}>
            <div className={classes.links}>
                <AppLink theme={'secondary'} to={'/'}>Main</AppLink>
                <AppLink theme={'secondary'} to={'/about'}>About</AppLink>
            </div>
        </section>
    );
};
