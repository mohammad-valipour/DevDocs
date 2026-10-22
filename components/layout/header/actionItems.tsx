import Link from "next/link";
import {ActionItemType} from "@/types/header.types";

interface ActionItemsProps {
    actionItems: ActionItemType[];
}

export default function ActionItems({actionItems}: ActionItemsProps) {
    return (
        <nav className="flex items-center gap-4">
            {
                actionItems.map(item =>

                    <Link key={item.id}
                          href={item.href}
                          className="border border-border rounded-lg py-2 px-4 text-center font-normal hover:bg-primary-hover hover:text-white even:bg-primary even:text-white"
                    >
                            {item.label}
                    </Link>
                )
            }
        </nav>
    );
}