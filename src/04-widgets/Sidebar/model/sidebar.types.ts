import React from 'react';

export interface SidebarMenuItemType {
    path: string;
    titleKey: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export type SidebarMenuList = SidebarMenuItemType[];
