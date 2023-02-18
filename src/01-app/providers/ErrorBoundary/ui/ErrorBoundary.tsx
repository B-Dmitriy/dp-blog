import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorScreen } from '04-widgets/ErrorScreen/ui/ErrorScreen';
import { Loader } from '07-shared/ui/Loader/Loader';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): State {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        // eslint-disable-next-line no-console
        console.error('[ErrorBoundary]: ', error.name, error.message, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return <Suspense fallback={<Loader />}><ErrorScreen /></Suspense>;
        }

        return children;
    }
}

// export default withTranslation()(ErrorBoundary);
