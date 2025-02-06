import {Element, elements} from "@/model/element";

export interface EquipmentCategory {
    name: string;
    hands: 1 | 2;
    type: 'melee' | 'ranged';
    speedTier: 1 | 2 | 3;
    element: Element
}

export const cryoknightEquipmentCategories: EquipmentCategory[] = [
    {
        name: 'Rapier',
        hands: 1,
        type: 'melee',
        speedTier: 1,
        element: elements.cryonae,
    },
    {
        name: 'Flanged Mace',
        hands: 1,
        type: 'melee',
        speedTier: 2,
        element: elements.tempestae,
    },
    {
        name: 'Shortsword',
        hands: 1,
        type: 'melee',
        speedTier: 3,
        element: elements.infernae,
    },
    {
        name: 'Longsword',
        hands: 2,
        type: 'melee',
        speedTier: 1,
        element: elements.impact,
    },
    {
        name: 'Broadsword',
        hands: 2,
        type: 'melee',
        speedTier: 2,
        element: elements.cryonae,
    },
    {
        name: 'Battleaxe',
        hands: 2,
        type: 'melee',
        speedTier: 3,
        element: elements.necromae,
    },
    {
        name: 'Throwing Rings',
        hands: 1,
        type: 'ranged',
        speedTier: 1,
        element: elements.cryonae,
    },
    {
        name: 'Throwing Twinblades',
        hands: 1,
        type: 'ranged',
        speedTier: 2,
        element: elements.impact,
    },
    {
        name: 'Metal Javelins',
        hands: 1,
        type: 'ranged',
        speedTier: 3,
        element: elements.necromae,
    },
    {
        name: ' Metal Bow',
        hands: 2,
        type: 'ranged',
        speedTier: 1,
        element: elements.arborae,
    },
    {
        name: 'Throwing Knives',
        hands: 2,
        type: 'ranged',
        speedTier: 2,
        element: elements.infernae,
    },
    {
        name: 'Throwing Axes',
        hands: 2,
        type: 'ranged',
        speedTier: 3,
        element: elements.tempestae,
    },
];

export const guardianEquipmentCategories: EquipmentCategory[] = [
    {
        name: 'Truncheon',
        hands: 1,
        type: 'melee',
        speedTier: 1,
        element: elements.arborae,
    },
    {
        name: 'Cudgel',
        hands: 1,
        type: 'melee',
        speedTier: 2,
        element: elements.impact,
    },
    {
        name: 'Club',
        hands: 1,
        type: 'melee',
        speedTier: 3,
        element: elements.necromae,
    },
    {
        name: 'Quarterstaff',
        hands: 2,
        type: 'melee',
        speedTier: 1,
        element: elements.arborae,
    },
    {
        name: 'Spear',
        hands: 2,
        type: 'melee',
        speedTier: 2,
        element: elements.cryonae,
    },
    {
        name: 'Poleaxe',
        hands: 2,
        type: 'melee',
        speedTier: 3,
        element: elements.infernae,
    },
    {
        name: 'Light Crossbow',
        hands: 1,
        type: 'ranged',
        speedTier: 1,
        element: elements.cryonae,
    },
    {
        name: 'Javelins',
        hands: 1,
        type: 'ranged',
        speedTier: 2,
        element: elements.impact,
    },
    {
        name: 'Blowpipe',
        hands: 1,
        type: 'ranged',
        speedTier: 3,
        element: elements.tempestae,
    },
    {
        name: 'Heavy Crossbow',
        hands: 2,
        type: 'ranged',
        speedTier: 1,
        element: elements.necromae,
    },
    {
        name: 'Recurve Bow',
        hands: 2,
        type: 'ranged',
        speedTier: 2,
        element: elements.infernae,
    },
    {
        name: 'Longbow',
        hands: 2,
        type: 'ranged',
        speedTier: 3,
        element: elements.arborae,
    },
];

export const hammermageEquipmentCategories: EquipmentCategory[] = [
    {
        name: 'Hammerfist',
        hands: 1,
        type: 'melee',
        speedTier: 1,
        element: elements.impact,
    },
    {
        name: 'Stone Mace',
        hands: 1,
        type: 'melee',
        speedTier: 2,
        element: elements.arborae,
    },
    {
        name: 'War Hammer',
        hands: 1,
        type: 'melee',
        speedTier: 3,
        element: elements.tempestae,
    },
    {
        name: 'Great Stone Mace',
        hands: 2,
        type: 'melee',
        speedTier: 1,
        element: elements.necromae,
    },
    {
        name: 'Great Hammer',
        hands: 2,
        type: 'melee',
        speedTier: 2,
        element: elements.tempestae,
    },
    {
        name: 'Double Headed Hammer',
        hands: 2,
        type: 'melee',
        speedTier: 3,
        element: elements.infernae,
    },
    {
        name: 'Stone Discs',
        hands: 1,
        type: 'ranged',
        speedTier: 1,
        element: elements.cryonae,
    },
    {
        name: 'Bolas',
        hands: 1,
        type: 'ranged',
        speedTier: 2,
        element: elements.impact,
    },
    {
        name: 'Throwing Stones',
        hands: 1,
        type: 'ranged',
        speedTier: 3,
        element: elements.necromae,
    },
    {
        name: 'Throwing Clubs',
        hands: 2,
        type: 'ranged',
        speedTier: 1,
        element: elements.infernae,
    },
    {
        name: 'Throwing Hammers',
        hands: 2,
        type: 'ranged',
        speedTier: 2,
        element: elements.tempestae,
    },
    {
        name: 'Sling',
        hands: 2,
        type: 'ranged',
        speedTier: 3,
        element: elements.arborae,
    }
];

const categoriesByName = new Map([...cryoknightEquipmentCategories, ...guardianEquipmentCategories, ...hammermageEquipmentCategories]
    .map(category => [category.name, category]));

export function categoryByName(category: string): EquipmentCategory | null {
    return categoriesByName.get(category) || null;
}

export interface Equipment {
    name: string;
    category: string;
    craftingLevel: number;
    maxLevel: number;
    url: string;
}

