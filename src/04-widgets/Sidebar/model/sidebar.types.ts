import React from 'react';

export interface SidebarMenuItemType {
    path: string;
    titleKey: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export type SidebarMenuList = SidebarMenuItemType[];
