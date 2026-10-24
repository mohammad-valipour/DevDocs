"use client";

import {FormField} from "@/components/ui";
import Link from "next/link";
import {register} from "@/features/auth/register/actions/register.actions";
import {useActionState} from "react";

const initialState = {
    message: "",
    error: {},
    success: false,
    values: {}
};

export default function RegisterForm() {
    const [state, formAction, isPending] = useActionState(register, initialState);
    return (
        <form action={formAction}
              className="rounded-2xl border border-border p-6 shadow-sm"
        >
            <div className="space-y-5">
                <FormField id="name"
                           name="name"
                           type="text"
                           label="نام"
                           autoComplete="name"
                           defaultValue={state?.values?.name || ""}
                           placeholder="نام خود را وارد کنید"
                           required
                />

                <FormField id="email"
                           name="email"
                           type="email"
                           label="ایمیل"
                           autoComplete="email"
                           defaultValue={state?.values?.email || ""}
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

                <FormField id="confirmPassword"
                           name="confirmPassword"
                           type="password"
                           label="تکرار رمز عبور"
                           autoComplete="current-password"
                           placeholder="رمز عبور خود را دوباره وارد کنید"
                           required
                />

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-primary-hover"
                >
                    {isPending ? "در حال ثبت نام" : "ثبت نام"}
                </button>

                <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200"/>
                    <span className="text-xs font-medium text-gray-500">یا</span>
                    <div className="h-px flex-1 bg-gray-200"/>
                </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
                حساب کاربری دارید؟{" "}
                <Link
                    href="/login"
                    className="font-medium text-primary transition-colors hover:text-primary-hover hover:underline"
                >
                    وارد شوید
                </Link>
            </p>
        </form>
    );
}