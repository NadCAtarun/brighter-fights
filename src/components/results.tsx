import {Enemy} from "@/model/enemy";

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
                <p>You should grind on <strong>{enemy.name}</strong></p>
            </>
        )
    } else {
        return (
            <>
                <h2 className="text-2xl font-bold font-title mb-8 font-error">Something went wrong</h2>
                <p>We could not find a suitable enemy for you to fight. Please double check your settings.</p>
            </>
        )
    }
};

export default Results;
