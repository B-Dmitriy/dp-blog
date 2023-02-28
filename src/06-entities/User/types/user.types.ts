export interface User {
    id: number;
    username: string;
    password: string;
}

export interface UserInitialState {
    isLoading: boolean;
    error: string;
    user: User | null;
}
