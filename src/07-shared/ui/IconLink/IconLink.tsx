import { memo } from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Icon } from '../Icon/Icon';
import type { IconType } from '../Icon/Icon';
import classes from './IconLink.module.scss';

interface IconLinkProps {
    className?: string;
    type: IconType;
    href: string;
}

export const IconLink = memo(({ className, type, href }: IconLinkProps) => (
    <div className={classNames(classes.IconLink, {}, [className])}>
        <a href={href} aria-label="link"><Icon type={type} /></a>
    </div>
));
