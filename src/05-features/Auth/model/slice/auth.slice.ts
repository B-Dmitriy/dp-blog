import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { meThunk } from '05-features/Auth/model/services/me.thunk';
import { logoutThunk } from '05-features/Auth/model/services/logout.thunk';
import { AuthInitialState } from '../../types/auth.types';
import { loginThunk } from '../services/login.thunk';

const initialState: AuthInitialState = {
    isAuth: false,
    isLoading: false,
    error: '',
    username: '',
    password: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(loginThunk.fulfilled, (state) => {
                state.isAuth = true;
                state.isLoading = false;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.payload;
            })
            .addCase(meThunk.fulfilled, (state) => {
                state.isAuth = true;
            })
            .addCase(meThunk.rejected, (state) => {
                state.isAuth = false;
            })
            .addCase(logoutThunk.fulfilled, (state) => {
                state.isAuth = false;
            })
            .addCase(logoutThunk.rejected, (state) => {
                state.isAuth = true;
            });
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
