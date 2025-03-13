import {Enemy} from "@/model/enemy";
import {LuShieldMinus, LuShieldPlus} from "react-icons/lu";
import Image from "next/image";
import {TbBow} from "react-icons/tb";
import {PiSword} from "react-icons/pi";
import {Faction} from "@/model/faction";
import {AiOutlineWarning} from "react-icons/ai";

/**
 * A React functional component that renders the properties of an enemy entity,
 * including attack style, vulnerabilities, immunities, and whether it is ranged or dangerous.
 *
 * @param {Enemy} enemy - The enemy object containing its attributes and attack properties.
 * @param {Faction|null} faction - The faction object, which may define vulnerabilities relevant to the enemy.
 */
const EnemyProperties = (enemy: Enemy, faction: Faction | null) => {
    const attackStyle = enemy.attackStyle.name;
    const vulnerability = enemy.vulnerability?.name || null;
    const immunity = enemy.immunity?.name || null;
    const ranged = enemy.ranged;
    const dangerous = enemy.attackStyle === faction?.vulnerability;

    return (
        <div className="w-full flex justify-center">
            <div className="inline">
                Properties:
            </div>

            {ranged ? (
                <div className="tooltip tooltip-secondary mx-1" data-tip="Has ranged attacks">
                    <TbBow className="inline-block text-warning text-xl"/>
                </div>
            ) : (
                <div className="tooltip tooltip-secondary mx-1" data-tip="Only melee attacks">
                    <PiSword className="inline-block text-success text-xl"/>
                </div>
            )}

            <div className="tooltip tooltip-secondary mx-1" data-tip={`Attacks with ${attackStyle}`}>
                <Image
                    src={`/symbols/${attackStyle.toLowerCase()}.png`}
                    alt={`Attacks with ${attackStyle}`}
                    className="inline-block"
                    width={20}
                    height={20}
                />
            </div>

            {vulnerability && (
                <div className="tooltip tooltip-secondary mx-1" data-tip={`Vulnerable to ${vulnerability}`}>
                    <LuShieldMinus className="inline-block text-error text-xl"/>
                    <Image
                        src={`/symbols/${vulnerability.toLowerCase()}.png`}
                        alt={`Vulnerable to ${vulnerability}`}
                        className="inline-block"
                        width={20}
                        height={20}
                    />
                </div>
            )}

            {immunity && (
                <div className="tooltip tooltip-secondary mx-1" data-tip={`Immune to ${immunity}`}>
                    <LuShieldPlus className="inline-block text-success text-xl"/>
                    <Image
                        src={`/symbols/${immunity.toLowerCase()}.png`}
                        alt={`Immune to ${immunity}`}
                        className="inline-block"
                        width={20}
                        height={20}
                    />
                </div>
            )}

            {dangerous && (
                <div className="tooltip tooltip-secondary mx-1" data-tip="You are vulnerable to this monster's attacks">
                    <AiOutlineWarning className="inline-block text-warning text-xl"/>
                </div>
            )}
        </div>
    );
};

export default EnemyProperties;
