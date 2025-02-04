import {Element, elements} from "@/model/element";

export interface EquipmentCategory {
    name: string;
    hands: 1 | 2;
    type: 'melee' | 'ranged';
    speedTier: 1 | 2 | 3;
    element: Element
}

export const cryoknightEquipmentCategories: EquipmentCategory[] = [];

export const guardianEquipmentCategories: EquipmentCategory[] = [];

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

export interface Equipment {
    name: string;
    category: string;
    craftingLevel: number;
    maxLevel: number;
    url: string;
}

export const cryoknightEquipments: Equipment[] = [];

export const guardianEquipments: Equipment[] = [];

export const hammermageEquipments: Equipment[] = [
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
