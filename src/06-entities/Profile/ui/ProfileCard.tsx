import { useTranslation } from 'react-i18next';
import { getProfileInfo, getProfileIsLoading } from '06-entities/Profile/model/selectors/profileSelectors';
import { Text } from '07-shared/ui/Text/Text';
import { Input } from '07-shared/ui/Input/Input';
import { Button } from '07-shared/ui/Button/Button';
import { Select } from '07-shared/ui/Select/Select';
import IconEdit from '07-shared/assets/icons/edit.svg';
import { useAppSelector } from '07-shared/lib/hooks/app';
import { PageLoader } from '07-shared/ui/PageLoader/PageLoader';
import { classNames } from '07-shared/lib/classNames/classNames';
import { useState } from 'react';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const profile = useAppSelector(getProfileInfo);
    const isLoading = useAppSelector(getProfileIsLoading);

    const [readonlyMode, setReadonlyMode] = useState<boolean>(false);
    const [selectValue, setSelectValue] = useState<string>('one');

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
            <Select
                value={selectValue}
                options={['one', 'two', 'three']}
                onSelect={setSelectValue}
            />
        </div>
    );
};
