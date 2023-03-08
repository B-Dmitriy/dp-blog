import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import classes from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div
        data-testid="loader_test_id"
        className={classNames(classes.Loader, {}, [className])}
    >
        <div className={classes.ldsDualRing} />
    </div>
));
