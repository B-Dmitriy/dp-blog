import { Country } from '06-entities/Country';
import { Currency } from '06-entities/Currency';

export interface Profile {
    first: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSliceState {
    isLoading: boolean;
    profile: Profile | null;
    error: string;
}
