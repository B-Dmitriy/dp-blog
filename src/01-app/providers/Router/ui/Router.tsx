import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '07-shared/ui/PageLoader/PageLoader';
import { routesConfig } from '../lib/routerConfig';

export const Router = () => (
    <Suspense fallback={<PageLoader />}>
        <main className="content__container_page">
            <Routes>
                {Object.values(routesConfig).map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </main>
    </Suspense>
);
