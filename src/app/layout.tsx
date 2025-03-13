import type {Metadata} from "next";
import {Lora, Roboto} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import VersionDisplay from "@/components/version-display";
import FeedbackButtons from "@/components/feedback-buttons";
import Footer from "@/components/footer";
import Header from "@/components/header";

export const metadata: Metadata = {
    title: "Brighter Fights",
    description: "Combat companion app for Brighter Shores",
};

const lora = Lora({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-title',
});

const roboto = Roboto({
    weight: ['400', '500'],
    subsets: ['latin'],
    variable: '--font-text',
});

/**
 * RootLayout component defines the overall HTML structure of the application, including the header, footer,
 * and main content area where children components are rendered.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The child components or elements to be rendered inside the main content area.
 */
export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${roboto.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}>

        <Header/>

        <main className="bg-base-200 text-base-content flex-1">
            {children}
        </main>

        <FeedbackButtons/>

        <VersionDisplay/>

        <Footer/>

        </body>
        </html>
    );
}
