import { memo, useCallback, useState } from 'react';
import { editableProfileActions, ProfileCard } from '06-entities/Profile';
import { classNames } from '07-shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from '07-shared/lib/hooks/app';
import { Text } from '07-shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { updateProfile } from '05-features/EditableProfileCard/model/services/updateProfile/updateProfile';
import { Country } from '06-entities/Country';
import { Currency } from '06-entities/Currency';
import { EditableProfileControls } from './EditableProfileControls/EditableProfileControls';
import {
    getProfileError, getProfileFormErrors,
    getProfileFormInfo, getProfileInfo,
    getProfileIsLoading, getProfileValidateIsLoading,
} from '../model/selectors/profileSelectors';
import classes from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
    className?: string;
}

export const EditableProfileCard = memo(({ className }: EditableProfileCardProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const profile = useAppSelector(getProfileInfo);
    const profileForm = useAppSelector(getProfileFormInfo);
    const isLoading = useAppSelector(getProfileIsLoading);
    const isValidateLoading = useAppSelector(getProfileValidateIsLoading);
    const error = useAppSelector(getProfileError);
    const formErrors = useAppSelector(getProfileFormErrors);

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

    const onCountryChange = useCallback((value: Country) => {
        dispatch(editableProfileActions.onCountryChange(value));
    }, []);

    const onCurrencyChange = useCallback((value: Currency) => {
        dispatch(editableProfileActions.onCurrencyChange(value));
    }, []);

    const onCancel = useCallback(() => {
        dispatch(editableProfileActions.resetForm());
        setReadonlyMode(true);
    }, []);

    const onSubmit = useCallback(() => {
        setReadonlyMode(true);
        dispatch(updateProfile()).then((res) => {
            if (res.meta.requestStatus === 'rejected') {
                setReadonlyMode(false);
            }
        });
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
                    disabled={!profile}
                    isLoading={isLoading}
                    avatar={profileForm?.avatar}
                    readonlyMode={readonlyMode}
                    onCancel={onCancel}
                    onSubmit={onSubmit}
                    toggleReadonlyMode={toggleReadonlyMode}
                />
                <ProfileCard
                    profile={profileForm}
                    isLoading={isLoading}
                    isValidateLoading={isValidateLoading}
                    isAuth={!!profile}
                    error={error}
                    formErrors={formErrors}
                    readonlyMode={readonlyMode}
                    onUsernameChange={onUsernameChange}
                    onFirstnameChange={onFirstnameChange}
                    onLastnameChange={onLastnameChange}
                    onCityChange={onCityChange}
                    onAgeChange={onAgeChange}
                    onAvatarChange={onAvatarChange}
                    onCountryChange={onCountryChange}
                    onCurrencyChange={onCurrencyChange}
                />
            </main>
        </div>
    );
});
