"use client";

import {NavItemType} from "@/types/sidebar.types";
import Link from "next/link";
import {LucideIcon} from "lucide-react";
import {usePathname} from "next/navigation";

interface NavItemsProps {
    navbarItems: NavItemType[];
}

export default function NavItems({navbarItems}: NavItemsProps) {
    const pathname: string = usePathname();

    return (
        <nav className="flex-1 space-y-1 p-4">
            {
                navbarItems.map(item => {
                        const isActive = item.href === "/admin"
                            ? pathname === "/admin"
                            : pathname === item.href || pathname.startsWith(`${item.href}/`);
                        const Icon: LucideIcon = item.icon;

                        return (
                            <Link key={item.href}
                                  href={item.href}
                                  className={`${isActive
                                      ? "bg-primary/10 text-primary"
                                      : "hover:bg-primary/10 hover:text-primary"
                                  } flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition `}
                            >
                                <Icon className="flex h-6 w-6 items-center justify-center text-base"/>
                                <span>{item.label}</span>
                            </Link>
                        )
                    }
                )
            }
        </nav>
    );
}