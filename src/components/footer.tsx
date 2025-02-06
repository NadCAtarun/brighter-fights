import {ExternalLinkIcon} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-2 p-6">
            <div className="container mx-auto flex flex-col items-center">
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
