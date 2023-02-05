import React from 'react';
import './styles/index.scss';
import {Router} from './providers/Router';
import {useTheme} from './providers/ThemeProvider';
import {classNames} from '07-shared/lib/classNames/classNames';
import {Navbar} from '04-widgets/Navbar';

const App = () => {
	const {theme, toggleTheme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<button onClick={toggleTheme}>THEME</button>
			<Router/>
		</div>
	);
};

export default App;
