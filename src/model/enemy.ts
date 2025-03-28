import {Element, elements} from "@/model/element";

export interface Enemy {
    name: string;
    url: string;
    attackStyle: Element;
    immunity: Element | null;
    vulnerability: Element | null;
    ranged: boolean;
}

export const enemies: Enemy[] = [
    // Hopeport
    {
        name: "Sparring Guard",
        url: "https://brightershoreswiki.org/w/Sparring_Guard",
        attackStyle: elements.impact,
        immunity: null,
        vulnerability: null,
        ranged: false,
    },
    {
        name: "Deathcrow",
        url: "https://brightershoreswiki.org/w/Deathcrow",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.cryonae,
        ranged: false,
    },
    {
        name: "Thief",
        url: "https://brightershoreswiki.org/w/Thief",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.arborae,
        ranged: false,
    },
    {
        name: "Goblin Soldier",
        url: "https://brightershoreswiki.org/w/Goblin_Soldier",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.tempestae,
        ranged: false,
    },
    {
        name: "Goblin Chief",
        url: "https://brightershoreswiki.org/w/Goblin_Chief",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.tempestae,
        ranged: false,
    },
    {
        name: "Hairbeast",
        url: "https://brightershoreswiki.org/w/Hairbeast",
        attackStyle: elements.tempestae,
        immunity: elements.tempestae,
        vulnerability: elements.necromae,
        ranged: false,
    },
    {
        name: "Carnivorous Plant",
        url: "https://brightershoreswiki.org/w/Carnivorous_Plant",
        attackStyle: elements.arborae,
        immunity: elements.arborae,
        vulnerability: elements.cryonae,
        ranged: false,
    },
    {
        name: "Ghoul",
        url: "https://brightershoreswiki.org/w/Ghoul",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.arborae,
        ranged: false,
    },
    // Hopeforest
    {
        name: "Outlaw",
        url: "https://brightershoreswiki.org/w/Outlaw",
        attackStyle: elements.impact,
        immunity: null,
        vulnerability: elements.arborae,
        ranged: true,
    },
    {
        name: "Goblin",
        url: "https://brightershoreswiki.org/w/Goblin",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.tempestae,
        ranged: false,
    },
    {
        name: "Bear",
        url: "https://brightershoreswiki.org/w/Bear",
        attackStyle: elements.impact,
        immunity: null,
        vulnerability: elements.cryonae,
        ranged: false,
    },
    {
        name: "Wendigo",
        url: "https://brightershoreswiki.org/w/Wendigo",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.infernae,
        ranged: false,
    },
    {
        name: "Viper",
        url: "https://brightershoreswiki.org/w/Viper",
        attackStyle: elements.tempestae,
        immunity: elements.tempestae,
        vulnerability: elements.cryonae,
        ranged: true,
    },
    {
        name: "Spriggan",
        url: "https://brightershoreswiki.org/w/Spriggan",
        attackStyle: elements.arborae,
        immunity: elements.arborae,
        vulnerability: elements.infernae,
        ranged: false,
    },
    {
        name: "Bramblelith",
        url: "https://brightershoreswiki.org/w/Bramblelith",
        attackStyle: elements.arborae,
        immunity: elements.arborae,
        vulnerability: elements.tempestae,
        ranged: false,
    },
    {
        name: "Shade",
        url: "https://brightershoreswiki.org/w/Shade",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.arborae,
        ranged: false,
    },
    // Mine of Mantuban
    {
        name: "Minecrawler",
        url: "https://brightershoreswiki.org/w/Minecrawler",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.necromae,
        ranged: false,
    },
    {
        name: "Goblin Miner",
        url: "https://brightershoreswiki.org/w/Goblin_Miner",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.tempestae,
        ranged: false,
    },
    {
        name: "Floor Tentacle",
        url: "https://brightershoreswiki.org/w/Floor_Tentacle",
        attackStyle: elements.tempestae,
        immunity: elements.tempestae,
        vulnerability: elements.infernae,
        ranged: false,
    },
    {
        name: "Fire Toad",
        url: "https://brightershoreswiki.org/w/Fire_Toad",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.cryonae,
        ranged: true,
    },
    {
        name: "Skeleton Miner",
        url: "https://brightershoreswiki.org/w/Skeleton_Miner",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.arborae,
        ranged: false,
    },
    {
        name: "Metalith",
        url: "https://brightershoreswiki.org/w/Metalith",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.necromae,
        ranged: false,
    },
    {
        name: "Stonewurm",
        url: "https://brightershoreswiki.org/w/Stonewurm",
        attackStyle: elements.tempestae,
        immunity: elements.tempestae,
        vulnerability: elements.arborae,
        ranged: false,
    },
    {
        name: "Cockroach",
        url: "https://brightershoreswiki.org/w/Cockroach",
        attackStyle: elements.impact,
        immunity: null,
        vulnerability: elements.infernae,
        ranged: false,
    },
    {
        name: "Wraith",
        url: "https://brightershoreswiki.org/w/Wraith",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.tempestae,
        ranged: false,
    },
    {
        name: "Blob",
        url: "https://brightershoreswiki.org/w/Blob",
        attackStyle: elements.arborae,
        immunity: elements.arborae,
        vulnerability: elements.cryonae,
        ranged: true,
    },
    // Crenopolis
    {
        name: "Sabertooth Tiger",
        url: "https://brightershoreswiki.org/w/Sabertooth_Tiger",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.tempestae,
        ranged: false,
    },
    {
        name: "Street Hag",
        url: "https://brightershoreswiki.org/w/Street_Hag",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.arborae,
        ranged: true,
    },
    {
        name: "Mawchest",
        url: "https://brightershoreswiki.org/w/Mawchest",
        attackStyle: elements.tempestae,
        immunity: elements.tempestae,
        vulnerability: elements.cryonae,
        ranged: false,
    },
    {
        name: "Giant Wasp",
        url: "https://brightershoreswiki.org/w/Giant_Wasp",
        attackStyle: elements.arborae,
        immunity: elements.arborae,
        vulnerability: elements.cryonae,
        ranged: false,
    },
    {
        name: "Sewer Fiend",
        url: "https://brightershoreswiki.org/w/Sewer_Fiend",
        attackStyle: elements.impact,
        immunity: null,
        vulnerability: elements.cryonae,
        ranged: true,
    },
    {
        name: "Zombie",
        url: "https://brightershoreswiki.org/w/Zombie",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.infernae,
        ranged: false,
    },
    {
        name: "Spectral Stalker",
        url: "https://brightershoreswiki.org/w/Spectral_Stalker",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.arborae,
        ranged: true,
    },
    {
        name: "Spiky Ball",
        url: "https://brightershoreswiki.org/w/Spiky_Ball",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.tempestae,
        ranged: false,
    },
];

const enemiesByName = new Map(enemies.map(enemy => [enemy.name, enemy]));

/**
 * Retrieves an enemy object by its name from the collection of enemies.
 *
 * @param {string} name - The name of the enemy to look up.
 * @returns {Enemy|null} The enemy object if found, or null if no enemy with the given name exists in the collection.
 */
export const enemyByName = (name: string): Enemy | null =>
    enemiesByName.get(name) || null;
