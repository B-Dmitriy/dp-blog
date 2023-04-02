import {
    memo, useCallback, useState,
} from 'react';
import { getUser } from '06-entities/User';
import UserIcon from '07-shared/assets/icons/user.svg';
import { Button } from '07-shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from '07-shared/lib/hooks/app';
import { AuthModal } from '../AuthModal/AuthModal.async';
import { logout } from '../../model/services/logout/logout';
import classes from './Auth.module.scss';

export const Auth = memo(() => {
    const dispatch = useAppDispatch();

    const user = useAppSelector(getUser);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const logoutThunk = useCallback(() => dispatch(logout()), [dispatch]);

    return (
        <div className={classes.AuthNavbar}>
            <Button view="clear" onClick={user ? logoutThunk : openModal}>{user ? 'Выход' : 'Войти'}</Button>
            {user && <div className={classes.icon}><UserIcon /></div>}
            <AuthModal isOpen={isOpen} closeModal={closeModal} />
        </div>
    );
});