export const cryoknightEquipment: Equipment[] = [
    {
        "name": "Rapier (basic)",
        "category": "Rapier",
        "craftingLevel": 0,
        "maxLevel": 36,
        "url": "https://brightershoreswiki.org/w/Rapier_(basic)"
    },
    {
        "name": "Throwing Twinblades (basic)",
        "category": "Throwing Twinblades",
        "craftingLevel": 2,
        "maxLevel": 40,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(basic)"
    },
    {
        "name": "Metal Kite Shield (basic)",
        "category": "Metal Kite Shield",
        "craftingLevel": 4,
        "maxLevel": 44,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(basic)"
    },
    {
        "name": "Flanged Mace (basic)",
        "category": "Flanged Mace",
        "craftingLevel": 6,
        "maxLevel": 46,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(basic)"
    },
    {
        "name": "Throwing Rings (basic)",
        "category": "Throwing Rings",
        "craftingLevel": 8,
        "maxLevel": 51,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(basic)"
    },
    {
        "name": "Shortsword (basic)",
        "category": "Shortsword",
        "craftingLevel": 10,
        "maxLevel": 53,
        "url": "https://brightershoreswiki.org/w/Shortsword_(basic)"
    },
    {
        "name": "Metal Javelins (basic)",
        "category": "Metal Javelins",
        "craftingLevel": 12,
        "maxLevel": 57,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(basic)"
    },
    {
        "name": "Metal Heater Shield (basic)",
        "category": "Metal Heater Shield",
        "craftingLevel": 14,
        "maxLevel": 61,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(basic)"
    },
    {
        "name": "Longsword (basic)",
        "category": "Longsword",
        "craftingLevel": 16,
        "maxLevel": 63,
        "url": "https://brightershoreswiki.org/w/Longsword_(basic)"
    },
    {
        "name": "Throwing Knives (basic)",
        "category": "Throwing Knives",
        "craftingLevel": 18,
        "maxLevel": 68,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(basic)"
    },
    {
        "name": "Broadsword (basic)",
        "category": "Broadsword",
        "craftingLevel": 22,
        "maxLevel": 70,
        "url": "https://brightershoreswiki.org/w/Broadsword_(basic)"
    },
    {
        "name": "Metal Buckler (basic)",
        "category": "Metal Buckler",
        "craftingLevel": 24,
        "maxLevel": 74,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(basic)"
    },
    {
        "name": "Throwing Axes (basic)",
        "category": "Throwing Axes",
        "craftingLevel": 28,
        "maxLevel": 79,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(basic)"
    },
    {
        "name": "Battleaxe (basic)",
        "category": "Battleaxe",
        "craftingLevel": 30,
        "maxLevel": 81,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(basic)"
    },
    {
        "name": "Metal Bow (basic)",
        "category": "Metal Bow",
        "craftingLevel": 34,
        "maxLevel": 85,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(basic)"
    },
    {
        "name": "Rapier (moderate)",
        "category": "Rapier",
        "craftingLevel": 37,
        "maxLevel": 87,
        "url": "https://brightershoreswiki.org/w/Rapier_(moderate)"
    },
    {
        "name": "Throwing Twinblades (moderate)",
        "category": "Throwing Twinblades",
        "craftingLevel": 41,
        "maxLevel": 91,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(moderate)"
    },
    {
        "name": "Metal Kite Shield (moderate)",
        "category": "Metal Kite Shield",
        "craftingLevel": 45,
        "maxLevel": 96,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(moderate)"
    },
    {
        "name": "Flanged Mace (moderate)",
        "category": "Flanged Mace",
        "craftingLevel": 47,
        "maxLevel": 98,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(moderate)"
    },
    {
        "name": "Throwing Rings (moderate)",
        "category": "Throwing Rings",
        "craftingLevel": 52,
        "maxLevel": 102,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(moderate)"
    },
    {
        "name": "Shortsword (moderate)",
        "category": "Shortsword",
        "craftingLevel": 54,
        "maxLevel": 104,
        "url": "https://brightershoreswiki.org/w/Shortsword_(moderate)"
    },
    {
        "name": "Metal Javelins (moderate)",
        "category": "Metal Javelins",
        "craftingLevel": 58,
        "maxLevel": 109,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(moderate)"
    },
    {
        "name": "Metal Heater Shield (moderate)",
        "category": "Metal Heater Shield",
        "craftingLevel": 62,
        "maxLevel": 113,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(moderate)"
    },
    {
        "name": "Longsword (moderate)",
        "category": "Longsword",
        "craftingLevel": 64,
        "maxLevel": 115,
        "url": "https://brightershoreswiki.org/w/Longsword_(moderate)"
    },
    {
        "name": "Throwing Knives (moderate)",
        "category": "Throwing Knives",
        "craftingLevel": 69,
        "maxLevel": 119,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(moderate)"
    },
    {
        "name": "Broadsword (moderate)",
        "category": "Broadsword",
        "craftingLevel": 71,
        "maxLevel": 124,
        "url": "https://brightershoreswiki.org/w/Broadsword_(moderate)"
    },
    {
        "name": "Metal Buckler (moderate)",
        "category": "Metal Buckler",
        "craftingLevel": 75,
        "maxLevel": 126,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(moderate)"
    },
    {
        "name": "Throwing Axes (moderate)",
        "category": "Throwing Axes",
        "craftingLevel": 80,
        "maxLevel": 130,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(moderate)"
    },
    {
        "name": "Battleaxe (moderate)",
        "category": "Battleaxe",
        "craftingLevel": 82,
        "maxLevel": 132,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(moderate)"
    },
    {
        "name": "Metal Bow (moderate)",
        "category": "Metal Bow",
        "craftingLevel": 86,
        "maxLevel": 136,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(moderate)"
    },
    {
        "name": "Rapier (fine)",
        "category": "Rapier",
        "craftingLevel": 88,
        "maxLevel": 141,
        "url": "https://brightershoreswiki.org/w/Rapier_(fine)"
    },
    {
        "name": "Throwing Twinblades (fine)",
        "category": "Throwing Twinblades",
        "craftingLevel": 92,
        "maxLevel": 143,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(fine)"
    },
    {
        "name": "Metal Kite Shield (fine)",
        "category": "Metal Kite Shield",
        "craftingLevel": 97,
        "maxLevel": 147,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(fine)"
    },
    {
        "name": "Flanged Mace (fine)",
        "category": "Flanged Mace",
        "craftingLevel": 99,
        "maxLevel": 149,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(fine)"
    },
    {
        "name": "Throwing Rings (fine)",
        "category": "Throwing Rings",
        "craftingLevel": 103,
        "maxLevel": 153,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(fine)"
    },
    {
        "name": "Shortsword (fine)",
        "category": "Shortsword",
        "craftingLevel": 105,
        "maxLevel": 158,
        "url": "https://brightershoreswiki.org/w/Shortsword_(fine)"
    },
    {
        "name": "Metal Javelins (fine)",
        "category": "Metal Javelins",
        "craftingLevel": 110,
        "maxLevel": 160,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(fine)"
    },
    {
        "name": "Metal Heater Shield (fine)",
        "category": "Metal Heater Shield",
        "craftingLevel": 114,
        "maxLevel": 164,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(fine)"
    },
    {
        "name": "Longsword (fine)",
        "category": "Longsword",
        "craftingLevel": 116,
        "maxLevel": 166,
        "url": "https://brightershoreswiki.org/w/Longsword_(fine)"
    },
    {
        "name": "Throwing Knives (fine)",
        "category": "Throwing Knives",
        "craftingLevel": 120,
        "maxLevel": 171,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(fine)"
    },
    {
        "name": "Broadsword (fine)",
        "category": "Broadsword",
        "craftingLevel": 125,
        "maxLevel": 175,
        "url": "https://brightershoreswiki.org/w/Broadsword_(fine)"
    },
    {
        "name": "Metal Buckler (fine)",
        "category": "Metal Buckler",
        "craftingLevel": 127,
        "maxLevel": 177,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(fine)"
    },
    {
        "name": "Throwing Axes (fine)",
        "category": "Throwing Axes",
        "craftingLevel": 131,
        "maxLevel": 181,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(fine)"
    },
    {
        "name": "Battleaxe (fine)",
        "category": "Battleaxe",
        "craftingLevel": 133,
        "maxLevel": 183,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(fine)"
    },
    {
        "name": "Metal Bow (fine)",
        "category": "Metal Bow",
        "craftingLevel": 137,
        "maxLevel": 188,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(fine)"
    },
    {
        "name": "Rapier (strong)",
        "category": "Rapier",
        "craftingLevel": 142,
        "maxLevel": 192,
        "url": "https://brightershoreswiki.org/w/Rapier_(strong)"
    },
    {
        "name": "Throwing Twinblades (strong)",
        "category": "Throwing Twinblades",
        "craftingLevel": 144,
        "maxLevel": 194,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(strong)"
    },
    {
        "name": "Metal Kite Shield (strong)",
        "category": "Metal Kite Shield",
        "craftingLevel": 148,
        "maxLevel": 199,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(strong)"
    },
    {
        "name": "Flanged Mace (strong)",
        "category": "Flanged Mace",
        "craftingLevel": 150,
        "maxLevel": 212,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(strong)"
    },
    {
        "name": "Throwing Rings (strong)",
        "category": "Throwing Rings",
        "craftingLevel": 154,
        "maxLevel": 219,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(strong)"
    },
    {
        "name": "Shortsword (strong)",
        "category": "Shortsword",
        "craftingLevel": 159,
        "maxLevel": 232,
        "url": "https://brightershoreswiki.org/w/Shortsword_(strong)"
    },
    {
        "name": "Metal Javelins (strong)",
        "category": "Metal Javelins",
        "craftingLevel": 161,
        "maxLevel": 239,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(strong)"
    },
    {
        "name": "Metal Heater Shield (strong)",
        "category": "Metal Heater Shield",
        "craftingLevel": 165,
        "maxLevel": 252,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(strong)"
    },
    {
        "name": "Longsword (strong)",
        "category": "Longsword",
        "craftingLevel": 167,
        "maxLevel": 266,
        "url": "https://brightershoreswiki.org/w/Longsword_(strong)"
    },
    {
        "name": "Throwing Knives (strong)",
        "category": "Throwing Knives",
        "craftingLevel": 172,
        "maxLevel": 273,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(strong)"
    },
    {
        "name": "Broadsword (strong)",
        "category": "Broadsword",
        "craftingLevel": 176,
        "maxLevel": 286,
        "url": "https://brightershoreswiki.org/w/Broadsword_(strong)"
    },
    {
        "name": "Metal Buckler (strong)",
        "category": "Metal Buckler",
        "craftingLevel": 178,
        "maxLevel": 293,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(strong)"
    },
    {
        "name": "Throwing Axes (strong)",
        "category": "Throwing Axes",
        "craftingLevel": 182,
        "maxLevel": 306,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(strong)"
    },
    {
        "name": "Battleaxe (strong)",
        "category": "Battleaxe",
        "craftingLevel": 184,
        "maxLevel": 320,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(strong)"
    },
    {
        "name": "Metal Bow (strong)",
        "category": "Metal Bow",
        "craftingLevel": 189,
        "maxLevel": 327,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(strong)"
    },
    {
        "name": "Rapier (superior)",
        "category": "Rapier",
        "craftingLevel": 193,
        "maxLevel": 340,
        "url": "https://brightershoreswiki.org/w/Rapier_(superior)"
    },
    {
        "name": "Throwing Twinblades (superior)",
        "category": "Throwing Twinblades",
        "craftingLevel": 195,
        "maxLevel": 347,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(superior)"
    },
    {
        "name": "Metal Kite Shield (superior)",
        "category": "Metal Kite Shield",
        "craftingLevel": 200,
        "maxLevel": 360,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(superior)"
    },
    {
        "name": "Flanged Mace (superior)",
        "category": "Flanged Mace",
        "craftingLevel": 213,
        "maxLevel": 374,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(superior)"
    },
    {
        "name": "Throwing Rings (superior)",
        "category": "Throwing Rings",
        "craftingLevel": 220,
        "maxLevel": 381,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(superior)"
    },
    {
        "name": "Shortsword (superior)",
        "category": "Shortsword",
        "craftingLevel": 233,
        "maxLevel": 394,
        "url": "https://brightershoreswiki.org/w/Shortsword_(superior)"
    },
    {
        "name": "Metal Javelins (superior)",
        "category": "Metal Javelins",
        "craftingLevel": 240,
        "maxLevel": 401,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(superior)"
    },
    {
        "name": "Metal Heater Shield (superior)",
        "category": "Metal Heater Shield",
        "craftingLevel": 253,
        "maxLevel": 414,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(superior)"
    },
    {
        "name": "Longsword (superior)",
        "category": "Longsword",
        "craftingLevel": 267,
        "maxLevel": 428,
        "url": "https://brightershoreswiki.org/w/Longsword_(superior)"
    },
    {
        "name": "Throwing Knives (superior)",
        "category": "Throwing Knives",
        "craftingLevel": 274,
        "maxLevel": 435,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(superior)"
    },
    {
        "name": "Broadsword (superior)",
        "category": "Broadsword",
        "craftingLevel": 287,
        "maxLevel": 448,
        "url": "https://brightershoreswiki.org/w/Broadsword_(superior)"
    },
    {
        "name": "Metal Buckler (superior)",
        "category": "Metal Buckler",
        "craftingLevel": 294,
        "maxLevel": 455,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(superior)"
    },
    {
        "name": "Throwing Axes (superior)",
        "category": "Throwing Axes",
        "craftingLevel": 307,
        "maxLevel": 468,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(superior)"
    },
    {
        "name": "Battleaxe (superior)",
        "category": "Battleaxe",
        "craftingLevel": 321,
        "maxLevel": 482,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(superior)"
    },
    {
        "name": "Metal Bow (superior)",
        "category": "Metal Bow",
        "craftingLevel": 328,
        "maxLevel": 489,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(superior)"
    },
    {
        "name": "Rapier (perfect)",
        "category": "Rapier",
        "craftingLevel": 341,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Rapier_(perfect)"
    },
    {
        "name": "Throwing Twinblades (perfect)",
        "category": "Throwing Twinblades",
        "craftingLevel": 348,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(perfect)"
    },
    {
        "name": "Metal Kite Shield (perfect)",
        "category": "Metal Kite Shield",
        "craftingLevel": 361,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(perfect)"
    },
    {
        "name": "Flanged Mace (perfect)",
        "category": "Flanged Mace",
        "craftingLevel": 375,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(perfect)"
    },
    {
        "name": "Throwing Rings (perfect)",
        "category": "Throwing Rings",
        "craftingLevel": 382,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(perfect)"
    },
    {
        "name": "Shortsword (perfect)",
        "category": "Shortsword",
        "craftingLevel": 395,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Shortsword_(perfect)"
    },
    {
        "name": "Metal Javelins (perfect)",
        "category": "Metal Javelins",
        "craftingLevel": 402,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(perfect)"
    },
    {
        "name": "Metal Heater Shield (perfect)",
        "category": "Metal Heater Shield",
        "craftingLevel": 415,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(perfect)"
    },
    {
        "name": "Longsword (perfect)",
        "category": "Longsword",
        "craftingLevel": 429,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Longsword_(perfect)"
    },
    {
        "name": "Throwing Knives (perfect)",
        "category": "Throwing Knives",
        "craftingLevel": 436,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(perfect)"
    },
    {
        "name": "Broadsword (perfect)",
        "category": "Broadsword",
        "craftingLevel": 449,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Broadsword_(perfect)"
    },
    {
        "name": "Metal Buckler (perfect)",
        "category": "Metal Buckler",
        "craftingLevel": 456,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(perfect)"
    },
    {
        "name": "Throwing Axes (perfect)",
        "category": "Throwing Axes",
        "craftingLevel": 469,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(perfect)"
    },
    {
        "name": "Battleaxe (perfect)",
        "category": "Battleaxe",
        "craftingLevel": 483,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(perfect)"
    },
    {
        "name": "Metal Bow (perfect)",
        "category": "Metal Bow",
        "craftingLevel": 490,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(perfect)"
    }
];

