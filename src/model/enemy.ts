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
];
