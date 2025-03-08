import type {Metadata} from "next";
import {Lora, Roboto} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Link from "next/link";
import ExternalLink from "@/components/external-link";

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

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${roboto.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}>
        <header className="flex justify-center">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-secondary m-4">✨Brighter Fights✨</h1>
                <h2 className="text-2xl font-bold mb-4">Combat companion app for
                    <ExternalLink url="https://www.brightershores.com/" label="Brighter Shores"/>
                </h2>
            </div>
        </header>

        <main className="bg-base-200 text-base-content flex-1">
            {children}
        </main>

        <footer className="footer bg-base-100 text-base-content mt-2 p-6 mb-28 lg:mb-0">
            <div className="container mx-auto flex flex-col items-center">
                <nav className="mb-4 flex gap-6">
                    <Link href="/" className="link link-hover">
                        App
                    </Link>
                    <Link href="/stack" className="link link-hover">
                        Tech stack
                    </Link>
                    <Link href="/credits" className="link link-hover">
                        Credits
                    </Link>
                </nav>

                <p className="text-sm">
                    This app is currently developed by a solo developer.
                    {" "}
                    <ExternalLink url="https://atarun.dev" label="Learn more about me"/>
                </p>

                <p className="text-sm">
                    It is open source. Check out the code and contribute on
                    {" "}
                    <ExternalLink url="https://github.com/NadCAtarun/brighter-fights" label="GitHub"/>
                </p>
            </div>
        </footer>
        </body>
        </html>
    );
}
