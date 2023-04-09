import { memo } from 'react';
import { Loader } from '07-shared/ui/Loader/Loader';
import classes from './ProfileIsLoading.module.scss';

export const ProfileIsLoading = memo(() => (
    <section className={classes.ProfileIsLoading}>
        <Loader />
    </section>
));
