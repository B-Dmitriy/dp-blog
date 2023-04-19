import { memo } from 'react';
import { classNames } from '../../../../../../production-project-200b42dfc5bb601c5ca8beb553e026c377fbb2fb/src/shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo(({
    className,
}: ArticlesPageProps) => (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>ArticlesPage</div>
));

export default ArticlesPage;
