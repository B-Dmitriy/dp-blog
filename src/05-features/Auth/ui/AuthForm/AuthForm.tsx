import { classNames } from '07-shared/lib/classNames/classNames';
import { Text } from '07-shared/ui/Text/Text';
import { Input } from '07-shared/ui/Input/Input';
import { Button } from '07-shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '07-shared/lib/hooks/app';
import { authActions, loginThunk } from '05-features/Auth';
import { useCallback } from 'react';
import classes from './AuthForm.module.scss';
import {
    getAuthError, getAuthIsLoading, getPassword, getUsername,
} from '../../model/selectors/auth.selectors';

interface AuthFormProps {
    className?: string;
    onCancel: () => void;
}

export const AuthForm = ({ className, onCancel }: AuthFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useAppSelector(getUsername);
    const password = useAppSelector(getPassword);
    const error = useAppSelector(getAuthError);
    const isLoading = useAppSelector(getAuthIsLoading);

    const onChangeUsername = useCallback(
        (newValue: string) => dispatch(authActions.setUsername(newValue)),
        [dispatch],
    );

    const onChangePassword = useCallback(
        (newValue: string) => dispatch(authActions.setPassword(newValue)),
        [dispatch],
    );

    const onSubmit = useCallback(() => {
        dispatch(loginThunk({ username, password }));
    }, [dispatch, username, password]);

    return (
        <section className={classNames(classes.AuthForm, {}, [className])}>
            <Text view="header">{t('auth.authentication')}</Text>
            <span className={classes.errorField}>{error && <Text view="error">{error}</Text>}</span>
            <Input
                label={t('auth.username')}
                value={username}
                onChangeValue={onChangeUsername}
            />
            <Input
                label={t('auth.password')}
                value={password}
                modification="secret"
                onChangeValue={onChangePassword}
            />
            <div className={classes.controls}>
                <Button
                    disabled={isLoading}
                    view="outline"
                    onClick={onCancel}
                >
                    {t('cancel')}
                </Button>
                <Button
                    disabled={isLoading}
                    onClick={onSubmit}
                >
                    {t('send_in')}
                </Button>
            </div>
        </section>
    );
};
