import {Text} from "@/components/ui";
import RegisterForm from "@/features/auth/register/components/RegisterForm";

export default function RegisterTemplate() {
    return (
        <main className="flex min-h-[calc(100dvh-144px)] flex-col items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Page Header */}
                <header className="mb-8 space-y-2 text-center">
                    <Text
                        tag="h1"
                        variant="h1"
                        color="foreground"
                        weight="bold"
                        align="center"
                    >
                        ایجاد حساب کاربری
                    </Text>

                    <Text
                        tag="p"
                        variant="body"
                        color="foreground"
                        weight="light"
                        align="center"
                    >
                        برای شروع، اطلاعات خود را وارد کنید
                    </Text>
                </header>

                {/* Register Form */}
                <RegisterForm/>
            </div>
        </main>
    );
}