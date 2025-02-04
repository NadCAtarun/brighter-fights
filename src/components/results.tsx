const Results = ({enemy, location, meleeWeapon, rangedWeapon, shield}: {
    enemy: string;
    location: string;
    meleeWeapon: string;
    rangedWeapon: string;
    shield: string;
}) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold">Results</h2>
            <p><strong>Enemy:</strong> {enemy}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Melee Weapon:</strong> {meleeWeapon}</p>
            <p><strong>Ranged Weapon:</strong> {rangedWeapon}</p>
            <p><strong>Shield:</strong> {shield}</p>
        </div>
    );
};

export default Results;
