import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from '07-shared/ui/AppLink/AppLink';
import { Switch } from '07-shared/ui/Switch/Switch';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('about_us')}
            <div>
                <AppLink to="/main">To main</AppLink>
                <AppLink to="/main" view="secondary">To main</AppLink>
            </div>
            <div>
                <Switch isActive changeIsActiveStatus={() => {}} />
                <Switch isActive={false} changeIsActiveStatus={() => {}} />
            </div>
        </div>
    );
};

export default AboutPage;
