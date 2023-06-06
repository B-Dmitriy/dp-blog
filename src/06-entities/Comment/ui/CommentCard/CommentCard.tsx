import { classNames } from '07-shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from '07-shared/ui/Avatar/Avatar';
import { Text } from '07-shared/ui/Text/Text';
import { Skeleton } from '07-shared/ui/Skeleton/Skeleton';
import { Comment } from '../../types/comment.types';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment?.user?.avatar ? <Avatar size="small" src={comment?.user?.avatar} alt="avatar" /> : null}
                <Text className={cls.username} view="header">{comment?.user?.username}</Text>
            </div>
            <Text className={cls.text} view="paragraph">{comment.text}</Text>
        </div>
    );
});
