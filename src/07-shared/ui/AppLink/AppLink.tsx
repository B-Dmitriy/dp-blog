import { classNames } from '07-shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import LinkIcon from '07-shared/assets/icons/link.svg';
import classes from './AppLink.module.scss';

export type AppLinkView = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    to: string;
    view?: AppLinkView;
    withIcon?: boolean;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        view = 'primary',
        withIcon = false,
        className,
        children,
        ...otherProps
    } = props;

    return (
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
    );
};
