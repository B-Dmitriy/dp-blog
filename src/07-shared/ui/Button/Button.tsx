import { classNames } from '07-shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import classes from './Button.module.scss';

export type ButtonType = 'clear' | 'outline' | 'primary' | 'secondary';
export type ButtonSize = 'small' | 'normal' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    view?: ButtonType;
    size?: ButtonSize;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

export const Button = ({
    disabled = false,
    view = 'primary',
    size = 'normal',
    leftIcon,
    rightIcon,
    className,
    children,
    ...otherProps
}: ButtonProps) => (
    <button
        type="button"
        data-testid="button_test_id"
        className={classNames(classes.Button, {
            [classes.primary]: view === 'primary',
            [classes.secondary]: view === 'secondary',
            [classes.outline]: view === 'outline',
            [classes.clear]: view === 'clear',
            [classes.small]: size === 'small',
            [classes.normal]: size === 'normal',
            [classes.large]: size === 'large',
            [classes.disabled]: disabled,
        }, [className])}
        {...otherProps}
    >
        {leftIcon}
        <span className={classes.Button__children}>
            {children}
        </span>
        {rightIcon}
    </button>
);
