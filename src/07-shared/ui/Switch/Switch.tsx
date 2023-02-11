import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './Switch.module.scss';

interface SwitchProps {
    className?: string;
}

export const Switch = ({ className }: SwitchProps) => {
    console.log(1);
    return (
        <div className={classNames(classes.Switch, {}, [className])}>
            <p />
        </div>
    );
};
