import {Element, elements} from "@/model/element";

export interface Enemy {
    name: string;
    url: string;
    attackStyle: Element;
    immunity: Element | null;
    vulnerability: Element | null;
}

export const enemies: Enemy[] = [
    // Hopeport
    {
        name: "Sparring Guard",
        url: "https://brightershoreswiki.org/w/Sparring_Guard",
        attackStyle: elements.impact,
        immunity: null,
        vulnerability: null,
    },
    {
        name: "Deathcrow",
        url: "https://brightershoreswiki.org/w/Deathcrow",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.cryonae,
    },
    {
        name: "Thief",
        url: "https://brightershoreswiki.org/w/Thief",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.arborae,
    },
    {
        name: "Goblin Soldier",
        url: "https://brightershoreswiki.org/w/Goblin_Soldier",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.tempestae,
    },
    {
        name: "Goblin Chief",
        url: "https://brightershoreswiki.org/w/Goblin_Chief",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.tempestae,
    },
    {
        name: "Hairbeast",
        url: "https://brightershoreswiki.org/w/Hairbeast",
        attackStyle: elements.tempestae,
        immunity: elements.tempestae,
        vulnerability: elements.necromae,
    },
    {
        name: "Carnivorous Plant",
        url: "https://brightershoreswiki.org/w/Carnivorous_Plant",
        attackStyle: elements.arborae,
        immunity: elements.arborae,
        vulnerability: elements.cryonae,
    },
    {
        name: "Ghoul",
        url: "https://brightershoreswiki.org/w/Ghoul",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.arborae,
    },
    // Hopeforest
    {
        name: "Outlaw",
        url: "https://brightershoreswiki.org/w/Outlaw",
        attackStyle: elements.impact,
        immunity: null,
        vulnerability: elements.arborae,
    },
    {
        name: "Goblin",
        url: "https://brightershoreswiki.org/w/Goblin",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.tempestae,
    },
    {
        name: "Bear",
        url: "https://brightershoreswiki.org/w/Bear",
        attackStyle: elements.impact,
        immunity: null,
        vulnerability: elements.cryonae,
    },
    {
        name: "Wendigo",
        url: "https://brightershoreswiki.org/w/Wendigo",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.infernae,
    },
    {
        name: "Viper",
        url: "https://brightershoreswiki.org/w/Viper",
        attackStyle: elements.tempestae,
        immunity: elements.tempestae,
        vulnerability: elements.cryonae,
    },
    {
        name: "Spriggan",
        url: "https://brightershoreswiki.org/w/Spriggan",
        attackStyle: elements.arborae,
        immunity: elements.arborae,
        vulnerability: elements.infernae,
    },
    {
        name: "Bramblelith",
        url: "https://brightershoreswiki.org/w/Bramblelith",
        attackStyle: elements.arborae,
        immunity: elements.arborae,
        vulnerability: elements.tempestae,
    },
    {
        name: "Shade",
        url: "https://brightershoreswiki.org/w/Shade",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.arborae,
    },
    // Mine of Mantuban
    {
        name: "Minecrawler",
        url: "https://brightershoreswiki.org/w/Minecrawler",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.necromae,
    },
    {
        name: "Goblin Miner",
        url: "https://brightershoreswiki.org/w/Goblin_Miner",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.tempestae,
    },
    {
        name: "Floor Tentacle",
        url: "https://brightershoreswiki.org/w/Floor_Tentacle",
        attackStyle: elements.tempestae,
        immunity: elements.tempestae,
        vulnerability: elements.infernae,
    },
    {
        name: "Fire Toad",
        url: "https://brightershoreswiki.org/w/Fire_Toad",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.cryonae,
    },
    {
        name: "Skeleton Miner",
        url: "https://brightershoreswiki.org/w/Skeleton_Miner",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.arborae,
    },
    {
        name: "Metalith",
        url: "https://brightershoreswiki.org/w/Metalith",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.necromae,
    },
    {
        name: "Stonewurm",
        url: "https://brightershoreswiki.org/w/Stonewurm",
        attackStyle: elements.tempestae,
        immunity: elements.tempestae,
        vulnerability: elements.arborae,
    },
    {
        name: "Cockroach",
        url: "https://brightershoreswiki.org/w/Cockroach",
        attackStyle: elements.impact,
        immunity: null,
        vulnerability: elements.infernae,
    },
    {
        name: "Wraith",
        url: "https://brightershoreswiki.org/w/Wraith",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.tempestae,
    },
    {
        name: "Blob",
        url: "https://brightershoreswiki.org/w/Blob",
        attackStyle: elements.arborae,
        immunity: elements.arborae,
        vulnerability: elements.cryonae,
    },
    // Crenopolis
    {
        name: "Sabertooth Tiger",
        url: "https://brightershoreswiki.org/w/Sabertooth_Tiger",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.tempestae,
    },
    {
        name: "Street Hag",
        url: "https://brightershoreswiki.org/w/Street_Hag",
        attackStyle: elements.infernae,
        immunity: elements.infernae,
        vulnerability: elements.arborae,
    },
    {
        name: "Mawchest",
        url: "https://brightershoreswiki.org/w/Mawchest",
        attackStyle: elements.tempestae,
        immunity: elements.tempestae,
        vulnerability: elements.cryonae,
    },
    {
        name: "Giant Wasp",
        url: "https://brightershoreswiki.org/w/Giant_Wasp",
        attackStyle: elements.arborae,
        immunity: elements.arborae,
        vulnerability: elements.cryonae,
    },
    {
        name: "Sewer Fiend",
        url: "https://brightershoreswiki.org/w/Sewer_Fiend",
        attackStyle: elements.impact,
        immunity: null,
        vulnerability: elements.cryonae,
    },
    {
        name: "Zombie",
        url: "https://brightershoreswiki.org/w/Zombie",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.infernae,
    },
    {
        name: "Spectral Stalker",
        url: "https://brightershoreswiki.org/w/Spectral_Stalker",
        attackStyle: elements.necromae,
        immunity: elements.necromae,
        vulnerability: elements.arborae,
    },
    {
        name: "Spiky Ball",
        url: "https://brightershoreswiki.org/w/Spiky_Ball",
        attackStyle: elements.cryonae,
        immunity: elements.cryonae,
        vulnerability: elements.tempestae,
    },
];
