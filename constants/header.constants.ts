import {House, BookOpen, UserPlus, LogIn} from "lucide-react";
import {HeaderTypes} from "@/types/header.types";

export const HEADER: HeaderTypes = {
    logo: "Dev Docs",
    navItems: [
        {
            id: "home",
            label: "خانه",
            icon: House,
            href: "/",
        },
        {
            id: "blog",
            label: "بلاگ",
            icon: BookOpen,
            href: "/blog",
        },
    ],
    actionItems: [
        {
            id: "register",
            label: "ثبت نام",
            icon: UserPlus,
            href: "/register",
        },
        {
            id: "login",
            label: "ورود",
            icon: LogIn,
            href: "/login",
        },
    ],
};