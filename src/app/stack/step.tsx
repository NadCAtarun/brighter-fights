import {JSX} from "react";
import Image from "next/image";

interface TechStackStepProps {
    icon: JSX.Element;
    label: string;
    title: string;
    description: string;
    url: string;
    logo: string;
}

/**
 * Renders a single item in a tech stack step list with an icon, a label, a title, a description, and a link.
 *
 * @param {Object} props The properties passed to the component.
 * @param {ReactNode} props.icon The icon representing the tech stack item.
 * @param {string} props.label The label or name of the tech stack item.
 * @param {string} props.title The title of the tech stack item displayed in the link.
 * @param {string} props.description A brief description of the tech stack item.
 * @param {string} props.url The URL associated with the tech stack item that the title links to.
 * @param {string} props.logo The logo image URL or path for the tech stack item.
 */
export default function TechStackStep({icon, label, title, description, url, logo}: TechStackStepProps) {
    return (
        <li className="step step-primary z-1">
            <div className="flex items-center gap-4">
                <div className="text-2xl">{icon}</div>
                <div>
                    <h3 className="font-semibold text-lg text-left">
                        {label}
                        &nbsp;➡
                        <Image src={logo} alt={`${title} logo`} width={40} height={40} className="inline-block mx-2"/>
                        <a href={url} target="_blank" rel="noopener noreferrer" className="link link-primary">
                            {title}
                        </a>
                    </h3>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
        </li>
    );
}
