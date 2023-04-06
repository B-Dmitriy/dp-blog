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
    onSelect: (item: string) => void;
    className?: string;
}

export const Select = memo(({
    value,
    options,
    onSelect,
    className,
}: SelectProps) => {
    const mountedRef = useRef(false) as MutableRefObject<boolean>;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onValueClick = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    return (
        <div className={classNames(classes.Select, {}, [className])}>
            <button
                type="button"
                className={classNames(classes.value, {
                    [classes.open]: isOpen,
                })}
                onClick={onValueClick}
            >
                <span className={classes.title}>{value}</span>
                <ArrowDown />
            </button>
            <div className={classNames(classes.list, {
                [classes.open]: isOpen,
                [classes.mounted]: mountedRef.current,
            })}
            >
                {options.map((item) => (
                    <button
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
    );
});
