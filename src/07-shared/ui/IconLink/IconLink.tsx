import { memo } from 'react';
import { Icon } from '../Icon/Icon';
import { classNames } from '../../lib/classNames/classNames';
import classes from './IconLink.module.scss';
import type { IconType } from '../Icon/Icon';

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
