import {ExternalLinkIcon} from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-2 p-6 mb-28 lg:mb-0">
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
                    This app is currently developed by a solo developer.{" "}
                    <a
                        href="https://atarun.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-primary"
                    >
                        Learn more about me
                        <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
                    </a>
                </p>

                <p className="text-sm">
                    It is open source. Check out the code and contribute on{" "}
                    <a
                        href="https://github.com/NadCAtarun/brighter-fights"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link link-primary"
                    >
                        GitHub
                        <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
