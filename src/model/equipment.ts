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
        name: 'Metal Bow',
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

/**
 * Retrieves an equipment category by its name.
 *
 * @param {string} category - The name of the category to retrieve.
 * @return {EquipmentCategory | null} The equipment category object if found, otherwise null.
 */
export function categoryByName(category: string): EquipmentCategory | null {
    return categoriesByName.get(category) || null;
}

export interface Equipment {
    name: string;
    category: string;
    craftingLevel: number;
    maxLevel: number;
    url: string;
    materials: {
        quantity: number;
        material: string;
    }[]
}

export const cryoknightEquipment: Equipment[] = [
    {
        "name": "Rapier (basic)",
        "category": "Rapier",
        "craftingLevel": 0,
        "maxLevel": 36,
        "url": "https://brightershoreswiki.org/w/Rapier_(basic)",
        "materials": [
            {
                "quantity": 4,
                "material": "Laterite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Twinblades (basic)",
        "category": "Throwing Twinblades",
        "craftingLevel": 2,
        "maxLevel": 40,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(basic)",
        "materials": [
            {
                "quantity": 4,
                "material": "Laterite Iron Ore"
            }
        ]
    },
    {
        "name": "Metal Kite Shield (basic)",
        "category": "Metal Kite Shield",
        "craftingLevel": 4,
        "maxLevel": 44,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(basic)",
        "materials": [
            {
                "quantity": 5,
                "material": "Laterite Iron Ore"
            }
        ]
    },
    {
        "name": "Flanged Mace (basic)",
        "category": "Flanged Mace",
        "craftingLevel": 6,
        "maxLevel": 46,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Hickory Pole"
            },
            {
                "quantity": 5,
                "material": "Laterite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Rings (basic)",
        "category": "Throwing Rings",
        "craftingLevel": 8,
        "maxLevel": 51,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(basic)",
        "materials": [
            {
                "quantity": 4,
                "material": "Folrian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Shortsword (basic)",
        "category": "Shortsword",
        "craftingLevel": 10,
        "maxLevel": 53,
        "url": "https://brightershoreswiki.org/w/Shortsword_(basic)",
        "materials": [
            {
                "quantity": 4,
                "material": "Folrian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Javelins (basic)",
        "category": "Metal Javelins",
        "craftingLevel": 12,
        "maxLevel": 57,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(basic)",
        "materials": [
            {
                "quantity": 5,
                "material": "Folrian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Heater Shield (basic)",
        "category": "Metal Heater Shield",
        "craftingLevel": 14,
        "maxLevel": 61,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(basic)",
        "materials": [
            {
                "quantity": 6,
                "material": "Folrian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Longsword (basic)",
        "category": "Longsword",
        "craftingLevel": 16,
        "maxLevel": 63,
        "url": "https://brightershoreswiki.org/w/Longsword_(basic)",
        "materials": [
            {
                "quantity": 4,
                "material": "Sylentnite Flantium Ore"
            }
        ]
    },
    {
        "name": "Throwing Knives (basic)",
        "category": "Throwing Knives",
        "craftingLevel": 18,
        "maxLevel": 68,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(basic)",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Sylentnite Flantium Ore"
            }
        ]
    },
    {
        "name": "Broadsword (basic)",
        "category": "Broadsword",
        "craftingLevel": 22,
        "maxLevel": 70,
        "url": "https://brightershoreswiki.org/w/Broadsword_(basic)",
        "materials": [
            {
                "quantity": 6,
                "material": "Sylentnite Flantium Ore"
            }
        ]
    },
    {
        "name": "Metal Buckler (basic)",
        "category": "Metal Buckler",
        "craftingLevel": 24,
        "maxLevel": 74,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(basic)",
        "materials": [
            {
                "quantity": 4,
                "material": "Maloic Adathril Ore"
            }
        ]
    },
    {
        "name": "Throwing Axes (basic)",
        "category": "Throwing Axes",
        "craftingLevel": 28,
        "maxLevel": 79,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(basic)",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Maloic Adathril Ore"
            }
        ]
    },
    {
        "name": "Battleaxe (basic)",
        "category": "Battleaxe",
        "craftingLevel": 30,
        "maxLevel": 81,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Yew Pole"
            },
            {
                "quantity": 5,
                "material": "Maloic Adathril Ore"
            }
        ]
    },
    {
        "name": "Metal Bow (basic)",
        "category": "Metal Bow",
        "craftingLevel": 34,
        "maxLevel": 85,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(basic)",
        "materials": [
            {
                "quantity": 6,
                "material": "Maloic Adathril Ore"
            }
        ]
    },
    {
        "name": "Rapier (moderate)",
        "category": "Rapier",
        "craftingLevel": 37,
        "maxLevel": 87,
        "url": "https://brightershoreswiki.org/w/Rapier_(moderate)",
        "materials": [
            {
                "quantity": 4,
                "material": "Limonite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Twinblades (moderate)",
        "category": "Throwing Twinblades",
        "craftingLevel": 41,
        "maxLevel": 91,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(moderate)",
        "materials": [
            {
                "quantity": 4,
                "material": "Limonite Iron Ore"
            }
        ]
    },
    {
        "name": "Metal Kite Shield (moderate)",
        "category": "Metal Kite Shield",
        "craftingLevel": 45,
        "maxLevel": 96,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(moderate)",
        "materials": [
            {
                "quantity": 5,
                "material": "Limonite Iron Ore"
            }
        ]
    },
    {
        "name": "Flanged Mace (moderate)",
        "category": "Flanged Mace",
        "craftingLevel": 47,
        "maxLevel": 98,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Hickory Pole"
            },
            {
                "quantity": 5,
                "material": "Limonite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Rings (moderate)",
        "category": "Throwing Rings",
        "craftingLevel": 52,
        "maxLevel": 102,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(moderate)",
        "materials": [
            {
                "quantity": 4,
                "material": "Aulsian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Shortsword (moderate)",
        "category": "Shortsword",
        "craftingLevel": 54,
        "maxLevel": 104,
        "url": "https://brightershoreswiki.org/w/Shortsword_(moderate)",
        "materials": [
            {
                "quantity": 4,
                "material": "Aulsian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Javelins (moderate)",
        "category": "Metal Javelins",
        "craftingLevel": 58,
        "maxLevel": 109,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(moderate)",
        "materials": [
            {
                "quantity": 5,
                "material": "Aulsian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Heater Shield (moderate)",
        "category": "Metal Heater Shield",
        "craftingLevel": 62,
        "maxLevel": 113,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(moderate)",
        "materials": [
            {
                "quantity": 6,
                "material": "Aulsian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Longsword (moderate)",
        "category": "Longsword",
        "craftingLevel": 64,
        "maxLevel": 115,
        "url": "https://brightershoreswiki.org/w/Longsword_(moderate)",
        "materials": [
            {
                "quantity": 4,
                "material": "Yehrite Flantium Ore"
            }
        ]
    },
    {
        "name": "Throwing Knives (moderate)",
        "category": "Throwing Knives",
        "craftingLevel": 69,
        "maxLevel": 119,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(moderate)",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Yehrite Flantium Ore"
            }
        ]
    },
    {
        "name": "Broadsword (moderate)",
        "category": "Broadsword",
        "craftingLevel": 71,
        "maxLevel": 124,
        "url": "https://brightershoreswiki.org/w/Broadsword_(moderate)",
        "materials": [
            {
                "quantity": 6,
                "material": "Yehrite Flantium Ore"
            }
        ]
    },
    {
        "name": "Metal Buckler (moderate)",
        "category": "Metal Buckler",
        "craftingLevel": 75,
        "maxLevel": 126,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(moderate)",
        "materials": [
            {
                "quantity": 4,
                "material": "Rigic Adathril Ore"
            }
        ]
    },
    {
        "name": "Throwing Axes (moderate)",
        "category": "Throwing Axes",
        "craftingLevel": 80,
        "maxLevel": 130,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(moderate)",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Rigic Adathril Ore"
            }
        ]
    },
    {
        "name": "Battleaxe (moderate)",
        "category": "Battleaxe",
        "craftingLevel": 82,
        "maxLevel": 132,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Yew Pole"
            },
            {
                "quantity": 5,
                "material": "Rigic Adathril Ore"
            }
        ]
    },
    {
        "name": "Metal Bow (moderate)",
        "category": "Metal Bow",
        "craftingLevel": 86,
        "maxLevel": 136,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(moderate)",
        "materials": [
            {
                "quantity": 6,
                "material": "Rigic Adathril Ore"
            }
        ]
    },
    {
        "name": "Rapier (fine)",
        "category": "Rapier",
        "craftingLevel": 88,
        "maxLevel": 141,
        "url": "https://brightershoreswiki.org/w/Rapier_(fine)",
        "materials": [
            {
                "quantity": 4,
                "material": "Goethite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Twinblades (fine)",
        "category": "Throwing Twinblades",
        "craftingLevel": 92,
        "maxLevel": 143,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(fine)",
        "materials": [
            {
                "quantity": 4,
                "material": "Goethite Iron Ore"
            }
        ]
    },
    {
        "name": "Metal Kite Shield (fine)",
        "category": "Metal Kite Shield",
        "craftingLevel": 97,
        "maxLevel": 147,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(fine)",
        "materials": [
            {
                "quantity": 5,
                "material": "Goethite Iron Ore"
            }
        ]
    },
    {
        "name": "Flanged Mace (fine)",
        "category": "Flanged Mace",
        "craftingLevel": 99,
        "maxLevel": 149,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Hickory Pole"
            },
            {
                "quantity": 5,
                "material": "Goethite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Rings (fine)",
        "category": "Throwing Rings",
        "craftingLevel": 103,
        "maxLevel": 153,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(fine)",
        "materials": [
            {
                "quantity": 4,
                "material": "Babian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Shortsword (fine)",
        "category": "Shortsword",
        "craftingLevel": 105,
        "maxLevel": 158,
        "url": "https://brightershoreswiki.org/w/Shortsword_(fine)",
        "materials": [
            {
                "quantity": 4,
                "material": "Babian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Javelins (fine)",
        "category": "Metal Javelins",
        "craftingLevel": 110,
        "maxLevel": 160,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(fine)",
        "materials": [
            {
                "quantity": 5,
                "material": "Babian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Heater Shield (fine)",
        "category": "Metal Heater Shield",
        "craftingLevel": 114,
        "maxLevel": 164,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(fine)",
        "materials": [
            {
                "quantity": 6,
                "material": "Babian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Longsword (fine)",
        "category": "Longsword",
        "craftingLevel": 116,
        "maxLevel": 166,
        "url": "https://brightershoreswiki.org/w/Longsword_(fine)",
        "materials": [
            {
                "quantity": 4,
                "material": "Holmitite Flantium Ore"
            }
        ]
    },
    {
        "name": "Throwing Knives (fine)",
        "category": "Throwing Knives",
        "craftingLevel": 120,
        "maxLevel": 171,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(fine)",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Holmitite Flantium Ore"
            }
        ]
    },
    {
        "name": "Broadsword (fine)",
        "category": "Broadsword",
        "craftingLevel": 125,
        "maxLevel": 175,
        "url": "https://brightershoreswiki.org/w/Broadsword_(fine)",
        "materials": [
            {
                "quantity": 6,
                "material": "Holmitite Flantium Ore"
            }
        ]
    },
    {
        "name": "Metal Buckler (fine)",
        "category": "Metal Buckler",
        "craftingLevel": 127,
        "maxLevel": 177,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(fine)",
        "materials": [
            {
                "quantity": 4,
                "material": "Portoic Adathril Ore"
            }
        ]
    },
    {
        "name": "Throwing Axes (fine)",
        "category": "Throwing Axes",
        "craftingLevel": 131,
        "maxLevel": 181,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(fine)",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Portoic Adathril Ore"
            }
        ]
    },
    {
        "name": "Battleaxe (fine)",
        "category": "Battleaxe",
        "craftingLevel": 133,
        "maxLevel": 183,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Yew Pole"
            },
            {
                "quantity": 5,
                "material": "Portoic Adathril Ore"
            }
        ]
    },
    {
        "name": "Metal Bow (fine)",
        "category": "Metal Bow",
        "craftingLevel": 137,
        "maxLevel": 188,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(fine)",
        "materials": [
            {
                "quantity": 6,
                "material": "Portoic Adathril Ore"
            }
        ]
    },
    {
        "name": "Rapier (strong)",
        "category": "Rapier",
        "craftingLevel": 142,
        "maxLevel": 192,
        "url": "https://brightershoreswiki.org/w/Rapier_(strong)",
        "materials": [
            {
                "quantity": 4,
                "material": "Hematite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Twinblades (strong)",
        "category": "Throwing Twinblades",
        "craftingLevel": 144,
        "maxLevel": 194,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(strong)",
        "materials": [
            {
                "quantity": 4,
                "material": "Hematite Iron Ore"
            }
        ]
    },
    {
        "name": "Metal Kite Shield (strong)",
        "category": "Metal Kite Shield",
        "craftingLevel": 148,
        "maxLevel": 199,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(strong)",
        "materials": [
            {
                "quantity": 5,
                "material": "Hematite Iron Ore"
            }
        ]
    },
    {
        "name": "Flanged Mace (strong)",
        "category": "Flanged Mace",
        "craftingLevel": 150,
        "maxLevel": 212,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Hickory Pole"
            },
            {
                "quantity": 5,
                "material": "Hematite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Rings (strong)",
        "category": "Throwing Rings",
        "craftingLevel": 154,
        "maxLevel": 219,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(strong)",
        "materials": [
            {
                "quantity": 4,
                "material": "Morian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Shortsword (strong)",
        "category": "Shortsword",
        "craftingLevel": 159,
        "maxLevel": 232,
        "url": "https://brightershoreswiki.org/w/Shortsword_(strong)",
        "materials": [
            {
                "quantity": 4,
                "material": "Morian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Javelins (strong)",
        "category": "Metal Javelins",
        "craftingLevel": 161,
        "maxLevel": 239,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(strong)",
        "materials": [
            {
                "quantity": 5,
                "material": "Morian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Heater Shield (strong)",
        "category": "Metal Heater Shield",
        "craftingLevel": 165,
        "maxLevel": 252,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(strong)",
        "materials": [
            {
                "quantity": 6,
                "material": "Morian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Longsword (strong)",
        "category": "Longsword",
        "craftingLevel": 167,
        "maxLevel": 266,
        "url": "https://brightershoreswiki.org/w/Longsword_(strong)",
        "materials": [
            {
                "quantity": 4,
                "material": "Amirite Flantium Ore"
            }
        ]
    },
    {
        "name": "Throwing Knives (strong)",
        "category": "Throwing Knives",
        "craftingLevel": 172,
        "maxLevel": 273,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(strong)",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Amirite Flantium Ore"
            }
        ]
    },
    {
        "name": "Broadsword (strong)",
        "category": "Broadsword",
        "craftingLevel": 176,
        "maxLevel": 286,
        "url": "https://brightershoreswiki.org/w/Broadsword_(strong)",
        "materials": [
            {
                "quantity": 6,
                "material": "Amirite Flantium Ore"
            }
        ]
    },
    {
        "name": "Metal Buckler (strong)",
        "category": "Metal Buckler",
        "craftingLevel": 178,
        "maxLevel": 293,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(strong)",
        "materials": [
            {
                "quantity": 4,
                "material": "Caric Adathril Ore"
            }
        ]
    },
    {
        "name": "Throwing Axes (strong)",
        "category": "Throwing Axes",
        "craftingLevel": 182,
        "maxLevel": 306,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(strong)",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Caric Adathril Ore"
            }
        ]
    },
    {
        "name": "Battleaxe (strong)",
        "category": "Battleaxe",
        "craftingLevel": 184,
        "maxLevel": 320,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Yew Pole"
            },
            {
                "quantity": 5,
                "material": "Caric Adathril Ore"
            }
        ]
    },
    {
        "name": "Metal Bow (strong)",
        "category": "Metal Bow",
        "craftingLevel": 189,
        "maxLevel": 327,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(strong)",
        "materials": [
            {
                "quantity": 6,
                "material": "Caric Adathril Ore"
            }
        ]
    },
    {
        "name": "Rapier (superior)",
        "category": "Rapier",
        "craftingLevel": 193,
        "maxLevel": 340,
        "url": "https://brightershoreswiki.org/w/Rapier_(superior)",
        "materials": [
            {
                "quantity": 4,
                "material": "Magnetite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Twinblades (superior)",
        "category": "Throwing Twinblades",
        "craftingLevel": 195,
        "maxLevel": 347,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(superior)",
        "materials": [
            {
                "quantity": 4,
                "material": "Magnetite Iron Ore"
            }
        ]
    },
    {
        "name": "Metal Kite Shield (superior)",
        "category": "Metal Kite Shield",
        "craftingLevel": 200,
        "maxLevel": 360,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(superior)",
        "materials": [
            {
                "quantity": 5,
                "material": "Magnetite Iron Ore"
            }
        ]
    },
    {
        "name": "Flanged Mace (superior)",
        "category": "Flanged Mace",
        "craftingLevel": 213,
        "maxLevel": 374,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Hickory Pole"
            },
            {
                "quantity": 5,
                "material": "Magnetite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Rings (superior)",
        "category": "Throwing Rings",
        "craftingLevel": 220,
        "maxLevel": 381,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(superior)",
        "materials": [
            {
                "quantity": 4,
                "material": "Shaprian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Shortsword (superior)",
        "category": "Shortsword",
        "craftingLevel": 233,
        "maxLevel": 394,
        "url": "https://brightershoreswiki.org/w/Shortsword_(superior)",
        "materials": [
            {
                "quantity": 4,
                "material": "Shaprian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Javelins (superior)",
        "category": "Metal Javelins",
        "craftingLevel": 240,
        "maxLevel": 401,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(superior)",
        "materials": [
            {
                "quantity": 5,
                "material": "Shaprian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Heater Shield (superior)",
        "category": "Metal Heater Shield",
        "craftingLevel": 253,
        "maxLevel": 414,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(superior)",
        "materials": [
            {
                "quantity": 6,
                "material": "Shaprian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Longsword (superior)",
        "category": "Longsword",
        "craftingLevel": 267,
        "maxLevel": 428,
        "url": "https://brightershoreswiki.org/w/Longsword_(superior)",
        "materials": [
            {
                "quantity": 4,
                "material": "Eysite Flantium Ore"
            }
        ]
    },
    {
        "name": "Throwing Knives (superior)",
        "category": "Throwing Knives",
        "craftingLevel": 274,
        "maxLevel": 435,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(superior)",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Eysite Flantium Ore"
            }
        ]
    },
    {
        "name": "Broadsword (superior)",
        "category": "Broadsword",
        "craftingLevel": 287,
        "maxLevel": 448,
        "url": "https://brightershoreswiki.org/w/Broadsword_(superior)",
        "materials": [
            {
                "quantity": 6,
                "material": "Eysite Flantium Ore"
            }
        ]
    },
    {
        "name": "Metal Buckler (superior)",
        "category": "Metal Buckler",
        "craftingLevel": 294,
        "maxLevel": 455,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(superior)",
        "materials": [
            {
                "quantity": 4,
                "material": "Masic Adathril Ore"
            }
        ]
    },
    {
        "name": "Throwing Axes (superior)",
        "category": "Throwing Axes",
        "craftingLevel": 307,
        "maxLevel": 468,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(superior)",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Masic Adathril Ore"
            }
        ]
    },
    {
        "name": "Battleaxe (superior)",
        "category": "Battleaxe",
        "craftingLevel": 321,
        "maxLevel": 482,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Yew Pole"
            },
            {
                "quantity": 5,
                "material": "Masic Adathril Ore"
            }
        ]
    },
    {
        "name": "Metal Bow (superior)",
        "category": "Metal Bow",
        "craftingLevel": 328,
        "maxLevel": 489,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(superior)",
        "materials": [
            {
                "quantity": 6,
                "material": "Masic Adathril Ore"
            }
        ]
    },
    {
        "name": "Rapier (perfect)",
        "category": "Rapier",
        "craftingLevel": 341,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Rapier_(perfect)",
        "materials": [
            {
                "quantity": 4,
                "material": "Siderite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Twinblades (perfect)",
        "category": "Throwing Twinblades",
        "craftingLevel": 348,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Twinblades_(perfect)",
        "materials": [
            {
                "quantity": 4,
                "material": "Siderite Iron Ore"
            }
        ]
    },
    {
        "name": "Metal Kite Shield (perfect)",
        "category": "Metal Kite Shield",
        "craftingLevel": 361,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Metal_Kite_Shield_(perfect)",
        "materials": [
            {
                "quantity": 5,
                "material": "Siderite Iron Ore"
            }
        ]
    },
    {
        "name": "Flanged Mace (perfect)",
        "category": "Flanged Mace",
        "craftingLevel": 375,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Flanged_Mace_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Hickory Pole"
            },
            {
                "quantity": 5,
                "material": "Siderite Iron Ore"
            }
        ]
    },
    {
        "name": "Throwing Rings (perfect)",
        "category": "Throwing Rings",
        "craftingLevel": 382,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Rings_(perfect)",
        "materials": [
            {
                "quantity": 4,
                "material": "Temberian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Shortsword (perfect)",
        "category": "Shortsword",
        "craftingLevel": 395,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Shortsword_(perfect)",
        "materials": [
            {
                "quantity": 4,
                "material": "Temberian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Javelins (perfect)",
        "category": "Metal Javelins",
        "craftingLevel": 402,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Metal_Javelins_(perfect)",
        "materials": [
            {
                "quantity": 5,
                "material": "Temberian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Metal Heater Shield (perfect)",
        "category": "Metal Heater Shield",
        "craftingLevel": 415,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Metal_Heater_Shield_(perfect)",
        "materials": [
            {
                "quantity": 6,
                "material": "Temberian Cabranese Ore"
            }
        ]
    },
    {
        "name": "Longsword (perfect)",
        "category": "Longsword",
        "craftingLevel": 429,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Longsword_(perfect)",
        "materials": [
            {
                "quantity": 4,
                "material": "Seethalite Flantium Ore"
            }
        ]
    },
    {
        "name": "Throwing Knives (perfect)",
        "category": "Throwing Knives",
        "craftingLevel": 436,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Knives_(perfect)",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Seethalite Flantium Ore"
            }
        ]
    },
    {
        "name": "Broadsword (perfect)",
        "category": "Broadsword",
        "craftingLevel": 449,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Broadsword_(perfect)",
        "materials": [
            {
                "quantity": 6,
                "material": "Seethalite Flantium Ore"
            }
        ]
    },
    {
        "name": "Metal Buckler (perfect)",
        "category": "Metal Buckler",
        "craftingLevel": 456,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Metal_Buckler_(perfect)",
        "materials": [
            {
                "quantity": 4,
                "material": "Fortoic Adathril Ore"
            }
        ]
    },
    {
        "name": "Throwing Axes (perfect)",
        "category": "Throwing Axes",
        "craftingLevel": 469,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Axes_(perfect)",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Pine Pole"
            },
            {
                "quantity": 3,
                "material": "Fortoic Adathril Ore"
            }
        ]
    },
    {
        "name": "Battleaxe (perfect)",
        "category": "Battleaxe",
        "craftingLevel": 483,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Battleaxe_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Yew Pole"
            },
            {
                "quantity": 5,
                "material": "Fortoic Adathril Ore"
            }
        ]
    },
    {
        "name": "Metal Bow (perfect)",
        "category": "Metal Bow",
        "craftingLevel": 490,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Metal_Bow_(perfect)",
        "materials": [
            {
                "quantity": 6,
                "material": "Fortoic Adathril Ore"
            }
        ]
    }
];

export const guardianEquipment: Equipment[] = [
    {
        "name": "Truncheon (basic)",
        "category": "Truncheon",
        "craftingLevel": 0,
        "maxLevel": 37,
        "url": "https://brightershoreswiki.org/w/Truncheon_(basic)",
        "materials": [
            {
                "quantity": 2,
                "material": "Coarse Oak Pole"
            },
            {
                "quantity": 4,
                "material": "Crooked Goat Horn"
            }
        ]
    },
    {
        "name": "Blowpipe (basic)",
        "category": "Blowpipe",
        "craftingLevel": 2,
        "maxLevel": 41,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(basic)",
        "materials": [
            {
                "quantity": 2,
                "material": "Coarse Poplar Pole"
            },
            {
                "quantity": 2,
                "material": "Crooked Goat Horn"
            }
        ]
    },
    {
        "name": "Wooden Round Shield (basic)",
        "category": "Wooden Round Shield",
        "craftingLevel": 4,
        "maxLevel": 43,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(basic)",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Crooked Goat Horn"
            }
        ]
    },
    {
        "name": "Cudgel (basic)",
        "category": "Cudgel",
        "craftingLevel": 6,
        "maxLevel": 47,
        "url": "https://brightershoreswiki.org/w/Cudgel_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Crooked Goat Horn"
            }
        ]
    },
    {
        "name": "Javelins (basic)",
        "category": "Javelins",
        "craftingLevel": 8,
        "maxLevel": 51,
        "url": "https://brightershoreswiki.org/w/Javelins_(basic)",
        "materials": [
            {
                "quantity": 2,
                "material": "Coarse Poplar Pole"
            },
            {
                "quantity": 4,
                "material": "Yellowing Rams Horn"
            }
        ]
    },
    {
        "name": "Club (basic)",
        "category": "Club",
        "craftingLevel": 10,
        "maxLevel": 53,
        "url": "https://brightershoreswiki.org/w/Club_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Yellowing Rams Horn"
            }
        ]
    },
    {
        "name": "Light Crossbow (basic)",
        "category": "Light Crossbow",
        "craftingLevel": 12,
        "maxLevel": 57,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(basic)",
        "materials": [
            {
                "quantity": 2,
                "material": "Coarse Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Yellowing Rams Horn"
            }
        ]
    },
    {
        "name": "Wooden Square Shield (basic)",
        "category": "Wooden Square Shield",
        "craftingLevel": 14,
        "maxLevel": 61,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(basic)",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Yellowing Rams Horn"
            }
        ]
    },
    {
        "name": "Quarterstaff (basic)",
        "category": "Quarterstaff",
        "craftingLevel": 16,
        "maxLevel": 65,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Suave Pole"
            },
            {
                "quantity": 3,
                "material": "Streaky Bone Spike"
            }
        ]
    },
    {
        "name": "Recurve Bow (basic)",
        "category": "Recurve Bow",
        "craftingLevel": 18,
        "maxLevel": 67,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(basic)",
        "materials": [
            {
                "quantity": 2,
                "material": "Coarse Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Streaky Bone Spike"
            }
        ]
    },
    {
        "name": "Spear (basic)",
        "category": "Spear",
        "craftingLevel": 22,
        "maxLevel": 71,
        "url": "https://brightershoreswiki.org/w/Spear_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Streaky Bone Spike"
            }
        ]
    },
    {
        "name": "Wooden Hexagon Shield (basic)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 24,
        "maxLevel": 75,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(basic)",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Cracked Femur Shard"
            }
        ]
    },
    {
        "name": "Longbow (basic)",
        "category": "Longbow",
        "craftingLevel": 28,
        "maxLevel": 77,
        "url": "https://brightershoreswiki.org/w/Longbow_(basic)",
        "materials": [
            {
                "quantity": 2,
                "material": "Coarse Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Cracked Femur Shard"
            }
        ]
    },
    {
        "name": "Poleaxe (basic)",
        "category": "Poleaxe",
        "craftingLevel": 30,
        "maxLevel": 81,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Cracked Femur Shard"
            }
        ]
    },
    {
        "name": "Heavy Crossbow (basic)",
        "category": "Heavy Crossbow",
        "craftingLevel": 34,
        "maxLevel": 85,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(basic)",
        "materials": [
            {
                "quantity": 2,
                "material": "Coarse Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Cracked Femur Shard"
            }
        ]
    },
    {
        "name": "Truncheon (moderate)",
        "category": "Truncheon",
        "craftingLevel": 38,
        "maxLevel": 89,
        "url": "https://brightershoreswiki.org/w/Truncheon_(moderate)",
        "materials": [
            {
                "quantity": 2,
                "material": "Rugged Oak Pole"
            },
            {
                "quantity": 4,
                "material": "Gray Goat Horn"
            }
        ]
    },
    {
        "name": "Blowpipe (moderate)",
        "category": "Blowpipe",
        "craftingLevel": 42,
        "maxLevel": 91,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(moderate)",
        "materials": [
            {
                "quantity": 2,
                "material": "Rugged Poplar Pole"
            },
            {
                "quantity": 2,
                "material": "Gray Goat Horn"
            }
        ]
    },
    {
        "name": "Wooden Round Shield (moderate)",
        "category": "Wooden Round Shield",
        "craftingLevel": 44,
        "maxLevel": 95,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(moderate)",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Gray Goat Horn"
            }
        ]
    },
    {
        "name": "Cudgel (moderate)",
        "category": "Cudgel",
        "craftingLevel": 48,
        "maxLevel": 99,
        "url": "https://brightershoreswiki.org/w/Cudgel_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Gray Goat Horn"
            }
        ]
    },
    {
        "name": "Javelins (moderate)",
        "category": "Javelins",
        "craftingLevel": 52,
        "maxLevel": 101,
        "url": "https://brightershoreswiki.org/w/Javelins_(moderate)",
        "materials": [
            {
                "quantity": 2,
                "material": "Rugged Poplar Pole"
            },
            {
                "quantity": 4,
                "material": "Mottled Rams Horn"
            }
        ]
    },
    {
        "name": "Club (moderate)",
        "category": "Club",
        "craftingLevel": 54,
        "maxLevel": 105,
        "url": "https://brightershoreswiki.org/w/Club_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Mottled Rams Horn"
            }
        ]
    },
    {
        "name": "Light Crossbow (moderate)",
        "category": "Light Crossbow",
        "craftingLevel": 58,
        "maxLevel": 109,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(moderate)",
        "materials": [
            {
                "quantity": 2,
                "material": "Rugged Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Mottled Rams Horn"
            }
        ]
    },
    {
        "name": "Wooden Square Shield (moderate)",
        "category": "Wooden Square Shield",
        "craftingLevel": 62,
        "maxLevel": 111,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(moderate)",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Mottled Rams Horn"
            }
        ]
    },
    {
        "name": "Quarterstaff (moderate)",
        "category": "Quarterstaff",
        "craftingLevel": 66,
        "maxLevel": 115,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Suave Pole"
            },
            {
                "quantity": 3,
                "material": "Dappled Bone Spike"
            }
        ]
    },
    {
        "name": "Recurve Bow (moderate)",
        "category": "Recurve Bow",
        "craftingLevel": 68,
        "maxLevel": 119,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(moderate)",
        "materials": [
            {
                "quantity": 2,
                "material": "Rugged Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Dappled Bone Spike"
            }
        ]
    },
    {
        "name": "Spear (moderate)",
        "category": "Spear",
        "craftingLevel": 72,
        "maxLevel": 123,
        "url": "https://brightershoreswiki.org/w/Spear_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Dappled Bone Spike"
            }
        ]
    },
    {
        "name": "Wooden Hexagon Shield (moderate)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 76,
        "maxLevel": 125,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(moderate)",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Dusty Femur Shard"
            }
        ]
    },
    {
        "name": "Longbow (moderate)",
        "category": "Longbow",
        "craftingLevel": 79,
        "maxLevel": 129,
        "url": "https://brightershoreswiki.org/w/Longbow_(moderate)",
        "materials": [
            {
                "quantity": 2,
                "material": "Rugged Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Dusty Femur Shard"
            }
        ]
    },
    {
        "name": "Poleaxe (moderate)",
        "category": "Poleaxe",
        "craftingLevel": 82,
        "maxLevel": 133,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Dusty Femur Shard"
            }
        ]
    },
    {
        "name": "Heavy Crossbow (moderate)",
        "category": "Heavy Crossbow",
        "craftingLevel": 86,
        "maxLevel": 135,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(moderate)",
        "materials": [
            {
                "quantity": 2,
                "material": "Rugged Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Dusty Femur Shard"
            }
        ]
    },
    {
        "name": "Truncheon (fine)",
        "category": "Truncheon",
        "craftingLevel": 90,
        "maxLevel": 139,
        "url": "https://brightershoreswiki.org/w/Truncheon_(fine)",
        "materials": [
            {
                "quantity": 2,
                "material": "Average Oak Pole"
            },
            {
                "quantity": 4,
                "material": "Ridged Goat Horn"
            }
        ]
    },
    {
        "name": "Blowpipe (fine)",
        "category": "Blowpipe",
        "craftingLevel": 92,
        "maxLevel": 143,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(fine)",
        "materials": [
            {
                "quantity": 2,
                "material": "Average Poplar Pole"
            },
            {
                "quantity": 2,
                "material": "Ridged Goat Horn"
            }
        ]
    },
    {
        "name": "Wooden Round Shield (fine)",
        "category": "Wooden Round Shield",
        "craftingLevel": 96,
        "maxLevel": 147,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(fine)",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Ridged Goat Horn"
            }
        ]
    },
    {
        "name": "Cudgel (fine)",
        "category": "Cudgel",
        "craftingLevel": 100,
        "maxLevel": 149,
        "url": "https://brightershoreswiki.org/w/Cudgel_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Ridged Goat Horn"
            }
        ]
    },
    {
        "name": "Javelins (fine)",
        "category": "Javelins",
        "craftingLevel": 102,
        "maxLevel": 153,
        "url": "https://brightershoreswiki.org/w/Javelins_(fine)",
        "materials": [
            {
                "quantity": 2,
                "material": "Average Poplar Pole"
            },
            {
                "quantity": 4,
                "material": "Sturdy Rams Horn"
            }
        ]
    },
    {
        "name": "Club (fine)",
        "category": "Club",
        "craftingLevel": 106,
        "maxLevel": 157,
        "url": "https://brightershoreswiki.org/w/Club_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Sturdy Rams Horn"
            }
        ]
    },
    {
        "name": "Light Crossbow (fine)",
        "category": "Light Crossbow",
        "craftingLevel": 110,
        "maxLevel": 159,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(fine)",
        "materials": [
            {
                "quantity": 2,
                "material": "Average Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Sturdy Rams Horn"
            }
        ]
    },
    {
        "name": "Wooden Square Shield (fine)",
        "category": "Wooden Square Shield",
        "craftingLevel": 112,
        "maxLevel": 163,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(fine)",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Sturdy Rams Horn"
            }
        ]
    },
    {
        "name": "Quarterstaff (fine)",
        "category": "Quarterstaff",
        "craftingLevel": 116,
        "maxLevel": 167,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Suave Pole"
            },
            {
                "quantity": 3,
                "material": "Bistre Bone Spike"
            }
        ]
    },
    {
        "name": "Recurve Bow (fine)",
        "category": "Recurve Bow",
        "craftingLevel": 120,
        "maxLevel": 171,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(fine)",
        "materials": [
            {
                "quantity": 2,
                "material": "Average Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Bistre Bone Spike"
            }
        ]
    },
    {
        "name": "Spear (fine)",
        "category": "Spear",
        "craftingLevel": 124,
        "maxLevel": 173,
        "url": "https://brightershoreswiki.org/w/Spear_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Bistre Bone Spike"
            }
        ]
    },
    {
        "name": "Wooden Hexagon Shield (fine)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 126,
        "maxLevel": 177,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(fine)",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Weathered Femur Shard"
            }
        ]
    },
    {
        "name": "Longbow (fine)",
        "category": "Longbow",
        "craftingLevel": 130,
        "maxLevel": 181,
        "url": "https://brightershoreswiki.org/w/Longbow_(fine)",
        "materials": [
            {
                "quantity": 2,
                "material": "Average Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Weathered Femur Shard"
            }
        ]
    },
    {
        "name": "Poleaxe (fine)",
        "category": "Poleaxe",
        "craftingLevel": 134,
        "maxLevel": 183,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Weathered Femur Shard"
            }
        ]
    },
    {
        "name": "Heavy Crossbow (fine)",
        "category": "Heavy Crossbow",
        "craftingLevel": 136,
        "maxLevel": 187,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(fine)",
        "materials": [
            {
                "quantity": 2,
                "material": "Average Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Weathered Femur Shard"
            }
        ]
    },
    {
        "name": "Truncheon (strong)",
        "category": "Truncheon",
        "craftingLevel": 140,
        "maxLevel": 191,
        "url": "https://brightershoreswiki.org/w/Truncheon_(strong)",
        "materials": [
            {
                "quantity": 2,
                "material": "Fine Oak Pole"
            },
            {
                "quantity": 4,
                "material": "Smooth Goat Horn"
            }
        ]
    },
    {
        "name": "Blowpipe (strong)",
        "category": "Blowpipe",
        "craftingLevel": 144,
        "maxLevel": 195,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(strong)",
        "materials": [
            {
                "quantity": 2,
                "material": "Fine Poplar Pole"
            },
            {
                "quantity": 2,
                "material": "Smooth Goat Horn"
            }
        ]
    },
    {
        "name": "Wooden Round Shield (strong)",
        "category": "Wooden Round Shield",
        "craftingLevel": 148,
        "maxLevel": 197,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(strong)",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Smooth Goat Horn"
            }
        ]
    },
    {
        "name": "Cudgel (strong)",
        "category": "Cudgel",
        "craftingLevel": 150,
        "maxLevel": 205,
        "url": "https://brightershoreswiki.org/w/Cudgel_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Smooth Goat Horn"
            }
        ]
    },
    {
        "name": "Javelins (strong)",
        "category": "Javelins",
        "craftingLevel": 154,
        "maxLevel": 218,
        "url": "https://brightershoreswiki.org/w/Javelins_(strong)",
        "materials": [
            {
                "quantity": 2,
                "material": "Fine Poplar Pole"
            },
            {
                "quantity": 4,
                "material": "Chunky Rams Horn"
            }
        ]
    },
    {
        "name": "Club (strong)",
        "category": "Club",
        "craftingLevel": 158,
        "maxLevel": 224,
        "url": "https://brightershoreswiki.org/w/Club_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Chunky Rams Horn"
            }
        ]
    },
    {
        "name": "Light Crossbow (strong)",
        "category": "Light Crossbow",
        "craftingLevel": 160,
        "maxLevel": 237,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(strong)",
        "materials": [
            {
                "quantity": 2,
                "material": "Fine Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Chunky Rams Horn"
            }
        ]
    },
    {
        "name": "Wooden Square Shield (strong)",
        "category": "Wooden Square Shield",
        "craftingLevel": 164,
        "maxLevel": 250,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(strong)",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Chunky Rams Horn"
            }
        ]
    },
    {
        "name": "Quarterstaff (strong)",
        "category": "Quarterstaff",
        "craftingLevel": 168,
        "maxLevel": 257,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Suave Pole"
            },
            {
                "quantity": 3,
                "material": "Pointed Bone Spike"
            }
        ]
    },
    {
        "name": "Recurve Bow (strong)",
        "category": "Recurve Bow",
        "craftingLevel": 172,
        "maxLevel": 269,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(strong)",
        "materials": [
            {
                "quantity": 2,
                "material": "Fine Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Pointed Bone Spike"
            }
        ]
    },
    {
        "name": "Spear (strong)",
        "category": "Spear",
        "craftingLevel": 174,
        "maxLevel": 282,
        "url": "https://brightershoreswiki.org/w/Spear_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Pointed Bone Spike"
            }
        ]
    },
    {
        "name": "Wooden Hexagon Shield (strong)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 178,
        "maxLevel": 295,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(strong)",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Striated Femur Shard"
            }
        ]
    },
    {
        "name": "Longbow (strong)",
        "category": "Longbow",
        "craftingLevel": 182,
        "maxLevel": 302,
        "url": "https://brightershoreswiki.org/w/Longbow_(strong)",
        "materials": [
            {
                "quantity": 2,
                "material": "Fine Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Striated Femur Shard"
            }
        ]
    },
    {
        "name": "Poleaxe (strong)",
        "category": "Poleaxe",
        "craftingLevel": 184,
        "maxLevel": 315,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Striated Femur Shard"
            }
        ]
    },
    {
        "name": "Heavy Crossbow (strong)",
        "category": "Heavy Crossbow",
        "craftingLevel": 188,
        "maxLevel": 327,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(strong)",
        "materials": [
            {
                "quantity": 2,
                "material": "Fine Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Striated Femur Shard"
            }
        ]
    },
    {
        "name": "Truncheon (superior)",
        "category": "Truncheon",
        "craftingLevel": 192,
        "maxLevel": 334,
        "url": "https://brightershoreswiki.org/w/Truncheon_(superior)",
        "materials": [
            {
                "quantity": 2,
                "material": "Sturdy Oak Pole"
            },
            {
                "quantity": 4,
                "material": "Long Goat Horn"
            }
        ]
    },
    {
        "name": "Blowpipe (superior)",
        "category": "Blowpipe",
        "craftingLevel": 196,
        "maxLevel": 347,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(superior)",
        "materials": [
            {
                "quantity": 2,
                "material": "Sturdy Poplar Pole"
            },
            {
                "quantity": 2,
                "material": "Long Goat Horn"
            }
        ]
    },
    {
        "name": "Wooden Round Shield (superior)",
        "category": "Wooden Round Shield",
        "craftingLevel": 198,
        "maxLevel": 360,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(superior)",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Long Goat Horn"
            }
        ]
    },
    {
        "name": "Cudgel (superior)",
        "category": "Cudgel",
        "craftingLevel": 206,
        "maxLevel": 373,
        "url": "https://brightershoreswiki.org/w/Cudgel_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Long Goat Horn"
            }
        ]
    },
    {
        "name": "Javelins (superior)",
        "category": "Javelins",
        "craftingLevel": 219,
        "maxLevel": 379,
        "url": "https://brightershoreswiki.org/w/Javelins_(superior)",
        "materials": [
            {
                "quantity": 2,
                "material": "Sturdy Poplar Pole"
            },
            {
                "quantity": 4,
                "material": "Pristine Rams Horn"
            }
        ]
    },
    {
        "name": "Club (superior)",
        "category": "Club",
        "craftingLevel": 225,
        "maxLevel": 392,
        "url": "https://brightershoreswiki.org/w/Club_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Pristine Rams Horn"
            }
        ]
    },
    {
        "name": "Light Crossbow (superior)",
        "category": "Light Crossbow",
        "craftingLevel": 234,
        "maxLevel": 405,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(superior)",
        "materials": [
            {
                "quantity": 2,
                "material": "Sturdy Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Pristine Rams Horn"
            }
        ]
    },
    {
        "name": "Wooden Square Shield (superior)",
        "category": "Wooden Square Shield",
        "craftingLevel": 251,
        "maxLevel": 411,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(superior)",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Pristine Rams Horn"
            }
        ]
    },
    {
        "name": "Quarterstaff (superior)",
        "category": "Quarterstaff",
        "craftingLevel": 258,
        "maxLevel": 424,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Suave Pole"
            },
            {
                "quantity": 3,
                "material": "Jagged Bone Spike"
            }
        ]
    },
    {
        "name": "Recurve Bow (superior)",
        "category": "Recurve Bow",
        "craftingLevel": 270,
        "maxLevel": 437,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(superior)",
        "materials": [
            {
                "quantity": 2,
                "material": "Sturdy Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Jagged Bone Spike"
            }
        ]
    },
    {
        "name": "Spear (superior)",
        "category": "Spear",
        "craftingLevel": 283,
        "maxLevel": 450,
        "url": "https://brightershoreswiki.org/w/Spear_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Jagged Bone Spike"
            }
        ]
    },
    {
        "name": "Wooden Hexagon Shield (superior)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 296,
        "maxLevel": 456,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(superior)",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Sharp Femur Shard"
            }
        ]
    },
    {
        "name": "Longbow (superior)",
        "category": "Longbow",
        "craftingLevel": 303,
        "maxLevel": 469,
        "url": "https://brightershoreswiki.org/w/Longbow_(superior)",
        "materials": [
            {
                "quantity": 2,
                "material": "Sturdy Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Sharp Femur Shard"
            }
        ]
    },
    {
        "name": "Poleaxe (superior)",
        "category": "Poleaxe",
        "craftingLevel": 316,
        "maxLevel": 482,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Sharp Femur Shard"
            }
        ]
    },
    {
        "name": "Heavy Crossbow (superior)",
        "category": "Heavy Crossbow",
        "craftingLevel": 328,
        "maxLevel": 489,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(superior)",
        "materials": [
            {
                "quantity": 2,
                "material": "Sturdy Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Sharp Femur Shard"
            }
        ]
    },
    {
        "name": "Truncheon (perfect)",
        "category": "Truncheon",
        "craftingLevel": 335,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Truncheon_(perfect)",
        "materials": [
            {
                "quantity": 2,
                "material": "Perfect Oak Pole"
            },
            {
                "quantity": 4,
                "material": "Robust Goat Horn"
            }
        ]
    },
    {
        "name": "Blowpipe (perfect)",
        "category": "Blowpipe",
        "craftingLevel": 348,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Blowpipe_(perfect)",
        "materials": [
            {
                "quantity": 2,
                "material": "Perfect Poplar Pole"
            },
            {
                "quantity": 2,
                "material": "Robust Goat Horn"
            }
        ]
    },
    {
        "name": "Wooden Round Shield (perfect)",
        "category": "Wooden Round Shield",
        "craftingLevel": 361,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Wooden_Round_Shield_(perfect)",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Robust Goat Horn"
            }
        ]
    },
    {
        "name": "Cudgel (perfect)",
        "category": "Cudgel",
        "craftingLevel": 374,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Cudgel_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Robust Goat Horn"
            }
        ]
    },
    {
        "name": "Javelins (perfect)",
        "category": "Javelins",
        "craftingLevel": 380,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Javelins_(perfect)",
        "materials": [
            {
                "quantity": 2,
                "material": "Perfect Poplar Pole"
            },
            {
                "quantity": 4,
                "material": "Immaculate Rams Horn"
            }
        ]
    },
    {
        "name": "Club (perfect)",
        "category": "Club",
        "craftingLevel": 393,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Club_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Oak Pole"
            },
            {
                "quantity": 3,
                "material": "Pristine Rams Horn"
            }
        ]
    },
    {
        "name": "Light Crossbow (perfect)",
        "category": "Light Crossbow",
        "craftingLevel": 406,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Light_Crossbow_(perfect)",
        "materials": [
            {
                "quantity": 2,
                "material": "Perfect Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Immaculate Rams Horn"
            }
        ]
    },
    {
        "name": "Wooden Square Shield (perfect)",
        "category": "Wooden Square Shield",
        "craftingLevel": 412,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Wooden_Square_Shield_(perfect)",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Immaculate Rams Horn"
            }
        ]
    },
    {
        "name": "Quarterstaff (perfect)",
        "category": "Quarterstaff",
        "craftingLevel": 425,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Quarterstaff_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Suave Pole"
            },
            {
                "quantity": 3,
                "material": "Razor Bone Spike"
            }
        ]
    },
    {
        "name": "Recurve Bow (perfect)",
        "category": "Recurve Bow",
        "craftingLevel": 438,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Recurve_Bow_(perfect)",
        "materials": [
            {
                "quantity": 2,
                "material": "Perfect Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Razor Bone Spike"
            }
        ]
    },
    {
        "name": "Spear (perfect)",
        "category": "Spear",
        "craftingLevel": 451,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Spear_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Razor Bone Spike"
            }
        ]
    },
    {
        "name": "Wooden Hexagon Shield (perfect)",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 457,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Wooden_Hexagon_Shield_(perfect)",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Ash Plank"
            },
            {
                "quantity": 3,
                "material": "Chunky Femur Shard"
            }
        ]
    },
    {
        "name": "Longbow (perfect)",
        "category": "Longbow",
        "craftingLevel": 470,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Longbow_(perfect)",
        "materials": [
            {
                "quantity": 2,
                "material": "Perfect Juniper Stave"
            },
            {
                "quantity": 2,
                "material": "Chunky Femur Shard"
            }
        ]
    },
    {
        "name": "Poleaxe (perfect)",
        "category": "Poleaxe",
        "craftingLevel": 483,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Poleaxe_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Chunky Femur Shard"
            }
        ]
    },
    {
        "name": "Heavy Crossbow (perfect)",
        "category": "Heavy Crossbow",
        "craftingLevel": 490,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Heavy_Crossbow_(perfect)",
        "materials": [
            {
                "quantity": 2,
                "material": "Perfect Juniper Stave"
            },
            {
                "quantity": 4,
                "material": "Chunky Femur Shard"
            }
        ]
    }
];

