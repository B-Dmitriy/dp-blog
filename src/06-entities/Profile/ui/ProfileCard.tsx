import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from '06-entities/Country';
import { Currency, CurrencySelect } from '06-entities/Currency';
import { Country } from '06-entities/Country/types/country.types';
import { ProfileError } from '06-entities/Profile/ui/ProfileError/ProfileError';
import { ProfileIsLoading } from '06-entities/Profile/ui/ProfileIsLoading/ProfileIsLoading';
import { ProfileNotAuthorized } from '06-entities/Profile/ui/ProfileNotAuthorized/ProfileNotAuthorized';
import { Input } from '07-shared/ui/Input/Input';
import { classNames } from '07-shared/lib/classNames/classNames';
import type { Profile, ProfileFormValidateErrors } from '../types/profile.types';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    profile: Profile | null;
    isLoading?: boolean;
    isValidateLoading?: boolean;
    isAuth?: boolean;
    error?: string | null | undefined;
    formErrors?: ProfileFormValidateErrors;
    readonlyMode?: boolean;
    className?: string;
    onUsernameChange?: (value: string) => void;
    onFirstnameChange?: (value: string) => void;
    onLastnameChange?: (value: string) => void;
    onCityChange?: (value: string) => void;
    onAgeChange?: (value: string) => void;
    onAvatarChange?: (value: string) => void;
    onCountryChange?: (value: Country) => void;
    onCurrencyChange?: (value: Currency) => void;
}

export const ProfileCard = memo(({
    profile,
    isLoading = false,
    isValidateLoading = false,
    isAuth = true,
    error = '',
    formErrors = {},
    readonlyMode = true,
    className,
    onUsernameChange,
    onFirstnameChange,
    onLastnameChange,
    onCityChange,
    onAgeChange,
    onAvatarChange,
    onCountryChange,
    onCurrencyChange,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) return <ProfileIsLoading />;
    if (!isAuth || !profile) return <ProfileNotAuthorized />;
    if (error) return <ProfileError error={error} />;

    return (
        <section className={classNames(classes.ProfileCard, {}, [className])}>
            <Input
                disabled={isValidateLoading}
                readOnly={readonlyMode}
                value={profile.username}
                label={t('username')}
                labelPosition="left"
                onChangeValue={onUsernameChange}
                error={formErrors?.username && formErrors.username}
            />
            <Input
                disabled={isValidateLoading}
                readOnly={readonlyMode}
                label={t('firstname')}
                labelPosition="left"
                value={profile.first}
                onChangeValue={onFirstnameChange}
                error={formErrors?.first && formErrors.first}
            />
            <Input
                disabled={isValidateLoading}
                readOnly={readonlyMode}
                label={t('lastname')}
                labelPosition="left"
                value={profile.lastname}
                onChangeValue={onLastnameChange}
                error={formErrors?.lastname && formErrors.lastname}
            />
            <Input
                disabled={isValidateLoading}
                readOnly={readonlyMode}
                label={t('age')}
                labelPosition="left"
                value={profile.age.toString()}
                onChangeValue={onAgeChange}
                error={formErrors?.age && formErrors.age}
            />
            <Input
                disabled={isValidateLoading}
                readOnly={readonlyMode}
                label={t('city')}
                labelPosition="left"
                value={profile.city}
                onChangeValue={onCityChange}
            />
            <CountrySelect
                disabled={isValidateLoading}
                readOnly={readonlyMode}
                className={classes.selects}
                value={profile.country}
                label={t('country')}
                labelPosition="left"
                onSelect={onCountryChange}
            />
            <CurrencySelect
                disabled={isValidateLoading}
                readOnly={readonlyMode}
                className={classes.selects}
                value={profile.currency}
                label={t('currency')}
                labelPosition="left"
                onSelect={onCurrencyChange}
            />
            {!readonlyMode
                && (
                    <Input
                        disabled={isValidateLoading}
                        readOnly={readonlyMode}
                        label={t('avatar')}
                        labelPosition="left"
                        value={profile.avatar}
                        onChangeValue={onAvatarChange}
                    />
                )}
        </section>
    );
});
