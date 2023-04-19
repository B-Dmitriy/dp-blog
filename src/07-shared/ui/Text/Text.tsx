import { memo, PropsWithChildren } from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './Text.module.scss';

type TextType = 'header' | 'paragraph' | 'error';

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
    className?: string;
    view?: TextType;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo(({
    className,
    align = TextAlign.LEFT,
    size = TextSize.M,
    view = 'paragraph',
    children,
}: PropsWithChildren<TextProps>) => {
    const mods = {
        [classes.error]: view === 'error',
        [classes.paragraph]: view === 'paragraph',
        [classes.header]: view === 'header',
        [classes[align]]: true,
        [classes[size]]: true,
    };
    switch (view) {
    case 'header':
        return (
            <h2
                data-testid="text_header_testid"
                className={classNames(classes.Text, mods, [className])}
            >
                {children}
            </h2>
        );
    case 'error':
    case 'paragraph':
    default:
        return (
            <p
                data-testid="text_paragraph_testid"
                className={classNames(classes.Text, mods, [className])}
            >
                {children}
            </p>
        );
    }
});
