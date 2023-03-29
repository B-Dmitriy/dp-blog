import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { me } from '../services/me/me';
import { logout } from '../services/logout/logout';
import { login } from '../services/login/login';
import type { AuthInitialState } from '../../types/auth.types';

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
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        resetAuthState: (state) => {
            state.username = '';
            state.password = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state) => {
                state.isAuth = true;
                state.isLoading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuth = false;
                state.error = action.payload || '';
            })
            .addCase(me.fulfilled, (state) => {
                state.isAuth = true;
            })
            .addCase(me.rejected, (state) => {
                state.isAuth = false;
            })
            .addCase(logout.fulfilled, (state) => {
                state.isAuth = false;
            })
            .addCase(logout.rejected, (state) => {
                state.isAuth = true;
            });
    },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
