import {LucideIcon} from "lucide-react";

export interface NavItemType {
    id: string;
    label: string;
    icon: LucideIcon;
    href: string;
}

export interface SidebarTypes {
    logo: string;
    navItems: NavItemType[];
}