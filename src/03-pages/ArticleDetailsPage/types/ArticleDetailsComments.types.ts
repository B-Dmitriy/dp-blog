import { EntityState } from '@reduxjs/toolkit';
import { Comment } from '06-entities/Comment';

export interface ArticleDetailsCommentsState extends EntityState<Comment>{
    isLoading?: boolean;
    error?: string;
}
