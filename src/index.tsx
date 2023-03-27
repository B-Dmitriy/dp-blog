import ReactDOM from 'react-dom';
import './07-shared/config/i18n/i18n';
import './07-shared/assets/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '01-app/providers/StoreProvider/';
import { ErrorBoundary } from '07-shared/lib/components/ErrorBoundary';
import { ThemeProvider } from '07-shared/lib/components/ThemeProvider';
import App from './01-app/App';

ReactDOM.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
