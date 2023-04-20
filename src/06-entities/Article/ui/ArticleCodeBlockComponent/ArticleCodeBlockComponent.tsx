import { memo } from 'react';
import { Code } from '07-shared/ui/Code/Code';
import { classNames } from '07-shared/lib/classNames/classNames';
import type { ArticleCodeBlock } from '../../types/article.types';
import classes from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({
    className,
    block,
}: ArticleCodeBlockComponentProps) => (
    <div className={classNames(classes.ArticleCodeBlockComponent, {}, [className])}>
        <Code text={block.code} />
    </div>
));
