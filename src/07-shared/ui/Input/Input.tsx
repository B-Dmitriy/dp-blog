import { classNames } from '07-shared/lib/classNames/classNames';
import {
    ChangeEvent, InputHTMLAttributes, ReactNode, useState,
} from 'react';
import classes from './Input.module.scss';
import Cross from '../../assets/icons/cross.svg';
import EyeOpen from '../../assets/icons/eye-open.svg';
import EyeClose from '../../assets/icons/eye-closed.svg';

export { InputHTMLAttributes } from 'react';

type InputTypes = 'primary' | 'clear';
type LabelPosition = 'top' | 'left';
type InputModification = 'counter' | 'icon' | 'cleaner' | 'secret';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    value: string;
    onChangeValue?: (newValue: string) => void;
    error?: string | null | undefined;
    label?: string;
    placeholder?: string;
    icon?: ReactNode;
    maxLength?: number;
    modification?: InputModification;
    className?: string;
    view?: InputTypes;
    labelPosition?: LabelPosition;
}

export const Input = ({
    disabled = false,
    type, // Достаём значение, что бы оно не перезаписало type внутри
    view = 'primary',
    labelPosition = 'top',
    value,
    error = '',
    label = '',
    placeholder = '',
    icon,
    maxLength = undefined,
    modification,
    onChange,
    onChangeValue,
    className,
    ...restProps
}: InputProps) => {
    const STRING_LENGTH = value.length;

    const [isFieldOpen, setIsFieldOpen] = useState(true);
    const toggleIsFieldOpen = () => setIsFieldOpen((prev) => !prev);

    const resetValue = () => {
        if (onChange) {
            onChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
        }
        if (onChangeValue) {
            onChangeValue('');
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
        if (onChangeValue) {
            onChangeValue(e.target.value);
        }
    };

    return (
        <div className={classNames(classes.Input, {}, [className])}>
            <label
                htmlFor="text_input"
                className={classNames(classes.label, {
                    [classes.topLabel]: labelPosition === 'top',
                })}
            >
                {label && <span className={classes.text}>{label}</span>}
                <div className={classes.root}>
                    <input
                        disabled={disabled}
                        id="text_input"
                        type={isFieldOpen ? 'text' : 'password'}
                        className={classNames(classes.input, {
                            [classes.clear]: view === 'clear',
                            [classes.rootError]: !!error,
                        })}
                        maxLength={maxLength}
                        value={value}
                        onChange={onChangeHandler}
                        placeholder={placeholder}
                        {...restProps}
                    />
                    {modification === 'icon' && <span className={classes.modification}>{icon}</span>}
                    {modification === 'secret' && (
                        <span
                            className={classNames(classes.modification, {}, [classes.activeIcon])}
                        >
                            {isFieldOpen
                                ? <EyeOpen onClick={toggleIsFieldOpen} />
                                : <EyeClose onClick={toggleIsFieldOpen} />}
                        </span>
                    )}
                    {modification === 'cleaner' && (
                        <span
                            className={classNames(classes.modification, {}, [classes.activeIcon])}
                        >
                            <Cross onClick={resetValue} />
                        </span>
                    )}
                    {modification === 'counter' && (
                        <span
                            className={classNames(classes.modification, {}, [classes.counter])}
                        >
                            {maxLength && `${STRING_LENGTH}/${maxLength}`}
                        </span>
                    )}
                </div>
            </label>
            {error && <span className={classes.error}>{error}</span>}
        </div>
    );
};
