import {LuExternalLink} from 'react-icons/lu';
import {FC} from "react";

interface ExternalLinkProps {
    url: string;
    label: string;
}

const ExternalLink: FC<ExternalLinkProps> = ({url, label}) => {
    return (
        <a
            href={url}
            className="link link-primary mx-2 font-bold"
            target="_blank"
            rel="noopener noreferrer"
        >
            {label}
            <LuExternalLink className="w-4 h-4 inline ml-1"/>
        </a>
    );
};

export default ExternalLink;
