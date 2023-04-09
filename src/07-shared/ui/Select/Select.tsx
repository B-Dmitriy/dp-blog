import {
    memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import { SelectItem } from '07-shared/ui/Select/SelectItem/SelectItem';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import classes from './Select.module.scss';

interface SelectProps {
    disabled?: boolean;
    readOnly?: boolean;
    value: string;
    options: string[];
    error?: string | null | undefined;
    label?: string;
    labelPosition?: 'top' | 'left';
    onSelect?: (item: string) => void;
    className?: string;
}

export const Select = memo(({
    disabled = false,
    readOnly = false,
    value,
    options,
    error,
    label,
    labelPosition = 'top',
    onSelect,
    className,
}: SelectProps) => {
    const listRef = useRef<HTMLDivElement | null>(null);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const onValueClick = () => {
        setIsOpen((prev) => !prev);
    };

    const setIsClose = () => setIsOpen(false);

    const closeHandler = () => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 150);
    };

    useEffect(() => {
        const clickListener = (e: MouseEvent) => {
            if (isOpen && !listRef?.current?.contains(e.target as Node)) {
                closeHandler();
            }
        };
        document.body.addEventListener('click', clickListener);

        return () => {
            clearTimeout(timerRef.current);
            document.body.removeEventListener('click', clickListener);
        };
    }, [isOpen]);

    return (
        <div className={classNames(classes.Select, {}, [className])}>
            <label
                className={classNames(classes.label, {
                    [classes.topLabel]: labelPosition === 'top',
                })}
                htmlFor="select_button"
            >
                {label && <span className={classes.text}>{label}</span>}
                <div className={classes.root}>
                    <button
                        disabled={readOnly || disabled}
                        type="button"
                        name="select_button"
                        className={classNames(classes.value, {
                            [classes.open]: isOpen,
                            [classes.readOnly]: readOnly,
                            [classes.errorValue]: !!error,
                        })}
                        onClick={onValueClick}
                    >
                        <span className={classes.title}>{value}</span>
                        {!readOnly && <ArrowDown />}
                    </button>
                    <div
                        ref={listRef}
                        className={classNames(classes.list, {
                            [classes.open]: isOpen,
                            [classes.closes]: isClosing,
                        })}
                    >
                        {options.map((item) => (
                            <SelectItem
                                key={item}
                                item={item}
                                isOpen={isOpen}
                                setIsClose={setIsClose}
                                onSelect={onSelect}
                            />
                        ))}
                    </div>
                    {error && !readOnly && (
                        <span className={classNames(classes.error, {
                            [classes.topLabel]: labelPosition === 'top',
                        })}
                        >
                            {error}
                        </span>
                    )}
                </div>
            </label>
        </div>
    );
});
