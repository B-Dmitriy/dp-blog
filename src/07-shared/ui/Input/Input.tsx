import {
    ChangeEvent, InputHTMLAttributes, memo, ReactNode, useState,
} from 'react';
import Cross from '07-shared/assets/icons/cross.svg';
import EyeOpen from '07-shared/assets/icons/eye-open.svg';
import EyeClose from '07-shared/assets/icons/eye-closed.svg';
import { classNames } from '../../lib/classNames/classNames';
import classes from './Input.module.scss';

type InputTypes = 'primary' | 'clear';
type LabelPosition = 'top' | 'left';
type InputModification = 'counter' | 'icon' | 'cleaner' | 'secret';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
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

export const Input = memo(({
    readOnly = false,
    disabled = false,
    // type, // Достаём значение, что бы оно не перезаписало type внутри
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

    const [isFieldOpen, setIsFieldOpen] = useState(modification !== 'secret');
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
                        readOnly={readOnly}
                        disabled={disabled || readOnly}
                        name="text_input"
                        type={isFieldOpen ? 'text' : 'password'}
                        className={classNames(classes.input, {
                            [classes.clear]: view === 'clear',
                            [classes.disabled]: disabled,
                            [classes.rootError]: !!error,
                            [classes.readOnly]: readOnly,
                        })}
                        maxLength={maxLength}
                        autoComplete="new-password"
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
            {error && !readOnly && (
                <span className={classNames(classes.error, {
                    [classes.topLabel]: labelPosition === 'top',
                })}
                >
                    {error}
                </span>
            )}
        </div>
    );
});
