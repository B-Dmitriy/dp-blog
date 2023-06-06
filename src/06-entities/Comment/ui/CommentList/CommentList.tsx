import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '07-shared/ui/Text/Text';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Comment } from '../../types/comment.types';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, isLoading, comments } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={cls.comment}
                        comment={comment}
                    />
                ))
                : <Text view="paragraph">{t('Комментарии отсутствуют')}</Text>}
        </div>
    );
});
