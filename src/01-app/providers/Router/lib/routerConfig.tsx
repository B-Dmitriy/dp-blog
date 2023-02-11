import { RouteProps } from 'react-router-dom';
import { MainPage } from '03-pages/MainPage';
import { AboutPage } from '03-pages/AboutPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
};
