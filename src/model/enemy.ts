import {Element, elements} from "@/model/element";

export interface Enemy {
    name: string;
    url: string;
    attackStyle: Element;
    immunity: Element | null;
    vulnerability: Element | null;
}

export const enemies: Enemy[] = [
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
];
