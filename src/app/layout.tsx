import type {Metadata} from "next";
import "./globals.css";
import {ReactNode} from "react";
import {Lora, Roboto} from "next/font/google";

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
        <html lang="en" data-theme="retro">
        <body className={`${roboto.variable} ${lora.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
