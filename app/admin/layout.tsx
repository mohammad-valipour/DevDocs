import React from 'react';
import Sidebar from "@/components/layout/admin/sidebar/sidebar";

export default function AdminLayout({children}: LayoutProps<"/admin">) {
    return (
        <div dir="rtl" className="min-h-screen ">
            <div className="flex min-h-screen">
                {/* Sidebar */}
                <Sidebar/>

                {/* Main */}
                <main className="min-w-0 flex-1">
                    <div className="mx-auto max-w-7xl p-6 md:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}