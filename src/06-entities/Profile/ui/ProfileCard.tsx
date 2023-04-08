import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '06-entities/Country/types/country.types';
import { CountrySelect } from '06-entities/Country';
import { Currency, CurrencySelect } from '06-entities/Currency';
import { Input } from '07-shared/ui/Input/Input';
import { Loader } from '07-shared/ui/Loader/Loader';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Profile } from '../types/profile.types';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    profile: Profile | null;
    isLoading?: boolean;
    error?: string | null | undefined;
    readonlyMode?: boolean;
    className?: string;
    onUsernameChange?: (value: string) => void;
    onFirstnameChange?: (value: string) => void;
    onLastnameChange?: (value: string) => void;
    onCityChange?: (value: string) => void;
    onAgeChange?: (value: string) => void;
    onAvatarChange?: (value: string) => void;
}

export const ProfileCard = memo(({
    profile,
    isLoading = false,
    error = '',
    readonlyMode = true,
    className,
    onUsernameChange,
    onFirstnameChange,
    onLastnameChange,
    onCityChange,
    onAgeChange,
    onAvatarChange,
}: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <section style={{ minHeight: '300px', width: '100%' }}>
                <Loader />
            </section>
        );
    }
    if (!profile) return <div>Не авторизован</div>;
    if (error) return <div>{error}</div>;

    return (
        <section className={classNames(classes.ProfileCard, {}, [className])}>
            <Input
                readOnly={readonlyMode}
                value={profile.username}
                label={t('username')}
                labelPosition="left"
                onChangeValue={onUsernameChange}
            />
            <Input
                readOnly={readonlyMode}
                label={t('firstname')}
                labelPosition="left"
                value={profile.first}
                onChangeValue={onFirstnameChange}
            />
            <Input
                readOnly={readonlyMode}
                label={t('lastname')}
                labelPosition="left"
                value={profile.lastname}
                onChangeValue={onLastnameChange}
            />
            <Input
                readOnly={readonlyMode}
                label={t('age')}
                labelPosition="left"
                value={profile.age.toString()}
                onChangeValue={onAgeChange}
            />
            <Input
                readOnly={readonlyMode}
                label={t('city')}
                labelPosition="left"
                value={profile.city}
                onChangeValue={onCityChange}
            />
            {readonlyMode
                ? (
                    <div className={classes.infoField}>
                        <span className={classes.title}>{t('country')}</span>
                        <span className={classes.value}>{profile.country}</span>
                    </div>
                )
                : (
                    <CountrySelect
                        className={classes.selects}
                        value={profile.country}
                        label={t('country')}
                        labelPosition="left"
                        onSelect={(str: Country) => console.log(str)}
                    />
                )}
            {readonlyMode
                ? (
                    <div className={classes.infoField}>
                        <span className={classes.title}>{t('currency')}</span>
                        <span className={classes.value}>{profile.currency}</span>
                    </div>
                )
                : (
                    <CurrencySelect
                        className={classes.selects}
                        value={profile.currency}
                        label={t('currency')}
                        labelPosition="left"
                        onSelect={(str: Currency) => console.log(str)}
                    />
                )}
            {!readonlyMode
                && (
                    <Input
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
