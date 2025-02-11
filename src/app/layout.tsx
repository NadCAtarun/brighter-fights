import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";
import {Lora, Roboto} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import FeedbackButtons from "@/components/feedback-buttons";
import VersionDisplay from "@/components/version-display";

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

/**
 * The RootLayout component serves as the root layout wrapper for the web app.
 * It structures the overall HTML document with a Header,
 * main content, FeedbackButtons, and Footer, while applying global themes and styles.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - React elements to be rendered within the main content area.
 */
export default function RootLayout({children,}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en" data-theme="brighter">
        <body className={`${roboto.variable} ${lora.variable} antialiased bg-base-200`}>
        <div className="flex flex-col min-h-screen">
            <Header/>

            <main className="font-title flex-grow pb-10" data-theme="brighter">
                {children}
                <Analytics/>
            </main>

            <FeedbackButtons/>

            <VersionDisplay/>

            <Footer/>
        </div>
        </body>
        </html>
    );
}
