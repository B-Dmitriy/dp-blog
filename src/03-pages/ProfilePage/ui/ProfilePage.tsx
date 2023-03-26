import { memo } from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import classes from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => (
    <div className={classNames(classes.ProfilePage, {}, [className])}>
        Profile
    </div>
));

export default ProfilePage;
