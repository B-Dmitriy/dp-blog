import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesConfig } from '../lib/routerConfig';

export const Router = () => (
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
);
