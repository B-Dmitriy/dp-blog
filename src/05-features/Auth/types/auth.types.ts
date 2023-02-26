export interface AuthInitialState {
    isAuth: boolean;
    isLoading: boolean;
    error: string;
    username: string;
    password: string;
}

export interface LoginThunk {
    username: string;
    password: string;
}
