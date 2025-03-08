import BackLink from "@/components/back-link";
import {creditsData} from "@/app/credits/data";
import Image from "next/image";
import ExternalLink from "@/components/external-link";

export default function Page() {
    return (
        <>
            <BackLink/>
            <div className="p-8 flex flex-col items-center">
                <div className="card w-full max-w-3xl bg-base-100 shadow-xl p-6">
                    <h1 className="text-3xl font-bold text-center mb-6">Credits & Attribution</h1>
                    {creditsData.map((section) => (
                        <div key={section.category} className="mb-6">
                            <h2 className="text-xl font-semibold mb-2">{section.category}</h2>
                            <ul className="list-disc pl-5">
                                {section.items.map((item) => (
                                    <li key={item.name} className="flex items-center space-x-3">
                                        {item.image &&
                                            <Image src={item.image} alt={item.alt} width={50} height={50}
                                                   className="rounded-full"/>}
                                        <ExternalLink url={item.link} label={item.name}/>
                                        {" "}- {item.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
