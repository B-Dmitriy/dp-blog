import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '07-shared/ui/Text/Text';
import { Input } from '07-shared/ui/Input/Input';
import { Button } from '07-shared/ui/Button/Button';
import { classNames } from '07-shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from '07-shared/lib/hooks/app';
import { AsyncReducerLoader, ReducerList } from '07-shared/lib/components';
import { authActions, authReducer } from '../../model/slice/auth.slice';
import { login } from '../../model/services/login/login';
import {
    getAuthError, getAuthIsLoading, getPassword, getUsername,
} from '../../model/selectors/authSelectors';
import classes from './AuthForm.module.scss';

interface AuthFormProps {
    className?: string;
    onCancel: () => void;
}

const initialReducers: ReducerList = {
    auth: authReducer,
};

export const AuthForm = memo(({ className, onCancel }: AuthFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useAppSelector(getUsername);
    const password = useAppSelector(getPassword);
    const error = useAppSelector(getAuthError);
    const isLoading = useAppSelector(getAuthIsLoading);

    const onChangeUsername = useCallback((newValue: string) => {
        if (error) dispatch(authActions.setError(''));
        dispatch(authActions.setUsername(newValue));
    }, [dispatch, error]);

    const onChangePassword = useCallback((newValue: string) => {
        if (error) dispatch(authActions.setError(''));
        dispatch(authActions.setPassword(newValue));
    }, [dispatch, error]);

    const onSubmit = useCallback(() => {
        dispatch(login({ username, password }))
            .then((res) => {
                if (res.meta.requestStatus === 'fulfilled') {
                    dispatch(authActions.resetAuthState());
                    onCancel();
                }
            });
    }, [dispatch, username, password]);

    return (
        <AsyncReducerLoader reducers={initialReducers} removeAfterUnmount>
            <form className={classNames(classes.AuthForm, {}, [className])}>
                <Text view="header">{t('auth.authentication')}</Text>
                <span className={classes.errorField}>{error && <Text view="error">{error}</Text>}</span>
                <Input
                    autoFocus
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
            </form>
        </AsyncReducerLoader>
    );
});
