import { memo, useEffect } from 'react';
import { ProfileCard, getProfile, profileReducer } from '06-entities/Profile';
import { useAppDispatch } from '07-shared/lib/hooks/app';
import { classNames } from '07-shared/lib/classNames/classNames';
import { AsyncReducerLoader, ReducerList } from '07-shared/lib/components';
import classes from './ProfilePage.module.scss';

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <AsyncReducerLoader reducers={reducers}>
            <div className={classNames(classes.ProfilePage, {}, [className])}>
                <ProfileCard />
            </div>
        </AsyncReducerLoader>
    );
});

export default ProfilePage;
