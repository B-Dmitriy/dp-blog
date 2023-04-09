import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '07-shared/ui/Text/Text';

export const ProfileNotAuthorized = memo(() => {
    const { t } = useTranslation('profile');
    return <Text view="paragraph">{t('errors.not_authorized')}</Text>;
});
