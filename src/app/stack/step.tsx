import {JSX} from "react";
import Image from "next/image";
import ExternalLink from "@/components/external-link";

interface TechStackStepProps {
    icon: JSX.Element;
    label: string;
    title: string;
    description: string;
    url: string;
    logo: string;
}

/**
 * Renders a step details component with a label, image, title, link, and description.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.label - The label text to display.
 * @param {string} props.src - The source URL for the image.
 * @param {string} props.title - The title text to display.
 * @param {string} props.href - The hyperlink URL for the title.
 * @param {string} props.description - The description text to display.
 */
function StepDetails(props: { label: string, src: string, title: string, href: string, description: string }) {
    return <div>
        <h3 className="font-semibold text-lg text-left">
            {props.label}
            &nbsp;➡
            <Image src={props.src} alt={`${props.title} logo`} width={40} height={40} className="inline-block mx-2"/>
            <ExternalLink url={props.href} label={props.title}/>
        </h3>
        <p className="text-gray-500">{props.description}</p>
    </div>;
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
        <li className="step step-primary relative before:z-0">
            <div className="flex items-center gap-4">
                <div className="text-2xl">{icon}</div>
                <StepDetails label={label} src={logo} title={title} href={url} description={description}/>
            </div>
        </li>
    );
}
