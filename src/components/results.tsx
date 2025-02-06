import {ExternalLinkIcon} from "lucide-react";
import {Recommendations} from "@/model/strategist";
import EquipmentProperties from "@/components/equipment-properties";

const Results = ({recs, onLevelClick}: { recs: Recommendations, onLevelClick: (value: number) => void }) => {
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
                        <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
                    </a>
                    {recs.nextLevel > 0 ? (
                        <>
                            until you reach level{" "}
                            <a className="link link-primary link-hover font-bold"
                               onClick={() => onLevelClick(recs.nextLevel)}>
                                {recs.nextLevel}
                            </a>
                        </>
                    ) : (
                        ''
                    )}
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
                        <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
                    </a>
                    <EquipmentProperties category={recs.meleeWeapon.category}/>
                </p>)}

                {typeof recs.rangedWeapon === 'string' && (<p className="text-xl">{recs.rangedWeapon}</p>)}
                {typeof recs.rangedWeapon === 'object' && (<p className="text-xl">
                    Ranged weapon to craft:
                    <a
                        href={recs.rangedWeapon.url}
                        className="link link-primary mx-2 font-bold"
                        target="_blank"
                        rel="noopener noreferrer">
                        {recs.rangedWeapon.name}
                        <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
                    </a>
                    <EquipmentProperties category={recs.rangedWeapon.category}/>
                </p>)}

                {typeof recs.shield === 'string' && (<p className="text-xl">{recs.shield}</p>)}
                {typeof recs.shield === 'object' && (<p className="text-xl">
                    Shield to craft:
                    <a
                        href={recs.shield.url}
                        className="link link-primary mx-2 font-bold"
                        target="_blank"
                        rel="noopener noreferrer">
                        {recs.shield.name}
                        <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
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
