import { classNames } from '07-shared/lib/classNames/classNames';
import {
    memo, MutableRefObject, PropsWithChildren, useEffect, useRef, useState,
} from 'react';
import classes from './Dropdown.module.scss';

type DropdownItem = { label: string; value: string; };
type DropdownList = DropdownItem[];

interface DropdownProps {
    list: DropdownList;
    onSelect: (item: string) => void;
    className?: string;
}

export const Dropdown = memo(({
    children,
    list,
    onSelect,
    className,
}: PropsWithChildren<DropdownProps>) => {
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const showDropdown = () => setIsOpen(true);

    const closeHandler = () => {
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            setIsClosing(false);
            setIsOpen(false);
        }, 150);
    };

    const hideDropdown = () => {
        closeHandler();
    };

    const onItemClick = (item: string) => {
        onSelect(item);
        closeHandler();
    };

    return (
        <div
            onMouseOver={showDropdown}
            className={classNames(classes.Dropdown, {}, [className])}
        >
            <div className={classes.root} onMouseLeave={hideDropdown}>
                <span className={classNames(classes.children, {
                    [classes.open]: isOpen,
                })}
                >
                    {children}
                </span>
                <ul
                    className={classNames(classes.list, {
                        [classes.open]: isOpen,
                        [classes.mounted]: isClosing,
                    })}
                >
                    {list.map((item) => (
                        <li
                            key={item.value}
                            className={classes.listItem}
                            onClick={() => onItemClick(item.value)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});
