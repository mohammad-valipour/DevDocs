import {
    LayoutDashboard,
    Users,
    FileText,
    MessageSquare,
    Tags,
} from "lucide-react";

import {SidebarTypes} from "@/types/sidebar.types";

export const SIDEBAR: SidebarTypes = {
    logo: "Dev Docs",

    navItems: [
        {
            id: "dashboard",
            label: "داشبورد",
            icon: LayoutDashboard,
            href: "/admin",
        },
        {
            id: "users",
            label: "کاربران",
            icon: Users,
            href: "/admin/users",
        },
        {
            id: "posts",
            label: "پست‌ها",
            icon: FileText,
            href: "/admin/posts",
        },
        {
            id: "comments",
            label: "نظرات",
            icon: MessageSquare,
            href: "/admin/comments",
        },
        {
            id: "categories",
            label: "دسته‌بندی‌ها",
            icon: Tags,
            href: "/admin/categories",
        },
    ],
};
