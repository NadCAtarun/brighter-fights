import {LuExternalLink} from 'react-icons/lu';

/**
 * Renders an external hyperlink as a React functional component.
 * This link opens in a new tab and is styled with specific classes.
 * Additionally, it includes an external link icon displayed next to the label.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.url - The URL for the external link.
 * @param {string} props.label - The text label to be displayed for the link.
 */
const ExternalLink = (
    {url, label}: { url: string; label: string; }
) => {
    return (
        <a
            href={url}
            className="link link-primary mx-2 font-bold inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
        >
            {label}
            <LuExternalLink className="w-4 h-4 inline ml-1"/>
        </a>
    );
};

export default ExternalLink;
