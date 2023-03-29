export interface Profile {
    first: string;
    lastname: string;
    age: number;
    currency: string;
    country:string;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSliceState {
    isLoading: boolean;
    profile: Profile | null;
    error: string;
}
