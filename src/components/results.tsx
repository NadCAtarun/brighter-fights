import {ExternalLinkIcon} from "lucide-react";
import {Recommendations} from "@/model/strategist";
import EquipmentProperties from "@/components/equipment-properties";
import {useCallback} from "react";
import CraftingMaterials from "@/components/crafting-materials";
import EnemyProperties from "@/components/enemy-properties";

/**
 * A functional React component that renders recommendations based on the user settings,
 * including enemies and gear suggestions, or an error message if no recommendations are available.
 *
 * @param {Object} props - The input properties for the component.
 * @param {Recommendations} props.recs - The recommendations data object, which provides details about recommended
 *                                       target enemy, melee weapon, ranged weapon, shield, and next target level.
 * @param {Function} props.onLevelClick - A callback function invoked when the target level is clicked.
 */
const Results =
    ({recs, onLevelClick}: { recs: Recommendations, onLevelClick: (value: number) => void }) => {
        const handleLevelClick = useCallback(() => {
            onLevelClick(recs.nextLevel);
        }, [onLevelClick, recs.nextLevel])

        if (recs.enemy) {
            return (
                <>
                    <h2 className="text-2xl font-bold font-title mb-8">Recommendations</h2>

                    <div className="text-xl">
                        You should grind on
                        <a
                            href={recs.enemy.url}
                            className="link link-primary mx-2 font-bold"
                            target="_blank"
                            rel="noopener noreferrer">
                            {recs.enemy.name}
                            <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
                        </a>
                        <EnemyProperties {...recs.enemy}/>
                        {recs.nextLevel > 0 ? (
                            <>
                                <br/>
                                Until you reach level{" "}
                                <button className="link link-primary link-hover font-bold"
                                        onClick={handleLevelClick}>
                                    {recs.nextLevel}
                                </button>
                            </>
                        ) : (
                            ''
                        )}
                    </div>

                    {typeof recs.meleeWeapon === 'string' && (<p className="text-xl">{recs.meleeWeapon}</p>)}
                    {typeof recs.meleeWeapon === 'object' && (<div className="text-xl">
                        Melee weapon to craft:
                        <a
                            href={recs.meleeWeapon.url}
                            className="link link-primary mx-2 font-bold"
                            target="_blank"
                            rel="noopener noreferrer">
                            {recs.meleeWeapon.name}
                            <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
                        </a>
                        <EquipmentProperties categoryName={recs.meleeWeapon.category}/>
                        <CraftingMaterials {...recs.meleeWeapon}/>
                    </div>)}

                    {typeof recs.rangedWeapon === 'string' && (<p className="text-xl">{recs.rangedWeapon}</p>)}
                    {typeof recs.rangedWeapon === 'object' && (<div className="text-xl">
                        Ranged weapon to craft:
                        <a
                            href={recs.rangedWeapon.url}
                            className="link link-primary mx-2 font-bold"
                            target="_blank"
                            rel="noopener noreferrer">
                            {recs.rangedWeapon.name}
                            <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
                        </a>
                        <EquipmentProperties categoryName={recs.rangedWeapon.category}/>
                        <CraftingMaterials {...recs.rangedWeapon}/>
                    </div>)}

                    {typeof recs.shield === 'string' && (<p className="text-xl">{recs.shield}</p>)}
                    {typeof recs.shield === 'object' && (<div className="text-xl">
                        Shield to craft:
                        <a
                            href={recs.shield.url}
                            className="link link-primary mx-2 font-bold"
                            target="_blank"
                            rel="noopener noreferrer">
                            {recs.shield.name}
                            <ExternalLinkIcon className="w-4 h-4 inline ml-1"/>
                        </a>
                        <CraftingMaterials {...recs.shield}/>
                    </div>)}
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
