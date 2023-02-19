import { classNames } from '07-shared/lib/classNames/classNames';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { FC } from 'react';
import classes from './AppNavLink.module.scss';

interface AppLinkProps extends NavLinkProps {
    to: string;
    className?: string;
}

export const AppNavLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <NavLink
            to={to}
            data-testid="navLink_test_id"
            className={({ isActive }) => classNames(classes.AppNavLink, {
                [classes.active]: isActive,
            }, [className])}
            {...otherProps}
        >
            {children}
        </NavLink>
    );
};
