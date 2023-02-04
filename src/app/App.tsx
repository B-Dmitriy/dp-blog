import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import { useTheme } from 'app/providers/ThemeProvider';

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<button onClick={toggleTheme}>THEME</button>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPage/>}/>
					<Route path={'/about'} element={<AboutPage/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;