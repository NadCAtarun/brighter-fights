import Link from "next/link";
import ExternalLink from "@/components/external-link";

const Footer = () => (
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
);

export default Footer;
