import { memo } from 'react';
import { Text } from '07-shared/ui/Text/Text';
import { classNames } from '07-shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../types/article.types';
import classes from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
        <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <Text className={classes.title}>{block.title}</Text>
            )}
            {block.paragraphs.map((paragraph) => (
                <Text key={paragraph} className={classes.paragraph}>{paragraph}</Text>
            ))}
        </div>
    );
});
