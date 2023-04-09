import React, { memo } from 'react';
import { Text } from '07-shared/ui/Text/Text';

interface ProfileErrorProps {
    error: string;
}

export const ProfileError = memo(({ error }: ProfileErrorProps) => (
    <Text view="error">
        {error}
    </Text>
));
