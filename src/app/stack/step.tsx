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
                        <a href={url} target="_blank" className="link link-primary">
                            {title}
                        </a>
                    </h3>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>
        </li>
    );
}
