import { classNames } from '07-shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { Button } from '07-shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from '07-shared/lib/hooks/app';
import { getAuthIsAuth } from '05-features/Auth/model/selectors/auth.selectors';
import { logoutThunk } from '05-features/Auth/model/services/logout.thunk';
import UserIcon from '07-shared/assets/icons/user.svg';
import AuthModal from '../AuthModal/AuthModal';
import classes from './Auth.module.scss';

interface AuthProps {
    className?: string;
}

export const Auth = ({ className }: AuthProps) => {
    const dispatch = useAppDispatch();

    const isAuth = useAppSelector(getAuthIsAuth);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const logout = useCallback(() => dispatch(logoutThunk()), [dispatch]);

    return (
        <div className={classNames(classes.AuthNavbar, {}, [className])}>
            <Button view="clear" onClick={isAuth ? logout : openModal}>{isAuth ? 'Выход' : 'Войти'}</Button>
            {isAuth && <div className={classes.icon}><UserIcon /></div>}
            <AuthModal isOpen={isOpen} closeModal={closeModal} />
        </div>
    );
};
