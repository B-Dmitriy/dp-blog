import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
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
);
