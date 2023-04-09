import { nanoid } from '@reduxjs/toolkit';
import { classNames } from '07-shared/lib/classNames/classNames';
import { memo } from 'react';
import classes from './SelectItem.module.scss';

interface SelectItemProps {
    item: string;
    isOpen: boolean;
    setIsClose: () => void;
    onSelect?: (item: string) => void;
    className?: string;
}

export const SelectItem = memo(({
    item,
    isOpen,
    setIsClose,
    onSelect,
    className,
}: SelectItemProps) => (
    <button
        className={classNames(classes.SelectItem, {}, [className])}
        disabled={!isOpen}
        key={nanoid()}
        type="button"
        tabIndex={0}
        onClick={() => {
            if (onSelect) {
                onSelect(item);
            }
            setIsClose();
        }}
    >
        {item}
    </button>
));
