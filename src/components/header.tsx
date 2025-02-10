import {ExternalLinkIcon} from "lucide-react";

/**
 * Header functional component.
 *
 * The title has a large, bold font, and the subtitle includes a link to the
 * "Brighter Shores" website with a small external link icon for better user experience.
 */
const Header = () => {
    return <header className="flex justify-center">
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
    </header>;
};

export default Header;
