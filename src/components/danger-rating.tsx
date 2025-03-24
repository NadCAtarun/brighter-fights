import React from 'react';
import {Enemy} from "@/model/enemy";
import {Faction} from "@/model/faction";
import {AiOutlineWarning} from "react-icons/ai";

/**
 * A functional component that calculates and displays the danger rating associated with an enemy
 * based on provided criteria such as vulnerabilities and attack styles. The danger rating assesses
 * how dangerous an enemy encounter is for a given faction. It includes a label and visual indicators
 * with tooltips.
 *
 * @param {Enemy} enemy - The enemy object containing properties like `attackStyle`, `ranged`, and `vulnerability`.
 * @param {Faction} faction - The faction object containing properties like `vulnerability` and `rangedOnly`.
 */
const DangerRating = (enemy: Enemy, faction: Faction) => {
    const criteria = [
        {
            id: "vulnerable",
            condition: faction.vulnerability === enemy.attackStyle,
            tooltip: "You are vulnerable to the enemy's attacks",
        },
        {
            id: "ranged-only",
            condition: faction.rangedOnly === enemy.vulnerability,
            tooltip: "You cannot exploit the enemy's vulnerability in melee",
        },
        {
            id: "ranged",
            condition: enemy.ranged,
            tooltip: "The enemy attacks from range, you won't get a head start",
        },
    ];

    const activeCriteria = criteria.filter(criterion => criterion.condition);
    const ratingValue = activeCriteria.length;

    let ratingLabel: string;
    let color: string;
    switch (ratingValue) {
        case 0:
            ratingLabel = "Okay";
            color = "text-success";
            break;
        case 1:
            ratingLabel = "Tough";
            color = "text-info";
            break;
        case 2:
            ratingLabel = "Dangerous";
            color = "text-warning";
            break;
        case 3:
            ratingLabel = "RUN!";
            color = "text-error";
            break;
        default:
            ratingLabel = "Unknown";
            color = "text-secondary";
    }

    return (
        <span className="danger-rating" style={{display: 'inline-flex', alignItems: 'center'}}>
            <span>Danger rating:
                <strong className={`${color} mx-2`}>{ratingLabel}</strong>
            </span>
            {activeCriteria.map((criterion) =>
                (
                    <span key={criterion.id} className="tooltip tooltip-warning" data-tip={criterion.tooltip}>
                        <AiOutlineWarning className={`${color} text-xl`}/>
                    </span>
                )
            )}
        </span>
    );
};

export default DangerRating;
