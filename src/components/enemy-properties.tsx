import Image from "next/image";
import {Enemy} from "@/model/enemy";
import {ShieldMinus, ShieldPlus} from "lucide-react";

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
