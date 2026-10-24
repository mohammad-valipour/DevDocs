"use client";

import {FormField} from "@/components/ui";
import Link from "next/link";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {FormEvent} from "react";


export default function LoginForm() {
    const router = useRouter();

    async function handlerSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const result = await signIn("credentials", {email, password, redirect: false});
            if (!result || result.error) {
                alert("ایمیل یا رمز عبور اشتباه است.");
            } else {
                router.push("/profile");
                router.refresh();
            }

        } catch (error) {
            console.error("Login error:", error);
        }
    }

    return (
        <form onSubmit={handlerSubmit}
              className="rounded-2xl border border-border p-6 shadow-sm"
        >
            <div className="space-y-5">
                <FormField id="email"
                           name="email"
                           type="email"
                           label="ایمیل"
                           autoComplete="email"
                           placeholder="ایمیل خود را وارد کنید"
                           required
                />

                <FormField id="password"
                           name="password"
                           type="password"
                           label="رمز عبور"
                           autoComplete="current-password"
                           placeholder="رمز عبور خود را وارد کنید"
                           required
                />

                <button
                    type="submit"
                    className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-primary-hover"
                >
                    ورود
                </button>

                <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200"/>
                    <span className="text-xs font-medium text-gray-500">یا</span>
                    <div className="h-px flex-1 bg-gray-200"/>
                </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
                حساب کاربری ندارید؟{" "}
                <Link
                    href="/register"
                    className="font-medium text-primary transition-colors hover:text-primary-hover hover:underline"
                >
                    ثبت‌نام کنید
                </Link>
            </p>
        </form>
    );
}