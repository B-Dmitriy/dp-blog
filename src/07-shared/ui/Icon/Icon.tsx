import { memo } from 'react';
import VKIcon from '07-shared/assets/icons/vk.svg';
import TGIcon from '07-shared/assets/icons/telegram.svg';
import GitHubIcon from '07-shared/assets/icons/github.svg';
import LinkedinIcon from '07-shared/assets/icons/linkedin.svg';

export type IconType = 'vk' | 'gh' | 'li' | 'tg';

interface IconProps {
    type: IconType;
}

export const Icon = memo(({ type }: IconProps) => {
    switch (type) {
    case 'gh':
        return <GitHubIcon />;
    case 'vk':
        return <VKIcon />;
    case 'li':
        return <LinkedinIcon />;
    case 'tg':
        return <TGIcon />;
    default:
        return null;
    }
});
