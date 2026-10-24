import Link from "next/link";
import {ActionItemType} from "@/types/header.types";
import Image from "next/image";
import {auth} from "@/features/auth/login/helpers/auth";

interface ActionItemsProps {
    actionItems: ActionItemType[];
}

export default async function ActionItems({actionItems}: ActionItemsProps) {
    const session = await auth();
    if (!session?.user) return null;

    return (
        <nav className="flex items-center gap-4">
            {
                session
                    ? <Link href="/profile"
                            className="relative w-10 h-10 rounded-full border-2 border-primary"
                    >
                        <Image src="/images/avatar.jpg" alt="Avatar Image" fill className="rounded-full"/>
                    </Link>
                    : <>
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
                    </>
            }
        </nav>
    );
}