export const guardianEquipment: Equipment[] = [
    {
        "name": "Truncheon (basic)",
        "category": "Truncheon",
        "craftingLevel": 0,
        "maxLevel": 37,
        "url": "https://brightershoreswiki.org/w/Truncheon_(basic)"
    },
    {
        "name": "Blowpipe (basic)",
        "category": "Blowpipe",
        "craftingLevel": 2,
        "maxLevel": 41,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(basic)"
    },
    {
        "name": "Wooden Round Shield (basic)",
        "category": "Wooden Round Shield",
        "craftingLevel": 4,
        "maxLevel": 43,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(basic)"
    },
    {
        "name": "Cudgel (basic)",
        "category": "Cudgel",
        "craftingLevel": 6,
        "maxLevel": 47,
        "url": "https://brightershoreswiki.org/w/Cudgel_(basic)"
    },
    {
        "name": "Javelins (basic)",
        "category": "Javelins",
        "craftingLevel": 8,
        "maxLevel": 51,
        "url": "https://brightershoreswiki.org/w/Javelins_(basic)"
    },
    {
        "name": "Club (basic)",
        "category": "Club",
        "craftingLevel": 10,
        "maxLevel": 53,
        "url": "https://brightershoreswiki.org/w/Club_(basic)"
    },
    {
        "name": "Light Crossbow (basic)",
        "category": "Light Crossbow",
        "craftingLevel": 12,
        "maxLevel": 57,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(basic)"
    },
    {
        "name": "Wooden Square Shield (basic)",
        "category": "Wooden Square Shield",
        "craftingLevel": 14,
        "maxLevel": 61,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(basic)"
    },
    {
        "name": "Quarterstaff (basic)",
        "category": "Quarterstaff",
        "craftingLevel": 16,
        "maxLevel": 65,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(basic)"
    },
    {
        "name": "Recurve Bow (basic)",
        "category": "Recurve Bow",
        "craftingLevel": 18,
        "maxLevel": 67,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(basic)"
    },
    {
        "name": "Spear (basic)",
        "category": "Spear",
        "craftingLevel": 22,
        "maxLevel": 71,
        "url": "https://brightershoreswiki.org/w/Spear_(basic)"
    },
    {
        "name": "Wooden Hexagon Shield (basic)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 24,
        "maxLevel": 75,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(basic)"
    },
    {
        "name": "Longbow (basic)",
        "category": "Longbow",
        "craftingLevel": 28,
        "maxLevel": 77,
        "url": "https://brightershoreswiki.org/w/Longbow_(basic)"
    },
    {
        "name": "Poleaxe (basic)",
        "category": "Poleaxe",
        "craftingLevel": 30,
        "maxLevel": 81,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(basic)"
    },
    {
        "name": "Heavy Crossbow (basic)",
        "category": "Heavy Crossbow",
        "craftingLevel": 34,
        "maxLevel": 85,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(basic)"
    },
    {
        "name": "Truncheon (moderate)",
        "category": "Truncheon",
        "craftingLevel": 38,
        "maxLevel": 89,
        "url": "https://brightershoreswiki.org/w/Truncheon_(moderate)"
    },
    {
        "name": "Blowpipe (moderate)",
        "category": "Blowpipe",
        "craftingLevel": 42,
        "maxLevel": 91,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(moderate)"
    },
    {
        "name": "Wooden Round Shield (moderate)",
        "category": "Wooden Round Shield",
        "craftingLevel": 44,
        "maxLevel": 95,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(moderate)"
    },
    {
        "name": "Cudgel (moderate)",
        "category": "Cudgel",
        "craftingLevel": 48,
        "maxLevel": 99,
        "url": "https://brightershoreswiki.org/w/Cudgel_(moderate)"
    },
    {
        "name": "Javelins (moderate)",
        "category": "Javelins",
        "craftingLevel": 52,
        "maxLevel": 101,
        "url": "https://brightershoreswiki.org/w/Javelins_(moderate)"
    },
    {
        "name": "Club (moderate)",
        "category": "Club",
        "craftingLevel": 54,
        "maxLevel": 105,
        "url": "https://brightershoreswiki.org/w/Club_(moderate)"
    },
    {
        "name": "Light Crossbow (moderate)",
        "category": "Light Crossbow",
        "craftingLevel": 58,
        "maxLevel": 109,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(moderate)"
    },
    {
        "name": "Wooden Square Shield (moderate)",
        "category": "Wooden Square Shield",
        "craftingLevel": 62,
        "maxLevel": 111,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(moderate)"
    },
    {
        "name": "Quarterstaff (moderate)",
        "category": "Quarterstaff",
        "craftingLevel": 66,
        "maxLevel": 115,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(moderate)"
    },
    {
        "name": "Recurve Bow (moderate)",
        "category": "Recurve Bow",
        "craftingLevel": 68,
        "maxLevel": 119,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(moderate)"
    },
    {
        "name": "Spear (moderate)",
        "category": "Spear",
        "craftingLevel": 72,
        "maxLevel": 123,
        "url": "https://brightershoreswiki.org/w/Spear_(moderate)"
    },
    {
        "name": "Wooden Hexagon Shield (moderate)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 76,
        "maxLevel": 125,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(moderate)"
    },
    {
        "name": "Longbow (moderate)",
        "category": "Longbow",
        "craftingLevel": 79,
        "maxLevel": 129,
        "url": "https://brightershoreswiki.org/w/Longbow_(moderate)"
    },
    {
        "name": "Poleaxe (moderate)",
        "category": "Poleaxe",
        "craftingLevel": 82,
        "maxLevel": 133,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(moderate)"
    },
    {
        "name": "Heavy Crossbow (moderate)",
        "category": "Heavy Crossbow",
        "craftingLevel": 86,
        "maxLevel": 135,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(moderate)"
    },
    {
        "name": "Truncheon (fine)",
        "category": "Truncheon",
        "craftingLevel": 90,
        "maxLevel": 139,
        "url": "https://brightershoreswiki.org/w/Truncheon_(fine)"
    },
    {
        "name": "Blowpipe (fine)",
        "category": "Blowpipe",
        "craftingLevel": 92,
        "maxLevel": 143,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(fine)"
    },
    {
        "name": "Wooden Round Shield (fine)",
        "category": "Wooden Round Shield",
        "craftingLevel": 96,
        "maxLevel": 147,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(fine)"
    },
    {
        "name": "Cudgel (fine)",
        "category": "Cudgel",
        "craftingLevel": 100,
        "maxLevel": 149,
        "url": "https://brightershoreswiki.org/w/Cudgel_(fine)"
    },
    {
        "name": "Javelins (fine)",
        "category": "Javelins",
        "craftingLevel": 102,
        "maxLevel": 153,
        "url": "https://brightershoreswiki.org/w/Javelins_(fine)"
    },
    {
        "name": "Club (fine)",
        "category": "Club",
        "craftingLevel": 106,
        "maxLevel": 157,
        "url": "https://brightershoreswiki.org/w/Club_(fine)"
    },
    {
        "name": "Light Crossbow (fine)",
        "category": "Light Crossbow",
        "craftingLevel": 110,
        "maxLevel": 159,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(fine)"
    },
    {
        "name": "Wooden Square Shield (fine)",
        "category": "Wooden Square Shield",
        "craftingLevel": 112,
        "maxLevel": 163,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(fine)"
    },
    {
        "name": "Quarterstaff (fine)",
        "category": "Quarterstaff",
        "craftingLevel": 116,
        "maxLevel": 167,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(fine)"
    },
    {
        "name": "Recurve Bow (fine)",
        "category": "Recurve Bow",
        "craftingLevel": 120,
        "maxLevel": 171,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(fine)"
    },
    {
        "name": "Spear (fine)",
        "category": "Spear",
        "craftingLevel": 124,
        "maxLevel": 173,
        "url": "https://brightershoreswiki.org/w/Spear_(fine)"
    },
    {
        "name": "Wooden Hexagon Shield (fine)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 126,
        "maxLevel": 177,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(fine)"
    },
    {
        "name": "Longbow (fine)",
        "category": "Longbow",
        "craftingLevel": 130,
        "maxLevel": 181,
        "url": "https://brightershoreswiki.org/w/Longbow_(fine)"
    },
    {
        "name": "Poleaxe (fine)",
        "category": "Poleaxe",
        "craftingLevel": 134,
        "maxLevel": 183,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(fine)"
    },
    {
        "name": "Heavy Crossbow (fine)",
        "category": "Heavy Crossbow",
        "craftingLevel": 136,
        "maxLevel": 187,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(fine)"
    },
    {
        "name": "Truncheon (strong)",
        "category": "Truncheon",
        "craftingLevel": 140,
        "maxLevel": 191,
        "url": "https://brightershoreswiki.org/w/Truncheon_(strong)"
    },
    {
        "name": "Blowpipe (strong)",
        "category": "Blowpipe",
        "craftingLevel": 144,
        "maxLevel": 195,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(strong)"
    },
    {
        "name": "Wooden Round Shield (strong)",
        "category": "Wooden Round Shield",
        "craftingLevel": 148,
        "maxLevel": 197,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(strong)"
    },
    {
        "name": "Cudgel (strong)",
        "category": "Cudgel",
        "craftingLevel": 150,
        "maxLevel": 205,
        "url": "https://brightershoreswiki.org/w/Cudgel_(strong)"
    },
    {
        "name": "Javelins (strong)",
        "category": "Javelins",
        "craftingLevel": 154,
        "maxLevel": 218,
        "url": "https://brightershoreswiki.org/w/Javelins_(strong)"
    },
    {
        "name": "Club (strong)",
        "category": "Club",
        "craftingLevel": 158,
        "maxLevel": 224,
        "url": "https://brightershoreswiki.org/w/Club_(strong)"
    },
    {
        "name": "Light Crossbow (strong)",
        "category": "Light Crossbow",
        "craftingLevel": 160,
        "maxLevel": 237,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(strong)"
    },
    {
        "name": "Wooden Square Shield (strong)",
        "category": "Wooden Square Shield",
        "craftingLevel": 164,
        "maxLevel": 250,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(strong)"
    },
    {
        "name": "Quarterstaff (strong)",
        "category": "Quarterstaff",
        "craftingLevel": 168,
        "maxLevel": 257,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(strong)"
    },
    {
        "name": "Recurve Bow (strong)",
        "category": "Recurve Bow",
        "craftingLevel": 172,
        "maxLevel": 269,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(strong)"
    },
    {
        "name": "Spear (strong)",
        "category": "Spear",
        "craftingLevel": 174,
        "maxLevel": 282,
        "url": "https://brightershoreswiki.org/w/Spear_(strong)"
    },
    {
        "name": "Wooden Hexagon Shield (strong)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 178,
        "maxLevel": 295,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(strong)"
    },
    {
        "name": "Longbow (strong)",
        "category": "Longbow",
        "craftingLevel": 182,
        "maxLevel": 302,
        "url": "https://brightershoreswiki.org/w/Longbow_(strong)"
    },
    {
        "name": "Poleaxe (strong)",
        "category": "Poleaxe",
        "craftingLevel": 184,
        "maxLevel": 315,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(strong)"
    },
    {
        "name": "Heavy Crossbow (strong)",
        "category": "Heavy Crossbow",
        "craftingLevel": 188,
        "maxLevel": 327,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(strong)"
    },
    {
        "name": "Truncheon (superior)",
        "category": "Truncheon",
        "craftingLevel": 192,
        "maxLevel": 334,
        "url": "https://brightershoreswiki.org/w/Truncheon_(superior)"
    },
    {
        "name": "Blowpipe (superior)",
        "category": "Blowpipe",
        "craftingLevel": 196,
        "maxLevel": 347,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(superior)"
    },
    {
        "name": "Wooden Round Shield (superior)",
        "category": "Wooden Round Shield",
        "craftingLevel": 198,
        "maxLevel": 360,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(superior)"
    },
    {
        "name": "Cudgel (superior)",
        "category": "Cudgel",
        "craftingLevel": 206,
        "maxLevel": 373,
        "url": "https://brightershoreswiki.org/w/Cudgel_(superior)"
    },
    {
        "name": "Javelins (superior)",
        "category": "Javelins",
        "craftingLevel": 219,
        "maxLevel": 379,
        "url": "https://brightershoreswiki.org/w/Javelins_(superior)"
    },
    {
        "name": "Club (superior)",
        "category": "Club",
        "craftingLevel": 225,
        "maxLevel": 392,
        "url": "https://brightershoreswiki.org/w/Club_(superior)"
    },
    {
        "name": "Light Crossbow (superior)",
        "category": "Light Crossbow",
        "craftingLevel": 234,
        "maxLevel": 405,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(superior)"
    },
    {
        "name": "Wooden Square Shield (superior)",
        "category": "Wooden Square Shield",
        "craftingLevel": 251,
        "maxLevel": 411,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(superior)"
    },
    {
        "name": "Quarterstaff (superior)",
        "category": "Quarterstaff",
        "craftingLevel": 258,
        "maxLevel": 424,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(superior)"
    },
    {
        "name": "Recurve Bow (superior)",
        "category": "Recurve Bow",
        "craftingLevel": 270,
        "maxLevel": 437,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(superior)"
    },
    {
        "name": "Spear (superior)",
        "category": "Spear",
        "craftingLevel": 283,
        "maxLevel": 450,
        "url": "https://brightershoreswiki.org/w/Spear_(superior)"
    },
    {
        "name": "Wooden Hexagon Shield (superior)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 296,
        "maxLevel": 456,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(superior)"
    },
    {
        "name": "Longbow (superior)",
        "category": "Longbow",
        "craftingLevel": 303,
        "maxLevel": 469,
        "url": "https://brightershoreswiki.org/w/Longbow_(superior)"
    },
    {
        "name": "Poleaxe (superior)",
        "category": "Poleaxe",
        "craftingLevel": 316,
        "maxLevel": 482,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(superior)"
    },
    {
        "name": "Heavy Crossbow (superior)",
        "category": "Heavy Crossbow",
        "craftingLevel": 328,
        "maxLevel": 489,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(superior)"
    },
    {
        "name": "Truncheon (perfect)",
        "category": "Truncheon",
        "craftingLevel": 335,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Truncheon_(perfect)"
    },
    {
        "name": "Blowpipe (perfect)",
        "category": "Blowpipe",
        "craftingLevel": 348,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(perfect)"
    },
    {
        "name": "Wooden Round Shield (perfect)",
        "category": "Wooden Round Shield",
        "craftingLevel": 361,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(perfect)"
    },
    {
        "name": "Cudgel (perfect)",
        "category": "Cudgel",
        "craftingLevel": 374,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Cudgel_(perfect)"
    },
    {
        "name": "Javelins (perfect)",
        "category": "Javelins",
        "craftingLevel": 380,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Javelins_(perfect)"
    },
    {
        "name": "Club (perfect)",
        "category": "Club",
        "craftingLevel": 393,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Club_(perfect)"
    },
    {
        "name": "Light Crossbow (perfect)",
        "category": "Light Crossbow",
        "craftingLevel": 406,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(perfect)"
    },
    {
        "name": "Wooden Square Shield (perfect)",
        "category": "Wooden Square Shield",
        "craftingLevel": 412,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(perfect)"
    },
    {
        "name": "Quarterstaff (perfect)",
        "category": "Quarterstaff",
        "craftingLevel": 425,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(perfect)"
    },
    {
        "name": "Recurve Bow (perfect)",
        "category": "Recurve Bow",
        "craftingLevel": 438,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(perfect)"
    },
    {
        "name": "Spear (perfect)",
        "category": "Spear",
        "craftingLevel": 451,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Spear_(perfect)"
    },
    {
        "name": "Wooden Hexagon Shield (perfect)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 457,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(perfect)"
    },
    {
        "name": "Longbow (perfect)",
        "category": "Longbow",
        "craftingLevel": 470,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Longbow_(perfect)"
    },
    {
        "name": "Poleaxe (perfect)",
        "category": "Poleaxe",
        "craftingLevel": 483,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(perfect)"
    },
    {
        "name": "Heavy Crossbow (perfect)",
        "category": "Heavy Crossbow",
        "craftingLevel": 490,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(perfect)"
    }
];

