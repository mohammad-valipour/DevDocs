import {LucideIcon} from "lucide-react";

export interface NavItemType {
    id: string,
    label: string,
    icon: LucideIcon,
    href: string,
}

export interface ActionItemType {
    id: string,
    label: string,
    icon: LucideIcon,
    href: string,
}

export interface HeaderTypes {
    logo: string;
    navItems: NavItemType[];
    actionItems: ActionItemType[];
}