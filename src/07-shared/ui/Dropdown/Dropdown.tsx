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
    const mountedRef = useRef(false) as MutableRefObject<boolean>;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const showDropdown = () => setIsOpen(true);

    const hideDropdown = () => {
        setIsOpen(false);
    };

    const onItemClick = (item: string) => {
        setIsOpen(false);
        onSelect(item);
    };

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    return (
        <div
            onMouseOver={showDropdown}
            onMouseOut={hideDropdown}
            className={classNames(classes.Dropdown, {}, [className])}
        >
            <div className={classes.root}>
                <span className={classNames(classes.children, {
                    [classes.open]: isOpen,
                })}
                >
                    {children}
                </span>
                <ul
                    className={classNames(classes.list, {
                        [classes.open]: isOpen,
                        [classes.mounted]: mountedRef.current,
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
