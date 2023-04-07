import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getProfileInfo, getProfileIsLoading } from '06-entities/Profile/model/selectors/profileSelectors';
import { Country } from '06-entities/Country/types/country.types';
import { CountrySelect } from '06-entities/Country';
import { Currency, CurrencySelect } from '06-entities/Currency';
import { Text } from '07-shared/ui/Text/Text';
import { Input } from '07-shared/ui/Input/Input';
import { Button } from '07-shared/ui/Button/Button';
import IconEdit from '07-shared/assets/icons/edit.svg';
import { useAppSelector } from '07-shared/lib/hooks/app';
import { PageLoader } from '07-shared/ui/PageLoader/PageLoader';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Avatar } from '07-shared/ui/Avatar/Avatar';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const profile = useAppSelector(getProfileInfo);
    const isLoading = useAppSelector(getProfileIsLoading);

    const [readonlyMode, setReadonlyMode] = useState<boolean>(true);

    if (isLoading) return <PageLoader />;
    if (!profile) return <div>Не авторизован</div>;

    return (
        <div className={classNames(classes.ProfileCard, {}, [className])}>
            <Text view="header">
                {t('profile')}
            </Text>
            <Button
                className={classes.editBtn}
                view="secondary"
                onClick={() => setReadonlyMode((prev) => !prev)}
            >
                {t('edit_profile')}
                <IconEdit />
            </Button>
            <Avatar src={profile.avatar} alt="avatar" size="large" />
            <Input
                readOnly={readonlyMode}
                value={profile.username}
                label="username"
                labelPosition="left"
                onChange={(val) => console.log(val)}
            />
            <Input
                readOnly={readonlyMode}
                label="firstname"
                labelPosition="left"
                value={profile.first}
                onChange={(val) => console.log(val)}
            />
            <Input
                readOnly={readonlyMode}
                label="lastname"
                labelPosition="left"
                value={profile.lastname}
                onChange={(val) => console.log(val)}
            />
            <Input
                readOnly={readonlyMode}
                label="age"
                labelPosition="left"
                value={profile.age.toString()}
                onChange={(val) => console.log(val)}
            />
            <Input
                readOnly={readonlyMode}
                label="city"
                labelPosition="left"
                value={profile.city}
                onChange={(val) => console.log(val)}
            />
            {readonlyMode
                ? (
                    <div className={classes.infoField}>
                        <span className={classes.title}>country</span>
                        <span className={classes.value}>{profile.country}</span>
                    </div>
                )
                : (
                    <CountrySelect
                        className={classes.selects}
                        value={profile.country}
                        label="country"
                        labelPosition="left"
                        onSelect={(str: Country) => console.log(str)}
                    />
                )}
            {readonlyMode
                ? (
                    <div className={classes.infoField}>
                        <span className={classes.title}>currency</span>
                        <span className={classes.value}>{profile.currency}</span>
                    </div>
                )
                : (
                    <CurrencySelect
                        className={classes.selects}
                        value={profile.currency}
                        label="currency"
                        labelPosition="left"
                        onSelect={(str: Currency) => console.log(str)}
                    />
                )}
        </div>
    );
});
