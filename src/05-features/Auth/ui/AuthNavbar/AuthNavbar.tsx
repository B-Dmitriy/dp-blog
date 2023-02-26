import { classNames } from '07-shared/lib/classNames/classNames';
import { Modal } from '07-shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button } from '07-shared/ui/Button/Button';
import { AuthForm } from '05-features/Auth/ui/AuthForm/AuthForm';
import { useAppDispatch, useAppSelector } from '07-shared/lib/hooks/app';
import { getAuthIsAuth } from '05-features/Auth/model/selectors/auth.selectors';
import { logoutThunk } from '05-features/Auth/model/services/logout.thunk';
import classes from './AuthNavbar.module.scss';

interface AuthProps {
    className?: string;
}

export const AuthNavbar = ({ className }: AuthProps) => {
    const dispatch = useAppDispatch();

    const isAuth = useAppSelector(getAuthIsAuth);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const logout = useCallback(() => dispatch(logoutThunk()), [dispatch]);

    return (
        <div className={classNames(classes.AuthNavbar, {}, [className])}>
            <Button view="clear" onClick={isAuth ? logout : openModal}>{isAuth ? 'Выход' : 'Не авторизован'}</Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <AuthForm onCancel={closeModal} />
            </Modal>
        </div>
    );
};
