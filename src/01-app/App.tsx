import React, { Suspense, useEffect } from 'react';
import { Navbar } from '04-widgets/Navbar';
import { Sidebar } from '04-widgets/Sidebar';
import { meThunk } from '05-features/Auth';
import { useAppDispatch } from '07-shared/lib/hooks/app';
import { classNames } from '07-shared/lib/classNames/classNames';
import { useTheme } from '07-shared/lib/components/ThemeProvider';
import { Router } from './providers/Router';

function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(meThunk());
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content__container">
                    <Sidebar />
                    <Router />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
