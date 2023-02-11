import { classNames } from '07-shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import classes from './AppLink.module.scss';

export type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    to: string;
    theme?: AppLinkTheme;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        theme = 'primary',
        className,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
