import {NavItemType} from "@/types/header.types";
import Link from "next/link";
import {Text} from "@/components/ui";

interface NavItemsProps {
    navbarItems: NavItemType[];
}

export default function NavItems({navbarItems}: NavItemsProps) {
    return (
        <nav className="flex items-center gap-4">
            {
                navbarItems.map(item =>

                    <Link key={item.id}
                          href={item.href}
                          className="hover:text-primary"
                    >
                        {item.label}
                    </Link>
                )
            }
        </nav>
    );
}