export const hammermageEquipment: Equipment[] = [
    {
        "name": "Hammerfist (basic)",
        "category": "Hammerfist",
        "craftingLevel": 0,
        "maxLevel": 37,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(basic)"
    },
    {
        "name": "Throwing Stones (basic)",
        "category": "Throwing Stones",
        "craftingLevel": 2,
        "maxLevel": 39,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(basic)"
    },
    {
        "name": "Stone Slab Shield (basic)",
        "category": "Stone Slab Shield",
        "craftingLevel": 4,
        "maxLevel": 43,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(basic)"
    },
    {
        "name": "Stone Mace (basic)",
        "category": "Stone Mace",
        "craftingLevel": 6,
        "maxLevel": 47,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(basic)"
    },
    {
        "name": "Stone Discs (basic)",
        "category": "Stone Discs",
        "craftingLevel": 8,
        "maxLevel": 49,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(basic)"
    },
    {
        "name": "War Hammer (basic)",
        "category": "War Hammer",
        "craftingLevel": 10,
        "maxLevel": 53,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(basic)"
    },
    {
        "name": "Bolas (basic)",
        "category": "Bolas",
        "craftingLevel": 12,
        "maxLevel": 57,
        "url": "https://brightershoreswiki.org/w/Bolas_(basic)"
    },
    {
        "name": "Stone Chunk Shield (basic)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 14,
        "maxLevel": 59,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(basic)"
    },
    {
        "name": "Double Headed Hammer (basic)",
        "category": "Double Headed Hammer",
        "craftingLevel": 16,
        "maxLevel": 64,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(basic)"
    },
    {
        "name": "Throwing Clubs (basic)",
        "category": "Throwing Clubs",
        "craftingLevel": 18,
        "maxLevel": 68,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(basic)"
    },
    {
        "name": "Great Stone Mace (basic)",
        "category": "Great Stone Mace",
        "craftingLevel": 22,
        "maxLevel": 70,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(basic)"
    },
    {
        "name": "Polished Stone Shield (basic)",
        "category": "Polished Stone Shield",
        "craftingLevel": 24,
        "maxLevel": 74,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(basic)"
    },
    {
        "name": "Throwing Hammers (basic)",
        "category": "Throwing Hammers",
        "craftingLevel": 28,
        "maxLevel": 78,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(basic)"
    },
    {
        "name": "Great Hammer (basic)",
        "category": "Great Hammer",
        "craftingLevel": 30,
        "maxLevel": 80,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(basic)"
    },
    {
        "name": "Sling (basic)",
        "category": "Sling",
        "craftingLevel": 34,
        "maxLevel": 84,
        "url": "https://brightershoreswiki.org/w/Sling_(basic)"
    },
    {
        "name": "Hammerfist (moderate)",
        "category": "Hammerfist",
        "craftingLevel": 38,
        "maxLevel": 86,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(moderate)"
    },
    {
        "name": "Throwing Stones (moderate)",
        "category": "Throwing Stones",
        "craftingLevel": 40,
        "maxLevel": 90,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(moderate)"
    },
    {
        "name": "Stone Slab Shield (moderate)",
        "category": "Stone Slab Shield",
        "craftingLevel": 44,
        "maxLevel": 94,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(moderate)"
    },
    {
        "name": "Stone Mace (moderate)",
        "category": "Stone Mace",
        "craftingLevel": 48,
        "maxLevel": 96,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(moderate)"
    },
    {
        "name": "Stone Discs (moderate)",
        "category": "Stone Discs",
        "craftingLevel": 50,
        "maxLevel": 100,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(moderate)"
    },
    {
        "name": "War Hammer (moderate)",
        "category": "War Hammer",
        "craftingLevel": 54,
        "maxLevel": 104,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(moderate)"
    },
    {
        "name": "Bolas (moderate)",
        "category": "Bolas",
        "craftingLevel": 58,
        "maxLevel": 106,
        "url": "https://brightershoreswiki.org/w/Bolas_(moderate)"
    },
    {
        "name": "Stone Chunk Shield (moderate)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 60,
        "maxLevel": 111,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(moderate)"
    },
    {
        "name": "Double Headed Hammer (moderate)",
        "category": "Double Headed Hammer",
        "craftingLevel": 65,
        "maxLevel": 115,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(moderate)"
    },
    {
        "name": "Throwing Clubs (moderate)",
        "category": "Throwing Clubs",
        "craftingLevel": 69,
        "maxLevel": 117,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(moderate)"
    },
    {
        "name": "Great Stone Mace (moderate)",
        "category": "Great Stone Mace",
        "craftingLevel": 71,
        "maxLevel": 121,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(moderate)"
    },
    {
        "name": "Polished Stone Shield (moderate)",
        "category": "Polished Stone Shield",
        "craftingLevel": 75,
        "maxLevel": 125,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(moderate)"
    },
    {
        "name": "Throwing Hammers (moderate)",
        "category": "Throwing Hammers",
        "craftingLevel": 79,
        "maxLevel": 127,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(moderate)"
    },
    {
        "name": "Great Hammer (moderate)",
        "category": "Great Hammer",
        "craftingLevel": 81,
        "maxLevel": 131,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(moderate)"
    },
    {
        "name": "Sling (moderate)",
        "category": "Sling",
        "craftingLevel": 85,
        "maxLevel": 135,
        "url": "https://brightershoreswiki.org/w/Sling_(moderate)"
    },
    {
        "name": "Hammerfist (fine)",
        "category": "Hammerfist",
        "craftingLevel": 87,
        "maxLevel": 137,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(fine)"
    },
    {
        "name": "Throwing Stones (fine)",
        "category": "Throwing Stones",
        "craftingLevel": 91,
        "maxLevel": 141,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(fine)"
    },
    {
        "name": "Stone Slab Shield (fine)",
        "category": "Stone Slab Shield",
        "craftingLevel": 95,
        "maxLevel": 145,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(fine)"
    },
    {
        "name": "Stone Mace (fine)",
        "category": "Stone Mace",
        "craftingLevel": 97,
        "maxLevel": 147,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(fine)"
    },
    {
        "name": "Stone Discs (fine)",
        "category": "Stone Discs",
        "craftingLevel": 101,
        "maxLevel": 151,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(fine)"
    },
    {
        "name": "War Hammer (fine)",
        "category": "War Hammer",
        "craftingLevel": 105,
        "maxLevel": 156,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(fine)"
    },
    {
        "name": "Bolas (fine)",
        "category": "Bolas",
        "craftingLevel": 107,
        "maxLevel": 158,
        "url": "https://brightershoreswiki.org/w/Bolas_(fine)"
    },
    {
        "name": "Stone Chunk Shield (fine)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 112,
        "maxLevel": 162,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(fine)"
    },
    {
        "name": "Double Headed Hammer (fine)",
        "category": "Double Headed Hammer",
        "craftingLevel": 116,
        "maxLevel": 166,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(fine)"
    },
    {
        "name": "Throwing Clubs (fine)",
        "category": "Throwing Clubs",
        "craftingLevel": 118,
        "maxLevel": 168,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(fine)"
    },
    {
        "name": "Great Stone Mace (fine)",
        "category": "Great Stone Mace",
        "craftingLevel": 122,
        "maxLevel": 172,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(fine)"
    },
    {
        "name": "Polished Stone Shield (fine)",
        "category": "Polished Stone Shield",
        "craftingLevel": 126,
        "maxLevel": 176,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(fine)"
    },
    {
        "name": "Throwing Hammers (fine)",
        "category": "Throwing Hammers",
        "craftingLevel": 128,
        "maxLevel": 178,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(fine)"
    },
    {
        "name": "Great Hammer (fine)",
        "category": "Great Hammer",
        "craftingLevel": 132,
        "maxLevel": 182,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(fine)"
    },
    {
        "name": "Sling (fine)",
        "category": "Sling",
        "craftingLevel": 136,
        "maxLevel": 186,
        "url": "https://brightershoreswiki.org/w/Sling_(fine)"
    },
    {
        "name": "Hammerfist (strong)",
        "category": "Hammerfist",
        "craftingLevel": 138,
        "maxLevel": 188,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(strong)"
    },
    {
        "name": "Throwing Stones (strong)",
        "category": "Throwing Stones",
        "craftingLevel": 142,
        "maxLevel": 192,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(strong)"
    },
    {
        "name": "Stone Slab Shield (strong)",
        "category": "Stone Slab Shield",
        "craftingLevel": 146,
        "maxLevel": 196,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(strong)"
    },
    {
        "name": "Stone Mace (strong)",
        "category": "Stone Mace",
        "craftingLevel": 148,
        "maxLevel": 199,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(strong)"
    },
    {
        "name": "Stone Discs (strong)",
        "category": "Stone Discs",
        "craftingLevel": 152,
        "maxLevel": 212,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(strong)"
    },
    {
        "name": "War Hammer (strong)",
        "category": "War Hammer",
        "craftingLevel": 157,
        "maxLevel": 225,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(strong)"
    },
    {
        "name": "Bolas (strong)",
        "category": "Bolas",
        "craftingLevel": 159,
        "maxLevel": 232,
        "url": "https://brightershoreswiki.org/w/Bolas_(strong)"
    },
    {
        "name": "Stone Chunk Shield (strong)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 163,
        "maxLevel": 246,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(strong)"
    },
    {
        "name": "Double Headed Hammer (strong)",
        "category": "Double Headed Hammer",
        "craftingLevel": 167,
        "maxLevel": 259,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(strong)"
    },
    {
        "name": "Throwing Clubs (strong)",
        "category": "Throwing Clubs",
        "craftingLevel": 169,
        "maxLevel": 266,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(strong)"
    },
    {
        "name": "Great Stone Mace (strong)",
        "category": "Great Stone Mace",
        "craftingLevel": 173,
        "maxLevel": 279,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(strong)"
    },
    {
        "name": "Polished Stone Shield (strong)",
        "category": "Polished Stone Shield",
        "craftingLevel": 177,
        "maxLevel": 286,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(strong)"
    },
    {
        "name": "Throwing Hammers (strong)",
        "category": "Throwing Hammers",
        "craftingLevel": 179,
        "maxLevel": 300,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(strong)"
    },
    {
        "name": "Great Hammer (strong)",
        "category": "Great Hammer",
        "craftingLevel": 183,
        "maxLevel": 313,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(strong)"
    },
    {
        "name": "Sling (strong)",
        "category": "Sling",
        "craftingLevel": 187,
        "maxLevel": 320,
        "url": "https://brightershoreswiki.org/w/Sling_(strong)"
    },
    {
        "name": "Hammerfist (superior)",
        "category": "Hammerfist",
        "craftingLevel": 189,
        "maxLevel": 333,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(superior)"
    },
    {
        "name": "Throwing Stones (superior)",
        "category": "Throwing Stones",
        "craftingLevel": 193,
        "maxLevel": 347,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(superior)"
    },
    {
        "name": "Stone Slab Shield (superior)",
        "category": "Stone Slab Shield",
        "craftingLevel": 197,
        "maxLevel": 354,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(superior)"
    },
    {
        "name": "Stone Mace (superior)",
        "category": "Stone Mace",
        "craftingLevel": 200,
        "maxLevel": 367,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(superior)"
    },
    {
        "name": "Stone Discs (superior)",
        "category": "Stone Discs",
        "craftingLevel": 213,
        "maxLevel": 381,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(superior)"
    },
    {
        "name": "War Hammer (superior)",
        "category": "War Hammer",
        "craftingLevel": 226,
        "maxLevel": 387,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(superior)"
    },
    {
        "name": "Bolas (superior)",
        "category": "Bolas",
        "craftingLevel": 233,
        "maxLevel": 401,
        "url": "https://brightershoreswiki.org/w/Bolas_(superior)"
    },
    {
        "name": "Stone Chunk Shield (superior)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 247,
        "maxLevel": 414,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(superior)"
    },
    {
        "name": "Double Headed Hammer (superior)",
        "category": "Double Headed Hammer",
        "craftingLevel": 260,
        "maxLevel": 421,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(superior)"
    },
    {
        "name": "Throwing Clubs (superior)",
        "category": "Throwing Clubs",
        "craftingLevel": 267,
        "maxLevel": 435,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(superior)"
    },
    {
        "name": "Great Stone Mace (superior)",
        "category": "Great Stone Mace",
        "craftingLevel": 280,
        "maxLevel": 448,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(superior)"
    },
    {
        "name": "Polished Stone Shield (superior)",
        "category": "Polished Stone Shield",
        "craftingLevel": 287,
        "maxLevel": 455,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(superior)"
    },
    {
        "name": "Throwing Hammers (superior)",
        "category": "Throwing Hammers",
        "craftingLevel": 301,
        "maxLevel": 468,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(superior)"
    },
    {
        "name": "Great Hammer (superior)",
        "category": "Great Hammer",
        "craftingLevel": 314,
        "maxLevel": 482,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(superior)"
    },
    {
        "name": "Sling (superior)",
        "category": "Sling",
        "craftingLevel": 321,
        "maxLevel": 489,
        "url": "https://brightershoreswiki.org/w/Sling_(superior)"
    },
    {
        "name": "Hammerfist (perfect)",
        "category": "Hammerfist",
        "craftingLevel": 334,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(perfect)"
    },
    {
        "name": "Throwing Stones (perfect)",
        "category": "Throwing Stones",
        "craftingLevel": 348,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(perfect)"
    },
    {
        "name": "Stone Slab Shield (perfect)",
        "category": "Stone Slab Shield",
        "craftingLevel": 355,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(perfect)"
    },
    {
        "name": "Stone Mace (perfect)",
        "category": "Stone Mace",
        "craftingLevel": 368,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(perfect)"
    },
    {
        "name": "Stone Discs (perfect)",
        "category": "Stone Discs",
        "craftingLevel": 382,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(perfect)"
    },
    {
        "name": "War Hammer (perfect)",
        "category": "War Hammer",
        "craftingLevel": 388,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(perfect)"
    },
    {
        "name": "Bolas (perfect)",
        "category": "Bolas",
        "craftingLevel": 402,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Bolas_(perfect)"
    },
    {
        "name": "Stone Chunk Shield (perfect)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 415,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(perfect)"
    },
    {
        "name": "Double Headed Hammer (perfect)",
        "category": "Double Headed Hammer",
        "craftingLevel": 422,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(perfect)"
    },
    {
        "name": "Throwing Clubs (perfect)",
        "category": "Throwing Clubs",
        "craftingLevel": 436,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(perfect)"
    },
    {
        "name": "Great Stone Mace (perfect)",
        "category": "Great Stone Mace",
        "craftingLevel": 449,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(perfect)"
    },
    {
        "name": "Polished Stone Shield (perfect)",
        "category": "Polished Stone Shield",
        "craftingLevel": 456,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(perfect)"
    },
    {
        "name": "Throwing Hammers (perfect)",
        "category": "Throwing Hammers",
        "craftingLevel": 469,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(perfect)"
    },
    {
        "name": "Great Hammer (perfect)",
        "category": "Great Hammer",
        "craftingLevel": 483,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(perfect)"
    },
    {
        "name": "Sling (perfect)",
        "category": "Sling",
        "craftingLevel": 490,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Sling_(perfect)"
    }
];
