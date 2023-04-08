import {
    memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { classNames } from '07-shared/lib/classNames/classNames';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import classes from './Select.module.scss';

interface SelectProps {
    value: string;
    options: string[];
    label?: string;
    labelPosition?: 'top' | 'left';
    onSelect: (item: string) => void;
    className?: string;
}

export const Select = memo(({
    value,
    options,
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
                        type="button"
                        name="select_button"
                        className={classNames(classes.value, {
                            [classes.open]: isOpen,
                        })}
                        onClick={onValueClick}
                    >
                        <span className={classes.title}>{value}</span>
                        <ArrowDown />
                    </button>
                    <div
                        ref={listRef}
                        className={classNames(classes.list, {
                            [classes.open]: isOpen,
                            [classes.closes]: isClosing,
                        })}
                    >
                        {options.map((item) => (
                            <button
                                disabled={!isOpen}
                                key={nanoid()}
                                type="button"
                                tabIndex={0}
                                className={classes.listItem}
                                onClick={() => {
                                    onSelect(item);
                                    setIsOpen(false);
                                }}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </label>
        </div>
    );
});
