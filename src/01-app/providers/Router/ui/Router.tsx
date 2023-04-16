import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { withAuth } from '01-app/providers/Router/lib/withAuth';
import { AppRoutesProps, routesConfig } from '../lib/routerConfig';

export const Router = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const { element } = route;
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? withAuth(element) : element}
            />
        );
    }, []);

    return (
        <main className="content__container_page">
            <Routes>
                {Object.values(routesConfig).map(renderWithWrapper)}
            </Routes>
        </main>
    );
};
