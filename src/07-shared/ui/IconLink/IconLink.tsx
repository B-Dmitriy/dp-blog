import { classNames } from '07-shared/lib/classNames/classNames';
import { Icon } from '07-shared/ui/Icon/Icon';
import { memo } from 'react';
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
