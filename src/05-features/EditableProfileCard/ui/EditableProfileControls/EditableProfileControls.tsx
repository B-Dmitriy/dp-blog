import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '07-shared/ui/Button/Button';
import IconEdit from '07-shared/assets/icons/edit.svg';
import UserImage from '07-shared/assets/images/user.png';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Avatar } from '07-shared/ui/Avatar/Avatar';
import classes from './EditableProfileControls.module.scss';

interface EditableProfileHeaderProps {
    disabled?: boolean;
    isLoading?: boolean;
    avatar: string | undefined | null;
    readonlyMode: boolean;
    toggleReadonlyMode: () => void;
    onCancel: () => void;
    onSubmit: () => void;
    className?: string;
}

export const EditableProfileControls = memo(({
    disabled = false,
    isLoading = false,
    avatar,
    readonlyMode,
    toggleReadonlyMode,
    onCancel,
    onSubmit,
    className,
}: EditableProfileHeaderProps) => {
    const { t } = useTranslation('profile');
    return (
        <div className={classNames(classes.EditableProfileHeader, {}, [className])}>
            <Avatar
                src={avatar || UserImage}
                alt="avatar"
                size="large"
            />
            <div className={classes.controls}>
                {readonlyMode
                    ? (
                        <Button
                            disabled={isLoading || disabled}
                            className={classes.editBtn}
                            view="secondary"
                            onClick={toggleReadonlyMode}
                        >
                            {t('edit_profile')}
                            <IconEdit />
                        </Button>
                    )
                    : (
                        <>
                            <Button
                                disabled={isLoading || disabled}
                                className={classes.cancelBtn}
                                view="outline"
                                onClick={onCancel}
                            >
                                {t('cancel')}
                            </Button>
                            <Button
                                disabled={isLoading || disabled}
                                view="primary"
                                onClick={onSubmit}
                            >
                                {t('save')}
                            </Button>
                        </>
                    )}
            </div>
        </div>
    );
});
