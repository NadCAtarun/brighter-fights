import {ExternalLinkIcon} from "lucide-react";
import {Recommendations} from "@/model/strategist";

const Results = (recs: Recommendations) => {
    if (recs.enemy) {
        return (
            <>
                <h2 className="text-2xl font-bold font-title mb-8">Recommendations</h2>
                <p className="text-xl">
                    You should grind on
                    <a
                        href={recs.enemy.url}
                        className="link link-primary mx-2 font-bold"
                        target="_blank"
                        rel="noopener noreferrer">
                        {recs.enemy.name}
                        <ExternalLinkIcon className="w-4 h-4 inline"/>
                    </a>
                </p>
                {typeof recs.meleeWeapon === 'string' && (<p className="text-xl">{recs.meleeWeapon}</p>)}
                {typeof recs.meleeWeapon === 'object' && (<p className="text-xl">
                    Melee weapon to craft:
                    <a
                        href={recs.meleeWeapon.url}
                        className="link link-primary mx-2 font-bold"
                        target="_blank"
                        rel="noopener noreferrer">
                        {recs.meleeWeapon.name}
                        <ExternalLinkIcon className="w-4 h-4 inline"/>
                    </a>
                </p>)}
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
