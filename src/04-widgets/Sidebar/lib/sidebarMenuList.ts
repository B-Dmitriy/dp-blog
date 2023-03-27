import MainIcon from '07-shared/assets/icons/main.svg';
import AboutIcon from '07-shared/assets/icons/about.svg';
import ProfileIcon from '07-shared/assets/icons/profile.svg';
import type { SidebarMenuList } from '../model/sidebar.types';

export const sidebarMenuList: SidebarMenuList = [
    {
        path: '/',
        titleKey: 'main',
        Icon: MainIcon,
    }, {
        path: '/profile',
        titleKey: 'profile',
        Icon: ProfileIcon,
    }, {
        path: '/about',
        titleKey: 'about',
        Icon: AboutIcon,
    },
];
