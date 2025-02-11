import Image from "next/image";
import {Enemy} from "@/model/enemy";
import {ShieldMinus, ShieldPlus} from "lucide-react";

/**
 * EnemyProperties is a functional component that renders information about an enemy's vulnerability
 * and immunity based on the provided enemy object. If there is no enemy or the specified properties
 * are not available, it returns null.
 *
 * When vulnerability and/or immunity data are present, it displays tooltips with associated icons
 * and images indicating the enemy's weaknesses or immunities.
 *
 * @param {Enemy | null} enemy - The enemy object containing vulnerability and immunity details.
 */
const EnemyProperties = (enemy: Enemy | null) => {
    if (!enemy) return null;

    const vulnerability = enemy.vulnerability?.name || null;
    const immunity = enemy.immunity?.name || null;

    return (
        <>
            {vulnerability && (
                <div className="tooltip tooltip-secondary mx-1" data-tip={`Vulnerable to ${vulnerability}`}>
                    <ShieldMinus className="inline-block text-error"/>
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
                    <ShieldPlus className="inline-block text-success"/>
                    <Image
                        src={`/symbols/${immunity.toLowerCase()}.png`}
                        alt={`Immune to ${immunity}`}
                        className="inline-block"
                        width={20}
                        height={20}
                    />
                </div>
            )}
        </>
    );
};

export default EnemyProperties;
