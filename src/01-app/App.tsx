import React, { Suspense } from 'react';
import { classNames } from '07-shared/lib/classNames/classNames';
import { Navbar } from '04-widgets/Navbar';
import { Sidebar } from '04-widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { Router } from './providers/Router';

function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <Router />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
