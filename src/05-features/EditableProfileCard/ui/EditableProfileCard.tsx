import { memo, useCallback, useState } from 'react';
import { editableProfileActions, ProfileCard } from '06-entities/Profile';
import { classNames } from '07-shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from '07-shared/lib/hooks/app';
import { Text } from '07-shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { updateProfile } from '05-features/EditableProfileCard/model/services/updateProfile/updateProfile';
import { EditableProfileControls } from './EditableProfileControls/EditableProfileControls';
import {
    getProfileError,
    getProfileFormInfo,
    getProfileIsLoading,
} from '../model/selectors/profileSelectors';
import classes from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard = memo(({ className }: EditableProfileCardProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const profile = useAppSelector(getProfileFormInfo);
    const isLoading = useAppSelector(getProfileIsLoading);
    const error = useAppSelector(getProfileError);

    const [readonlyMode, setReadonlyMode] = useState<boolean>(true);

    const toggleReadonlyMode = useCallback(
        () => setReadonlyMode((prev) => !prev),
        [],
    );

    const onUsernameChange = useCallback((value: string) => {
        dispatch(editableProfileActions.onUsernameChange(value));
    }, []);

    const onFirstnameChange = useCallback((value: string) => {
        dispatch(editableProfileActions.onFirstnameChange(value));
    }, []);

    const onLastnameChange = useCallback((value: string) => {
        dispatch(editableProfileActions.onLastnameChange(value));
    }, []);

    const onCityChange = useCallback((value: string) => {
        dispatch(editableProfileActions.onCityChange(value));
    }, []);

    const onAvatarChange = useCallback((value: string) => {
        dispatch(editableProfileActions.onAvatarChange(value));
    }, []);

    const onAgeChange = useCallback((value: string) => {
        const numberValue = Number(value);
        if (!Number.isNaN(numberValue)) {
            dispatch(editableProfileActions.onAgeChange(numberValue));
        }
    }, []);

    const onCancel = useCallback(() => {
        dispatch(editableProfileActions.resetForm());
        setReadonlyMode(true);
    }, []);

    const onSubmit = useCallback(() => {
        dispatch(updateProfile());
        setReadonlyMode(true);
    }, []);

    return (
        <div className={classNames(classes.EditableProfileCard, {}, [className])}>
            <Text
                className={classes.title}
                view="header"
            >
                {t('profile')}
            </Text>
            <main className={classes.content}>
                <EditableProfileControls
                    isLoading={isLoading}
                    avatar={profile?.avatar}
                    readonlyMode={readonlyMode}
                    onCancel={onCancel}
                    onSubmit={onSubmit}
                    toggleReadonlyMode={toggleReadonlyMode}
                />
                <ProfileCard
                    profile={profile}
                    isLoading={isLoading}
                    error={error}
                    readonlyMode={readonlyMode}
                    onUsernameChange={onUsernameChange}
                    onFirstnameChange={onFirstnameChange}
                    onLastnameChange={onLastnameChange}
                    onCityChange={onCityChange}
                    onAgeChange={onAgeChange}
                    onAvatarChange={onAvatarChange}
                />
            </main>
        </div>
    );
});
