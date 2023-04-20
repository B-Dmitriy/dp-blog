import { Story } from '@storybook/react';
import type { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider, RootState } from '01-app/providers/StoreProvider';
import { authReducer } from '05-features/Auth/model/slice/auth.slice';
import { userReducer } from '06-entities/User';
import { editableProfileReducer } from '06-entities/Profile';
import { articleDetailsReducer } from '06-entities/Article/model/slice/articleDetailsSlice';
import type { ReducerList } from '07-shared/lib/components/AsyncReducerLoader/AsyncReducerLoader';

const defaultAsyncReducers: ReducerList = {
    auth: authReducer,
    user: userReducer,
    editableProfile: editableProfileReducer,
    articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<RootState>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
