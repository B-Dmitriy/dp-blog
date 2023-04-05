import { classNames } from '07-shared/lib/classNames/classNames';
import { memo, useState } from 'react';
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
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onValueClick = () => {
        setIsOpen((prev) => !prev);
    };

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
            })}
            >
                {options.map((item) => (
                    <button
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
