import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";
import {Lora, Roboto} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
import Footer from "@/components/footer";
import {ExternalLinkIcon} from "lucide-react";

export const metadata: Metadata = {
    title: "Brighter Fights",
    description: "Combat companion app for Brighter Shores",
};

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-text',
    weight: '300',
});
const lora = Lora({
    subsets: ['latin'],
    variable: '--font-title',
});

export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en" data-theme="brighter">
        <body className={`${roboto.variable} ${lora.variable} antialiased bg-base-200`}>
        <div className="flex flex-col min-h-screen">
            <header className="flex justify-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold font-title text-secondary m-4">✨Brighter Fights✨</h1>
                    <h2 className="text-2xl font-bold font-title mb-4">Combat companion app for
                        <a href="https://www.brightershores.com/"
                           className="link link-primary mx-2 font-bold"
                           target="_blank"
                           rel="noopener noreferrer">
                            Brighter Shores
                            <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
                        </a>
                    </h2>
                </div>

            </header>
            <main className="font-title flex-grow pb-10" data-theme="brighter">
                {children}
                <Analytics/>
            </main>
            <Footer/>
        </div>
        </body>
        </html>
    );
}
