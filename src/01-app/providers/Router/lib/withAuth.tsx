import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from '01-app/providers/Router/lib/routerConfig';
import { getUser } from '06-entities/User';
import { useAppSelector } from '07-shared/lib/hooks/app';

export const withAuth = (element: ReactNode) => {
    const user = useAppSelector(getUser);
    const location = useLocation();

    console.log('Redirect', user);
    if (!user) {
        return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
    }

    return element;
};
