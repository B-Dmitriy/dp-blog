import ReactDOM from 'react-dom';
import './07-shared/config/i18n/i18n';
import './07-shared/assets/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '01-app/providers/ErrorBoundary';
import { ThemeProvider } from '01-app/providers/ThemeProvider';
import App from './01-app/App';

ReactDOM.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root'),
);
