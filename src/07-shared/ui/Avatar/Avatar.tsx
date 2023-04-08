import { classNames } from '07-shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './Avatar.module.scss';

interface AvatarProps {
    src: string;
    alt: string;
    size: 'small' | 'large';
    className?: string;
}

export const Avatar = memo(({
    src,
    alt,
    size,
    className,
}: AvatarProps) => (
    <img
        className={classNames(classes.Avatar, {}, [className, classes[size]])}
        src={src}
        alt={alt}
    />
));
