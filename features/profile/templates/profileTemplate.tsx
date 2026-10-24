import { redirect } from "next/navigation";
import { auth } from "@/features/auth/login/helpers/auth";

export default async function ProfileTemplate() {
    const session = await auth();
    if (!session?.user) redirect("/login");


    return (
        <main className="flex h-full w-full items-center justify-center">
            این صفحه پروفایل است
        </main>
    );
}