export const hammermageEquipment: Equipment[] = [
    {
        "name": "Hammerfist (basic)",
        "category": "Hammerfist",
        "craftingLevel": 0,
        "maxLevel": 37,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Coarse Flint"
            }
        ]
    },
    {
        "name": "Throwing Stones (basic)",
        "category": "Throwing Stones",
        "craftingLevel": 2,
        "maxLevel": 39,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(basic)",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Flint"
            }
        ]
    },
    {
        "name": "Stone Slab Shield (basic)",
        "category": "Stone Slab Shield",
        "craftingLevel": 4,
        "maxLevel": 43,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(basic)",
        "materials": [
            {
                "quantity": 4,
                "material": "Coarse Flint"
            }
        ]
    },
    {
        "name": "Stone Mace (basic)",
        "category": "Stone Mace",
        "craftingLevel": 6,
        "maxLevel": 47,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Coarse Basalt"
            }
        ]
    },
    {
        "name": "Stone Discs (basic)",
        "category": "Stone Discs",
        "craftingLevel": 8,
        "maxLevel": 49,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(basic)",
        "materials": [
            {
                "quantity": 4,
                "material": "Coarse Basalt"
            }
        ]
    },
    {
        "name": "War Hammer (basic)",
        "category": "War Hammer",
        "craftingLevel": 10,
        "maxLevel": 53,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Hickory Pole"
            },
            {
                "quantity": 3,
                "material": "Coarse Basalt"
            }
        ]
    },
    {
        "name": "Bolas (basic)",
        "category": "Bolas",
        "craftingLevel": 12,
        "maxLevel": 57,
        "url": "https://brightershoreswiki.org/w/Bolas_(basic)",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Andesite"
            }
        ]
    },
    {
        "name": "Stone Chunk Shield (basic)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 14,
        "maxLevel": 59,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(basic)",
        "materials": [
            {
                "quantity": 4,
                "material": "Coarse Andesite"
            }
        ]
    },
    {
        "name": "Double Headed Hammer (basic)",
        "category": "Double Headed Hammer",
        "craftingLevel": 16,
        "maxLevel": 64,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Coarse Andesite"
            }
        ]
    },
    {
        "name": "Throwing Clubs (basic)",
        "category": "Throwing Clubs",
        "craftingLevel": 18,
        "maxLevel": 68,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(basic)",
        "materials": [
            {
                "quantity": 5,
                "material": "Coarse Granite"
            }
        ]
    },
    {
        "name": "Great Stone Mace (basic)",
        "category": "Great Stone Mace",
        "craftingLevel": 22,
        "maxLevel": 70,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Coarse Granite"
            }
        ]
    },
    {
        "name": "Polished Stone Shield (basic)",
        "category": "Polished Stone Shield",
        "craftingLevel": 24,
        "maxLevel": 74,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(basic)",
        "materials": [
            {
                "quantity": 5,
                "material": "Coarse Granite"
            }
        ]
    },
    {
        "name": "Throwing Hammers (basic)",
        "category": "Throwing Hammers",
        "craftingLevel": 28,
        "maxLevel": 78,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(basic)",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Pine Pole"
            },
            {
                "quantity": 2,
                "material": "Coarse Deathstone"
            }
        ]
    },
    {
        "name": "Great Hammer (basic)",
        "category": "Great Hammer",
        "craftingLevel": 30,
        "maxLevel": 80,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(basic)",
        "materials": [
            {
                "quantity": 1,
                "material": "Coarse Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Coarse Deathstone"
            }
        ]
    },
    {
        "name": "Sling (basic)",
        "category": "Sling",
        "craftingLevel": 34,
        "maxLevel": 84,
        "url": "https://brightershoreswiki.org/w/Sling_(basic)",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Deathstone"
            }
        ]
    },
    {
        "name": "Hammerfist (moderate)",
        "category": "Hammerfist",
        "craftingLevel": 38,
        "maxLevel": 86,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Rugged Flint"
            }
        ]
    },
    {
        "name": "Throwing Stones (moderate)",
        "category": "Throwing Stones",
        "craftingLevel": 40,
        "maxLevel": 90,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(moderate)",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Flint"
            }
        ]
    },
    {
        "name": "Stone Slab Shield (moderate)",
        "category": "Stone Slab Shield",
        "craftingLevel": 44,
        "maxLevel": 94,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(moderate)",
        "materials": [
            {
                "quantity": 4,
                "material": "Rugged Flint"
            }
        ]
    },
    {
        "name": "Stone Mace (moderate)",
        "category": "Stone Mace",
        "craftingLevel": 48,
        "maxLevel": 96,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Rugged Basalt"
            }
        ]
    },
    {
        "name": "Stone Discs (moderate)",
        "category": "Stone Discs",
        "craftingLevel": 50,
        "maxLevel": 100,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(moderate)",
        "materials": [
            {
                "quantity": 4,
                "material": "Rugged Basalt"
            }
        ]
    },
    {
        "name": "War Hammer (moderate)",
        "category": "War Hammer",
        "craftingLevel": 54,
        "maxLevel": 104,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Hickory Pole"
            },
            {
                "quantity": 3,
                "material": "Rugged Basalt"
            }
        ]
    },
    {
        "name": "Bolas (moderate)",
        "category": "Bolas",
        "craftingLevel": 58,
        "maxLevel": 106,
        "url": "https://brightershoreswiki.org/w/Bolas_(moderate)",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Andesite"
            }
        ]
    },
    {
        "name": "Stone Chunk Shield (moderate)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 60,
        "maxLevel": 111,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(moderate)",
        "materials": [
            {
                "quantity": 4,
                "material": "Rugged Andesite"
            }
        ]
    },
    {
        "name": "Double Headed Hammer (moderate)",
        "category": "Double Headed Hammer",
        "craftingLevel": 65,
        "maxLevel": 115,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Rugged Andesite"
            }
        ]
    },
    {
        "name": "Throwing Clubs (moderate)",
        "category": "Throwing Clubs",
        "craftingLevel": 69,
        "maxLevel": 117,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(moderate)",
        "materials": [
            {
                "quantity": 5,
                "material": "Rugged Granite"
            }
        ]
    },
    {
        "name": "Great Stone Mace (moderate)",
        "category": "Great Stone Mace",
        "craftingLevel": 71,
        "maxLevel": 121,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Rugged Granite"
            }
        ]
    },
    {
        "name": "Polished Stone Shield (moderate)",
        "category": "Polished Stone Shield",
        "craftingLevel": 75,
        "maxLevel": 125,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(moderate)",
        "materials": [
            {
                "quantity": 5,
                "material": "Rugged Granite"
            }
        ]
    },
    {
        "name": "Throwing Hammers (moderate)",
        "category": "Throwing Hammers",
        "craftingLevel": 79,
        "maxLevel": 127,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(moderate)",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Pine Pole"
            },
            {
                "quantity": 2,
                "material": "Rugged Deathstone"
            }
        ]
    },
    {
        "name": "Great Hammer (moderate)",
        "category": "Great Hammer",
        "craftingLevel": 81,
        "maxLevel": 131,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(moderate)",
        "materials": [
            {
                "quantity": 1,
                "material": "Rugged Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Rugged Deathstone"
            }
        ]
    },
    {
        "name": "Sling (moderate)",
        "category": "Sling",
        "craftingLevel": 85,
        "maxLevel": 135,
        "url": "https://brightershoreswiki.org/w/Sling_(moderate)",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Deathstone"
            }
        ]
    },
    {
        "name": "Hammerfist (fine)",
        "category": "Hammerfist",
        "craftingLevel": 87,
        "maxLevel": 137,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Average Flint"
            }
        ]
    },
    {
        "name": "Throwing Stones (fine)",
        "category": "Throwing Stones",
        "craftingLevel": 91,
        "maxLevel": 141,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(fine)",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Flint"
            }
        ]
    },
    {
        "name": "Stone Slab Shield (fine)",
        "category": "Stone Slab Shield",
        "craftingLevel": 95,
        "maxLevel": 145,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(fine)",
        "materials": [
            {
                "quantity": 4,
                "material": "Average Flint"
            }
        ]
    },
    {
        "name": "Stone Mace (fine)",
        "category": "Stone Mace",
        "craftingLevel": 97,
        "maxLevel": 147,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Average Basalt"
            }
        ]
    },
    {
        "name": "Stone Discs (fine)",
        "category": "Stone Discs",
        "craftingLevel": 101,
        "maxLevel": 151,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(fine)",
        "materials": [
            {
                "quantity": 4,
                "material": "Average Basalt"
            }
        ]
    },
    {
        "name": "War Hammer (fine)",
        "category": "War Hammer",
        "craftingLevel": 105,
        "maxLevel": 156,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Hickory Pole"
            },
            {
                "quantity": 3,
                "material": "Average Basalt"
            }
        ]
    },
    {
        "name": "Bolas (fine)",
        "category": "Bolas",
        "craftingLevel": 107,
        "maxLevel": 158,
        "url": "https://brightershoreswiki.org/w/Bolas_(fine)",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Andesite"
            }
        ]
    },
    {
        "name": "Stone Chunk Shield (fine)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 112,
        "maxLevel": 162,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(fine)",
        "materials": [
            {
                "quantity": 4,
                "material": "Average Andesite"
            }
        ]
    },
    {
        "name": "Double Headed Hammer (fine)",
        "category": "Double Headed Hammer",
        "craftingLevel": 116,
        "maxLevel": 166,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Average Andesite"
            }
        ]
    },
    {
        "name": "Throwing Clubs (fine)",
        "category": "Throwing Clubs",
        "craftingLevel": 118,
        "maxLevel": 168,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(fine)",
        "materials": [
            {
                "quantity": 5,
                "material": "Average Granite"
            }
        ]
    },
    {
        "name": "Great Stone Mace (fine)",
        "category": "Great Stone Mace",
        "craftingLevel": 122,
        "maxLevel": 172,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Average Granite"
            }
        ]
    },
    {
        "name": "Polished Stone Shield (fine)",
        "category": "Polished Stone Shield",
        "craftingLevel": 126,
        "maxLevel": 176,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(fine)",
        "materials": [
            {
                "quantity": 5,
                "material": "Average Granite"
            }
        ]
    },
    {
        "name": "Throwing Hammers (fine)",
        "category": "Throwing Hammers",
        "craftingLevel": 128,
        "maxLevel": 178,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(fine)",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Pine Pole"
            },
            {
                "quantity": 2,
                "material": "Average Deathstone"
            }
        ]
    },
    {
        "name": "Great Hammer (fine)",
        "category": "Great Hammer",
        "craftingLevel": 132,
        "maxLevel": 182,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(fine)",
        "materials": [
            {
                "quantity": 1,
                "material": "Average Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Average Deathstone"
            }
        ]
    },
    {
        "name": "Sling (fine)",
        "category": "Sling",
        "craftingLevel": 136,
        "maxLevel": 186,
        "url": "https://brightershoreswiki.org/w/Sling_(fine)",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Deathstone"
            }
        ]
    },
    {
        "name": "Hammerfist (strong)",
        "category": "Hammerfist",
        "craftingLevel": 138,
        "maxLevel": 188,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Fine Flint"
            }
        ]
    },
    {
        "name": "Throwing Stones (strong)",
        "category": "Throwing Stones",
        "craftingLevel": 142,
        "maxLevel": 192,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(strong)",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Flint"
            }
        ]
    },
    {
        "name": "Stone Slab Shield (strong)",
        "category": "Stone Slab Shield",
        "craftingLevel": 146,
        "maxLevel": 196,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(strong)",
        "materials": [
            {
                "quantity": 4,
                "material": "Fine Flint"
            }
        ]
    },
    {
        "name": "Stone Mace (strong)",
        "category": "Stone Mace",
        "craftingLevel": 148,
        "maxLevel": 199,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Fine Basalt"
            }
        ]
    },
    {
        "name": "Stone Discs (strong)",
        "category": "Stone Discs",
        "craftingLevel": 152,
        "maxLevel": 212,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(strong)",
        "materials": [
            {
                "quantity": 4,
                "material": "Fine Basalt"
            }
        ]
    },
    {
        "name": "War Hammer (strong)",
        "category": "War Hammer",
        "craftingLevel": 157,
        "maxLevel": 225,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Hickory Pole"
            },
            {
                "quantity": 3,
                "material": "Fine Basalt"
            }
        ]
    },
    {
        "name": "Bolas (strong)",
        "category": "Bolas",
        "craftingLevel": 159,
        "maxLevel": 232,
        "url": "https://brightershoreswiki.org/w/Bolas_(strong)",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Andesite"
            }
        ]
    },
    {
        "name": "Stone Chunk Shield (strong)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 163,
        "maxLevel": 246,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(strong)",
        "materials": [
            {
                "quantity": 4,
                "material": "Fine Andesite"
            }
        ]
    },
    {
        "name": "Double Headed Hammer (strong)",
        "category": "Double Headed Hammer",
        "craftingLevel": 167,
        "maxLevel": 259,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Fine Andesite"
            }
        ]
    },
    {
        "name": "Throwing Clubs (strong)",
        "category": "Throwing Clubs",
        "craftingLevel": 169,
        "maxLevel": 266,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(strong)",
        "materials": [
            {
                "quantity": 5,
                "material": "Fine Granite"
            }
        ]
    },
    {
        "name": "Great Stone Mace (strong)",
        "category": "Great Stone Mace",
        "craftingLevel": 173,
        "maxLevel": 279,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Fine Granite"
            }
        ]
    },
    {
        "name": "Polished Stone Shield (strong)",
        "category": "Polished Stone Shield",
        "craftingLevel": 177,
        "maxLevel": 286,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(strong)",
        "materials": [
            {
                "quantity": 5,
                "material": "Fine Granite"
            }
        ]
    },
    {
        "name": "Throwing Hammers (strong)",
        "category": "Throwing Hammers",
        "craftingLevel": 179,
        "maxLevel": 300,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(strong)",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Pine Pole"
            },
            {
                "quantity": 2,
                "material": "Fine Deathstone"
            }
        ]
    },
    {
        "name": "Great Hammer (strong)",
        "category": "Great Hammer",
        "craftingLevel": 183,
        "maxLevel": 313,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(strong)",
        "materials": [
            {
                "quantity": 1,
                "material": "Fine Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Fine Deathstone"
            }
        ]
    },
    {
        "name": "Sling (strong)",
        "category": "Sling",
        "craftingLevel": 187,
        "maxLevel": 320,
        "url": "https://brightershoreswiki.org/w/Sling_(strong)",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Deathstone"
            }
        ]
    },
    {
        "name": "Hammerfist (superior)",
        "category": "Hammerfist",
        "craftingLevel": 189,
        "maxLevel": 333,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Sturdy Flint"
            }
        ]
    },
    {
        "name": "Throwing Stones (superior)",
        "category": "Throwing Stones",
        "craftingLevel": 193,
        "maxLevel": 347,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(superior)",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Flint"
            }
        ]
    },
    {
        "name": "Stone Slab Shield (superior)",
        "category": "Stone Slab Shield",
        "craftingLevel": 197,
        "maxLevel": 354,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(superior)",
        "materials": [
            {
                "quantity": 4,
                "material": "Sturdy Flint"
            }
        ]
    },
    {
        "name": "Stone Mace (superior)",
        "category": "Stone Mace",
        "craftingLevel": 200,
        "maxLevel": 367,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Sturdy Basalt"
            }
        ]
    },
    {
        "name": "Stone Discs (superior)",
        "category": "Stone Discs",
        "craftingLevel": 213,
        "maxLevel": 381,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(superior)",
        "materials": [
            {
                "quantity": 4,
                "material": "Sturdy Basalt"
            }
        ]
    },
    {
        "name": "War Hammer (superior)",
        "category": "War Hammer",
        "craftingLevel": 226,
        "maxLevel": 387,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Hickory Pole"
            },
            {
                "quantity": 3,
                "material": "Sturdy Basalt"
            }
        ]
    },
    {
        "name": "Bolas (superior)",
        "category": "Bolas",
        "craftingLevel": 233,
        "maxLevel": 401,
        "url": "https://brightershoreswiki.org/w/Bolas_(superior)",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Andesite"
            }
        ]
    },
    {
        "name": "Stone Chunk Shield (superior)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 247,
        "maxLevel": 414,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(superior)",
        "materials": [
            {
                "quantity": 4,
                "material": "Sturdy Andesite"
            }
        ]
    },
    {
        "name": "Double Headed Hammer (superior)",
        "category": "Double Headed Hammer",
        "craftingLevel": 260,
        "maxLevel": 421,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Sturdy Andesite"
            }
        ]
    },
    {
        "name": "Throwing Clubs (superior)",
        "category": "Throwing Clubs",
        "craftingLevel": 267,
        "maxLevel": 435,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(superior)",
        "materials": [
            {
                "quantity": 5,
                "material": "Sturdy Granite"
            }
        ]
    },
    {
        "name": "Great Stone Mace (superior)",
        "category": "Great Stone Mace",
        "craftingLevel": 280,
        "maxLevel": 448,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Sturdy Granite"
            }
        ]
    },
    {
        "name": "Polished Stone Shield (superior)",
        "category": "Polished Stone Shield",
        "craftingLevel": 287,
        "maxLevel": 455,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(superior)",
        "materials": [
            {
                "quantity": 5,
                "material": "Sturdy Granite"
            }
        ]
    },
    {
        "name": "Throwing Hammers (superior)",
        "category": "Throwing Hammers",
        "craftingLevel": 301,
        "maxLevel": 468,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(superior)",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Pine Pole"
            },
            {
                "quantity": 2,
                "material": "Sturdy Deathstone"
            }
        ]
    },
    {
        "name": "Great Hammer (superior)",
        "category": "Great Hammer",
        "craftingLevel": 314,
        "maxLevel": 482,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(superior)",
        "materials": [
            {
                "quantity": 1,
                "material": "Sturdy Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Sturdy Deathstone"
            }
        ]
    },
    {
        "name": "Sling (superior)",
        "category": "Sling",
        "craftingLevel": 321,
        "maxLevel": 489,
        "url": "https://brightershoreswiki.org/w/Sling_(superior)",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Deathstone"
            }
        ]
    },
    {
        "name": "Hammerfist (perfect)",
        "category": "Hammerfist",
        "craftingLevel": 334,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Hammerfist_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Perfect Flint"
            }
        ]
    },
    {
        "name": "Throwing Stones (perfect)",
        "category": "Throwing Stones",
        "craftingLevel": 348,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Stones_(perfect)",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Flint"
            }
        ]
    },
    {
        "name": "Stone Slab Shield (perfect)",
        "category": "Stone Slab Shield",
        "craftingLevel": 355,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Stone_Slab_Shield_(perfect)",
        "materials": [
            {
                "quantity": 4,
                "material": "Perfect Flint"
            }
        ]
    },
    {
        "name": "Stone Mace (perfect)",
        "category": "Stone Mace",
        "craftingLevel": 368,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Stone_Mace_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Hickory Pole"
            },
            {
                "quantity": 2,
                "material": "Perfect Basalt"
            }
        ]
    },
    {
        "name": "Stone Discs (perfect)",
        "category": "Stone Discs",
        "craftingLevel": 382,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Stone_Discs_(perfect)",
        "materials": [
            {
                "quantity": 4,
                "material": "Perfect Basalt"
            }
        ]
    },
    {
        "name": "War Hammer (perfect)",
        "category": "War Hammer",
        "craftingLevel": 388,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/War_Hammer_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Hickory Pole"
            },
            {
                "quantity": 3,
                "material": "Perfect Basalt"
            }
        ]
    },
    {
        "name": "Bolas (perfect)",
        "category": "Bolas",
        "craftingLevel": 402,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Bolas_(perfect)",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Andesite"
            }
        ]
    },
    {
        "name": "Stone Chunk Shield (perfect)",
        "category": "Stone Chunk Shield",
        "craftingLevel": 415,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Stone_Chunk_Shield_(perfect)",
        "materials": [
            {
                "quantity": 4,
                "material": "Perfect Andesite"
            }
        ]
    },
    {
        "name": "Double Headed Hammer (perfect)",
        "category": "Double Headed Hammer",
        "craftingLevel": 422,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Double_Headed_Hammer_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Perfect Andesite"
            }
        ]
    },
    {
        "name": "Throwing Clubs (perfect)",
        "category": "Throwing Clubs",
        "craftingLevel": 436,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Clubs_(perfect)",
        "materials": [
            {
                "quantity": 5,
                "material": "Perfect Granite"
            }
        ]
    },
    {
        "name": "Great Stone Mace (perfect)",
        "category": "Great Stone Mace",
        "craftingLevel": 449,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Great_Stone_Mace_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Suave Pole"
            },
            {
                "quantity": 4,
                "material": "Perfect Granite"
            }
        ]
    },
    {
        "name": "Polished Stone Shield (perfect)",
        "category": "Polished Stone Shield",
        "craftingLevel": 456,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Polished_Stone_Shield_(perfect)",
        "materials": [
            {
                "quantity": 5,
                "material": "Perfect Granite"
            }
        ]
    },
    {
        "name": "Throwing Hammers (perfect)",
        "category": "Throwing Hammers",
        "craftingLevel": 469,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Throwing_Hammers_(perfect)",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Pine Pole"
            },
            {
                "quantity": 2,
                "material": "Perfect Deathstone"
            }
        ]
    },
    {
        "name": "Great Hammer (perfect)",
        "category": "Great Hammer",
        "craftingLevel": 483,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Great_Hammer_(perfect)",
        "materials": [
            {
                "quantity": 1,
                "material": "Perfect Yew Pole"
            },
            {
                "quantity": 4,
                "material": "Perfect Deathstone"
            }
        ]
    },
    {
        "name": "Sling (perfect)",
        "category": "Sling",
        "craftingLevel": 490,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/Sling_(perfect)",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Deathstone"
            }
        ]
    }
];
