import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import classes from './Switch.module.scss';

interface SwitchProps {
    disabled?: boolean;
    className?: string;
    isActive: boolean;
    changeIsActiveStatus: () => void;
}

export const Switch = memo(({
    disabled = false,
    className,
    isActive,
    changeIsActiveStatus,
}: SwitchProps) => {
    const onClick = () => {
        changeIsActiveStatus();
    };
    return (
        <button
            type="button"
            disabled={disabled}
            data-testid="switch__test_id"
            className={classNames(classes.Switch, {
                [classes.active]: isActive,
                [classes.inactive]: !isActive,
            }, [className])}
            onClick={onClick}
        >
            <div className={classes.switcher} />
        </button>
    );
});
