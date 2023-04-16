import { RouteProps } from 'react-router-dom';
import { MainPage } from '03-pages/MainPage';
import { ProfilePage } from '03-pages/ProfilePage';
import { AboutPage } from '03-pages/AboutPage';
import { NotFoundPage } from '03-pages/NotFoundPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routesConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePaths.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage />,
    },
};
