import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink } from '07-shared/ui/AppLink/AppLink';
import { Switch } from '07-shared/ui/Switch/Switch';
import { IconLink } from '07-shared/ui/IconLink/IconLink';
import { Button } from '07-shared/ui/Button/Button';
import SunIcon from '07-shared/assets/icons/sun.svg';
import MoonIcon from '07-shared/assets/icons/moon.svg';

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
            {t('main_page')}
            <div style={{
                padding: '40px', display: 'flex', gap: '30px', alignItems: 'center',
            }}
            >
                <div style={{ minWidth: '100px' }}>primary</div>
                <Button view="primary" size="small">Text</Button>
                <Button view="primary" size="small" disabled>Text</Button>
                <Button view="primary">Text</Button>
                <Button view="primary" leftIcon={<SunIcon />}>Text</Button>
                <Button view="primary" rightIcon={<MoonIcon />}>Text</Button>
                <Button view="primary" leftIcon={<SunIcon />} rightIcon={<MoonIcon />}>Text</Button>
                <Button view="primary" disabled>Text</Button>
                <Button view="primary" size="large">Text</Button>
                <Button view="primary" size="large" disabled>Text</Button>
            </div>
            <div style={{
                padding: '40px', display: 'flex', gap: '30px', alignItems: 'center',
            }}
            >
                <div style={{ minWidth: '100px' }}>secondary</div>
                <Button view="secondary" size="small">Text</Button>
                <Button view="secondary" size="small" disabled>Text</Button>
                <Button view="secondary">Text</Button>
                <Button view="secondary" leftIcon={<SunIcon />}>Text</Button>
                <Button view="secondary" rightIcon={<MoonIcon />}>Text</Button>
                <Button view="secondary" leftIcon={<SunIcon />} rightIcon={<MoonIcon />}>Text</Button>
                <Button view="secondary" disabled>Text</Button>
                <Button view="secondary" size="large">Text</Button>
                <Button view="secondary" size="large" disabled>Text</Button>
            </div>
            <div style={{
                padding: '40px', display: 'flex', gap: '30px', alignItems: 'center',
            }}
            >
                <div style={{ minWidth: '100px' }}>outline</div>
                <Button view="outline" size="small">Text</Button>
                <Button view="outline" size="small" disabled>Text</Button>
                <Button view="outline">Text</Button>
                <Button view="outline" leftIcon={<SunIcon />}>Text</Button>
                <Button view="outline" rightIcon={<MoonIcon />}>Text</Button>
                <Button view="outline" leftIcon={<SunIcon />} rightIcon={<MoonIcon />}>Text</Button>
                <Button view="outline" disabled>Text</Button>
                <Button view="outline" size="large">Text</Button>
                <Button view="outline" size="large" disabled>Text</Button>
            </div>
            <div style={{
                padding: '40px', display: 'flex', gap: '30px', alignItems: 'center',
            }}
            >
                <div style={{ minWidth: '100px' }}>clear</div>
                <Button view="clear" size="small">Text</Button>
                <Button view="clear" size="small" disabled>Text</Button>
                <Button view="clear">Text</Button>
                <Button view="clear" leftIcon={<SunIcon />}>Text</Button>
                <Button view="clear" rightIcon={<MoonIcon />}>Text</Button>
                <Button view="clear" leftIcon={<SunIcon />} rightIcon={<MoonIcon />}>Text</Button>
                <Button view="clear" disabled>Text</Button>
                <Button view="clear" size="large">Text</Button>
                <Button view="clear" size="large" disabled>Text</Button>
            </div>
        </div>
    );
};

export default AboutPage;
