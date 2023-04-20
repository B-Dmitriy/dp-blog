import { memo } from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
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
