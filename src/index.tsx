import ReactDOM from 'react-dom';
import './07-shared/config/i18n/i18n';
import { BrowserRouter } from 'react-router-dom';
import App from './01-app/App';
import { ThemeProvider } from './01-app/providers/ThemeProvider';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
