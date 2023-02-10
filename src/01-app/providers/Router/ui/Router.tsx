import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routesConfig} from '../lib/routerConfig';

export const Router = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routesConfig).map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<div className="page-wrapper">{route.element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
