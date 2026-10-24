import React from 'react';
import Header from "@/components/layout/website/header/header";

export default function WebsiteLayout({children}: LayoutProps<"/">) {
    return (
        <>
            <Header/>

            <main className="">
                {children}
            </main>

        </>
    );
}