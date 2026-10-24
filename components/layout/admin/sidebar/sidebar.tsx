"use client";

import {SIDEBAR} from "@/constants/sidebar.constants";
import Link from "next/link";
import NavItems from "@/components/layout/admin/sidebar/navItems";
import {Text} from "@/components/ui";
import {LogOut} from "lucide-react";

export default function Sidebar() {
    const {logo, navItems} = SIDEBAR;

    return (
        <aside className="hidden w-60 shrink-0 border border-border rounded-2xl m-6 md:block">
            <div className="sticky top-0 flex h-screen flex-col">
                {/* Logo */}
                <Text tag="h3"
                      variant="h3"
                      color="primary"
                      weight="bold"
                      align="center"
                      className="py-8"
                >
                    {logo}
                </Text>

                {/* Navbar Items */}
                <NavItems navbarItems={navItems}/>

                {/* Exit */}
                <Link href="/"
                      className="flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-danger/10 m-4"
                >
                    <LogOut className="text-danger"/>
                    <Text tag="span"
                          variant="body"
                          weight="normal"
                          align="center"
                          color="danger"
                    >
                        خروج
                    </Text>
                </Link>
            </div>
        </aside>
    );
}