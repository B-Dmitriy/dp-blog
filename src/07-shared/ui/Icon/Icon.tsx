import GitHubIcon from '../../assets/icons/github.svg';
import VKIcon from '../../assets/icons/vk.svg';
import LinkedinIcon from '../../assets/icons/linkedin.svg';
import TGIcon from '../../assets/icons/telegram.svg';

export type IconType = 'vk' | 'gh' | 'li' | 'tg';

interface IconProps {
    type: IconType;
}

export const Icon = ({ type }: IconProps) => {
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
};
