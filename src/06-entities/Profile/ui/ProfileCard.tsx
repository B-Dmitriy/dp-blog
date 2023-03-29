import { useTranslation } from 'react-i18next';
import { getProfileInfo, getProfileIsLoading } from '06-entities/Profile/model/selectors/profileSelectors';
import { Text } from '07-shared/ui/Text/Text';
import { Input } from '07-shared/ui/Input/Input';
import { Button } from '07-shared/ui/Button/Button';
import { Loader } from '07-shared/ui/Loader/Loader';
import IconEdit from '07-shared/assets/icons/edit.svg';
import { useAppSelector } from '07-shared/lib/hooks/app';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const profile = useAppSelector(getProfileInfo);
    const isLoading = useAppSelector(getProfileIsLoading);

    if (isLoading) return <Loader />;
    if (!profile) return <div>Не авторизован</div>;

    return (
        <div className={classNames(classes.ProfileCard, {}, [className])}>
            <Text view="header">
                {t('profile')}
            </Text>
            <Button
                className={classes.editBtn}
                view="secondary"
            >
                {t('edit_profile')}
                <IconEdit />
            </Button>
            <Input
                value={profile.first}
            />
            <Input
                value={profile.lastname}
            />
        </div>
    );
};
