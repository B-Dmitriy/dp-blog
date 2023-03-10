import { memo, PropsWithChildren } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import classes from './Text.module.scss';

type TextType = 'header' | 'paragraph' | 'error';

interface TextProps {
    className?: string;
    view?: TextType;
}

export const Text = memo(({
    className,
    view = 'paragraph',
    children,
}: PropsWithChildren<TextProps>) => {
    const mods = {
        [classes.error]: view === 'error',
        [classes.paragraph]: view === 'paragraph',
        [classes.header]: view === 'header',
    };
    switch (view) {
    case 'header':
        return (
            <h2 className={classNames(classes.Text, mods, [className])}>
                {children}
            </h2>
        );
    case 'error':
    case 'paragraph':
    default:
        return (
            <p className={classNames(classes.Text, mods, [className])}>
                {children}
            </p>
        );
    }
});
