import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './Switch.module.scss';

interface SwitchProps {
    className?: string;
    isActive: boolean;
    changeIsActiveStatus: () => void;
}

export const Switch = ({
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
};
