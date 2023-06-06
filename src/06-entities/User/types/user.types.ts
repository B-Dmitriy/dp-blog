export type Role = 'ADMIN' | 'USER';

export interface User {
    id: number;
    username: string;
    password: string;
    role?: Role;
    avatar?: string;
}

export interface UserInitialState {
    isLoading: boolean;
    error: string;
    user: User | null;
}
