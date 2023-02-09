import React from 'react';
import './styles/index.scss';
import {Router} from './providers/Router';
import {useTheme} from './providers/ThemeProvider';
import {classNames} from '07-shared/lib/classNames/classNames';
import {Navbar} from '04-widgets/Navbar';
import {Sidebar} from "04-widgets/Sidebar";

const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<div className="content-page">
				<Sidebar />
				<Router/>
			</div>
		</div>
	);
};

export default App;
