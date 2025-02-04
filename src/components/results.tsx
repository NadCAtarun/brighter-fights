import {Enemy} from "@/model/enemy";
import {ExternalLinkIcon} from "lucide-react";

const Results = ({enemy, meleeWeapon, rangedWeapon, shield}: {
    enemy: Enemy | null;
    meleeWeapon: string;
    rangedWeapon: string;
    shield: string;
}) => {
    if (enemy) {
        return (
            <>
                <h2 className="text-2xl font-bold font-title mb-8">Recommendations</h2>
                <p className="text-xl">
                    You should grind on
                    <a
                        href={enemy.url}
                        className="link link-primary mx-2 font-bold"
                        target="_blank"
                        rel="noopener noreferrer">
                        {enemy.name}
                        <ExternalLinkIcon className="w-4 h-4 inline"/>
                    </a>
                </p>
            </>
        )
    } else {
        return (
            <>
                <h2 className="text-2xl font-bold font-title mb-8 text-error">Something went wrong</h2>
                <p className="text-xl">
                    We could not find a suitable enemy for you to fight.
                    Please double check your settings.
                </p>
            </>
        )
    }
};

export default Results;
