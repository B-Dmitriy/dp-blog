import { memo, PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '07-shared/lib/classNames/classNames';
import LinkIcon from '../../assets/icons/link.svg';
import classes from './AppLink.module.scss';

export type AppLinkView = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    to: string;
    view?: AppLinkView;
    withIcon?: boolean;
    className?: string;
}

export const AppLink = memo(({
    to,
    view = 'primary',
    withIcon = false,
    className,
    children,
    ...otherProps
}: PropsWithChildren<AppLinkProps>) => (
    <Link
        to={to}
        data-testid="appLink_test_id"
        className={classNames(classes.AppLink, {
            [classes.withIcon]: withIcon,
        }, [className, classes[view]])}
        {...otherProps}
    >
        <span className={classes.title}>
            {children}
        </span>
        {withIcon && <LinkIcon />}
    </Link>
));
