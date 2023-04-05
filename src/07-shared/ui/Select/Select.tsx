import { classNames } from '07-shared/lib/classNames/classNames';
import { useState } from 'react';
import classes from './Select.module.scss';

interface SelectProps {
    value: string;
    options: string[];
    onSelect: (item: string) => void;
    className?: string;
}

export const Select = ({
    value, options, onSelect, className,
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onValueClick = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={classNames(classes.Select, {}, [className])}>
            <div onClick={onValueClick}>{value}</div>
            {isOpen && (
                <ul>
                    {options.map((item) => (
                        <li
                            onClick={() => {
                                onSelect(item);
                                setIsOpen(false);
                            }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
