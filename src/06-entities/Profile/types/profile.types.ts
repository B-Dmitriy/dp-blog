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

export type ProfileFormValidateErrors = Partial<Record<keyof Profile, string>> & {
    server_error?: string;
};

export interface ProfileSliceState {
    isLoading: boolean;
    isValidateLoading: boolean;
    profile: Profile | null;
    profileForm: Profile;
    profileFormErrors: ProfileFormValidateErrors;
    error: string;
}
