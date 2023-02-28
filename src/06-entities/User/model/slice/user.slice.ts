import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User, UserInitialState } from '../../types/user.types';

const initialState: UserInitialState = {
    isLoading: false,
    error: '',
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        removeUserData: (state) => {
            state.user = null;
        },
    },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
