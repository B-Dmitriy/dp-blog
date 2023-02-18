import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <div>
            <button type="button" onClick={() => setError(true)}>Error</button>
            {t('main_page')}
        </div>
    );
};

export default MainPage;
