import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from '07-shared/ui/AppLink/AppLink';
import { Switch } from '07-shared/ui/Switch/Switch';
import { IconLink } from '07-shared/ui/IconLink/IconLink';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('about_us')}
            <div style={{
                padding: '40px', display: 'flex', gap: '30px', alignItems: 'center',
            }}
            >
                <div style={{ minWidth: '100px' }}>link</div>
                <AppLink to="/main">To main</AppLink>
                <AppLink to="/main" view="secondary">To main</AppLink>
            </div>
            <div style={{
                padding: '40px', display: 'flex', gap: '30px', alignItems: 'center',
            }}
            >
                <div style={{ minWidth: '100px' }}>switch</div>
                <Switch isActive changeIsActiveStatus={() => {}} />
                <Switch isActive={false} changeIsActiveStatus={() => {}} />
            </div>
            <div style={{
                padding: '40px', display: 'flex', gap: '30px', alignItems: 'center',
            }}
            >
                <div style={{ minWidth: '100px' }}>icons</div>
                <IconLink type="li" href="ref" />
                <IconLink type="tg" href="ref" />
                <IconLink type="vk" href="ref" />
                <IconLink type="gh" href="ref" />
            </div>
        </div>
    );
};

export default AboutPage;
