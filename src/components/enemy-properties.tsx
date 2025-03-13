import {Enemy} from "@/model/enemy";
import {LuShieldMinus, LuShieldPlus} from "react-icons/lu";
import Image from "next/image";
import {TbBow} from "react-icons/tb";
import {PiSword} from "react-icons/pi";

const EnemyProperties = (enemy: Enemy) => {
    const attackStyle = enemy.attackStyle.name;
    const vulnerability = enemy.vulnerability?.name || null;
    const immunity = enemy.immunity?.name || null;
    const ranged = enemy.ranged;

    return (
        <>
            <div className="inline">
                Properties:
            </div>

            {ranged ? (
                <div className="tooltip tooltip-secondary mx-1" data-tip="Has ranged attacks">
                    <TbBow className="inline-block text-warning"/>
                </div>
            ) : (
                <div className="tooltip tooltip-secondary mx-1" data-tip="Only melee attacks">
                    <PiSword className="inline-block text-success"/>
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
                    <LuShieldMinus className="inline-block text-error"/>
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
                    <LuShieldPlus className="inline-block text-success"/>
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
