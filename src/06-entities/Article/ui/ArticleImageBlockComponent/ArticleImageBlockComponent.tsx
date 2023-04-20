import { memo } from 'react';
import { Text } from '07-shared/ui/Text/Text';
import { classNames } from '07-shared/lib/classNames/classNames';
import type { ArticleImageBlock } from '../../types/article.types';
import classes from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={classes.img} />
            {block.title && (
                <Text align="center">{block.title}</Text>
            )}
        </div>
    );
});
