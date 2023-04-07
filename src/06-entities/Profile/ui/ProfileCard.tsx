import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getProfileInfo, getProfileIsLoading } from '06-entities/Profile/model/selectors/profileSelectors';
import { Country } from '06-entities/Country/types/country.types';
import { CountrySelector } from '06-entities/Country/ui/CountrySelector';
import { Currency, CurrencySelect } from '06-entities/Currency';
import { Text } from '07-shared/ui/Text/Text';
import { Input } from '07-shared/ui/Input/Input';
import { Button } from '07-shared/ui/Button/Button';
import IconEdit from '07-shared/assets/icons/edit.svg';
import { useAppSelector } from '07-shared/lib/hooks/app';
import { PageLoader } from '07-shared/ui/PageLoader/PageLoader';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const profile = useAppSelector(getProfileInfo);
    const isLoading = useAppSelector(getProfileIsLoading);

    const [readonlyMode, setReadonlyMode] = useState<boolean>(false);

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
            <Input
                readOnly={readonlyMode}
                value={profile.first}
                onChange={(val) => console.log(val)}
            />
            <Input
                readOnly={readonlyMode}
                value={profile.lastname}
                onChange={(val) => console.log(val)}
            />
            <div style={{ display: 'flex' }}>
                <CountrySelector
                    value={profile.country}
                    onSelect={(str: Country) => console.log(str)}
                />
                <CurrencySelect
                    value={profile.currency}
                    onSelect={(str: Currency) => console.log(str)}
                />
            </div>
        </div>
    );
};
