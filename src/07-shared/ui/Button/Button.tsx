import classes from './Button.module.scss';
import {classNames} from "07-shared/lib/classNames/classNames";
import {ButtonHTMLAttributes} from "react";

export type ButtonType = 'clear' | 'outline' | 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme: ButtonType;
}

export const Button = ({ theme, className, children,...otherProps }: ButtonProps) => {

    return (
        <button
            className={classNames(classes.Button, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
