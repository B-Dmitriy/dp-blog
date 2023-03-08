import { memo } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
    <div
        data-testid="pageLoader_test_id"
        className={classNames(classes.PageLoader, {}, [className])}
    >
        <div className={classes.ldsEllipsis}>
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
));
