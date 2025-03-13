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

export function categoryByName(category: string): EquipmentCategory | null {
    return categoriesByName.get(category) || null;
}

export interface Equipment {
    name: string;
    category: string;
    craftingLevel: number;
    minLevel: number;
    maxLevel: number;
    url: string;
    materials: {
        quantity: number;
        material: string;
    }[]
}

export const cryoknightEquipment: Equipment[] = [
    {
        "name": "0 to 180 Rapier",
        "category": "Rapier",
        "craftingLevel": 0,
        "minLevel": 0,
        "maxLevel": 180,
        "url": "https://brightershoreswiki.org/w/0_to_180_Rapier",
        "materials": [
            {
                "quantity": 4,
                "material": "Laterite Iron Ore"
            }
        ]
    },
    {
        "name": "0 to 200 Throwing Twinblades",
        "category": "Throwing Twinblades",
        "craftingLevel": 2,
        "minLevel": 0,
        "maxLevel": 200,
        "url": "https://brightershoreswiki.org/w/0_to_200_Throwing_Twinblades",
        "materials": [
            {
                "quantity": 4,
                "material": "Laterite Iron Ore"
            }
        ]
    },
    {
        "name": "0 to 220 Metal Kite Shield",
        "category": "Metal Kite Shield",
        "craftingLevel": 4,
        "minLevel": 0,
        "maxLevel": 220,
        "url": "https://brightershoreswiki.org/w/0_to_220_Metal_Kite_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Laterite Iron Ore"
            }
        ]
    },
    {
        "name": "0 to 230 Flanged Mace",
        "category": "Flanged Mace",
        "craftingLevel": 6,
        "minLevel": 0,
        "maxLevel": 230,
        "url": "https://brightershoreswiki.org/w/0_to_230_Flanged_Mace",
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
        "name": "0 to 255 Throwing Rings",
        "category": "Throwing Rings",
        "craftingLevel": 8,
        "minLevel": 0,
        "maxLevel": 255,
        "url": "https://brightershoreswiki.org/w/0_to_255_Throwing_Rings",
        "materials": [
            {
                "quantity": 4,
                "material": "Folrian Cabranese Ore"
            }
        ]
    },
    {
        "name": "0 to 265 Shortsword",
        "category": "Shortsword",
        "craftingLevel": 10,
        "minLevel": 0,
        "maxLevel": 265,
        "url": "https://brightershoreswiki.org/w/0_to_265_Shortsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Folrian Cabranese Ore"
            }
        ]
    },
    {
        "name": "0 to 285 Metal Javelins",
        "category": "Metal Javelins",
        "craftingLevel": 12,
        "minLevel": 0,
        "maxLevel": 285,
        "url": "https://brightershoreswiki.org/w/0_to_285_Metal_Javelins",
        "materials": [
            {
                "quantity": 5,
                "material": "Folrian Cabranese Ore"
            }
        ]
    },
    {
        "name": "0 to 305 Metal Heater Shield",
        "category": "Metal Heater Shield",
        "craftingLevel": 14,
        "minLevel": 0,
        "maxLevel": 305,
        "url": "https://brightershoreswiki.org/w/0_to_305_Metal_Heater_Shield",
        "materials": [
            {
                "quantity": 6,
                "material": "Folrian Cabranese Ore"
            }
        ]
    },
    {
        "name": "0 to 315 Longsword",
        "category": "Longsword",
        "craftingLevel": 16,
        "minLevel": 0,
        "maxLevel": 315,
        "url": "https://brightershoreswiki.org/w/0_to_315_Longsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Sylentnite Flantium Ore"
            }
        ]
    },
    {
        "name": "0 to 340 Throwing Knives",
        "category": "Throwing Knives",
        "craftingLevel": 18,
        "minLevel": 0,
        "maxLevel": 340,
        "url": "https://brightershoreswiki.org/w/0_to_340_Throwing_Knives",
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
        "name": "0 to 350 Broadsword",
        "category": "Broadsword",
        "craftingLevel": 22,
        "minLevel": 0,
        "maxLevel": 350,
        "url": "https://brightershoreswiki.org/w/0_to_350_Broadsword",
        "materials": [
            {
                "quantity": 6,
                "material": "Sylentnite Flantium Ore"
            }
        ]
    },
    {
        "name": "0 to 370 Metal Buckler",
        "category": "Metal Buckler",
        "craftingLevel": 24,
        "minLevel": 0,
        "maxLevel": 370,
        "url": "https://brightershoreswiki.org/w/0_to_370_Metal_Buckler",
        "materials": [
            {
                "quantity": 4,
                "material": "Maloic Adathril Ore"
            }
        ]
    },
    {
        "name": "0 to 395 Throwing Axes",
        "category": "Throwing Axes",
        "craftingLevel": 28,
        "minLevel": 0,
        "maxLevel": 395,
        "url": "https://brightershoreswiki.org/w/0_to_395_Throwing_Axes",
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
        "name": "0 to 405 Battleaxe",
        "category": "Battleaxe",
        "craftingLevel": 30,
        "minLevel": 0,
        "maxLevel": 405,
        "url": "https://brightershoreswiki.org/w/0_to_405_Battleaxe",
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
        "name": "0 to 425 Metal Bow",
        "category": "Metal Bow",
        "craftingLevel": 34,
        "minLevel": 0,
        "maxLevel": 425,
        "url": "https://brightershoreswiki.org/w/0_to_425_Metal_Bow",
        "materials": [
            {
                "quantity": 6,
                "material": "Maloic Adathril Ore"
            }
        ]
    },
    {
        "name": "181 to 435 Rapier",
        "category": "Rapier",
        "craftingLevel": 37,
        "minLevel": 181,
        "maxLevel": 435,
        "url": "https://brightershoreswiki.org/w/181_to_435_Rapier",
        "materials": [
            {
                "quantity": 4,
                "material": "Limonite Iron Ore"
            }
        ]
    },
    {
        "name": "201 to 455 Throwing Twinblades",
        "category": "Throwing Twinblades",
        "craftingLevel": 41,
        "minLevel": 201,
        "maxLevel": 455,
        "url": "https://brightershoreswiki.org/w/201_to_455_Throwing_Twinblades",
        "materials": [
            {
                "quantity": 4,
                "material": "Limonite Iron Ore"
            }
        ]
    },
    {
        "name": "221 to 480 Metal Kite Shield",
        "category": "Metal Kite Shield",
        "craftingLevel": 45,
        "minLevel": 221,
        "maxLevel": 480,
        "url": "https://brightershoreswiki.org/w/221_to_480_Metal_Kite_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Limonite Iron Ore"
            }
        ]
    },
    {
        "name": "231 to 490 Flanged Mace",
        "category": "Flanged Mace",
        "craftingLevel": 47,
        "minLevel": 231,
        "maxLevel": 490,
        "url": "https://brightershoreswiki.org/w/231_to_490_Flanged_Mace",
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
        "name": "256 to 510 Throwing Rings",
        "category": "Throwing Rings",
        "craftingLevel": 52,
        "minLevel": 256,
        "maxLevel": 510,
        "url": "https://brightershoreswiki.org/w/256_to_510_Throwing_Rings",
        "materials": [
            {
                "quantity": 4,
                "material": "Aulsian Cabranese Ore"
            }
        ]
    },
    {
        "name": "266 to 520 Shortsword",
        "category": "Shortsword",
        "craftingLevel": 54,
        "minLevel": 266,
        "maxLevel": 520,
        "url": "https://brightershoreswiki.org/w/266_to_520_Shortsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Aulsian Cabranese Ore"
            }
        ]
    },
    {
        "name": "286 to 545 Metal Javelins",
        "category": "Metal Javelins",
        "craftingLevel": 58,
        "minLevel": 286,
        "maxLevel": 545,
        "url": "https://brightershoreswiki.org/w/286_to_545_Metal_Javelins",
        "materials": [
            {
                "quantity": 5,
                "material": "Aulsian Cabranese Ore"
            }
        ]
    },
    {
        "name": "306 to 565 Metal Heater Shield",
        "category": "Metal Heater Shield",
        "craftingLevel": 62,
        "minLevel": 306,
        "maxLevel": 565,
        "url": "https://brightershoreswiki.org/w/306_to_565_Metal_Heater_Shield",
        "materials": [
            {
                "quantity": 6,
                "material": "Aulsian Cabranese Ore"
            }
        ]
    },
    {
        "name": "316 to 575 Longsword",
        "category": "Longsword",
        "craftingLevel": 64,
        "minLevel": 316,
        "maxLevel": 575,
        "url": "https://brightershoreswiki.org/w/316_to_575_Longsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Yehrite Flantium Ore"
            }
        ]
    },
    {
        "name": "341 to 595 Throwing Knives",
        "category": "Throwing Knives",
        "craftingLevel": 69,
        "minLevel": 341,
        "maxLevel": 595,
        "url": "https://brightershoreswiki.org/w/341_to_595_Throwing_Knives",
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
        "name": "351 to 620 Broadsword",
        "category": "Broadsword",
        "craftingLevel": 71,
        "minLevel": 351,
        "maxLevel": 620,
        "url": "https://brightershoreswiki.org/w/351_to_620_Broadsword",
        "materials": [
            {
                "quantity": 6,
                "material": "Yehrite Flantium Ore"
            }
        ]
    },
    {
        "name": "371 to 630 Metal Buckler",
        "category": "Metal Buckler",
        "craftingLevel": 75,
        "minLevel": 371,
        "maxLevel": 630,
        "url": "https://brightershoreswiki.org/w/371_to_630_Metal_Buckler",
        "materials": [
            {
                "quantity": 4,
                "material": "Rigic Adathril Ore"
            }
        ]
    },
    {
        "name": "396 to 650 Throwing Axes",
        "category": "Throwing Axes",
        "craftingLevel": 80,
        "minLevel": 396,
        "maxLevel": 650,
        "url": "https://brightershoreswiki.org/w/396_to_650_Throwing_Axes",
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
        "name": "406 to 660 Battleaxe",
        "category": "Battleaxe",
        "craftingLevel": 82,
        "minLevel": 406,
        "maxLevel": 660,
        "url": "https://brightershoreswiki.org/w/406_to_660_Battleaxe",
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
        "name": "426 to 680 Metal Bow",
        "category": "Metal Bow",
        "craftingLevel": 86,
        "minLevel": 426,
        "maxLevel": 680,
        "url": "https://brightershoreswiki.org/w/426_to_680_Metal_Bow",
        "materials": [
            {
                "quantity": 6,
                "material": "Rigic Adathril Ore"
            }
        ]
    },
    {
        "name": "436 to 705 Rapier",
        "category": "Rapier",
        "craftingLevel": 88,
        "minLevel": 436,
        "maxLevel": 705,
        "url": "https://brightershoreswiki.org/w/436_to_705_Rapier",
        "materials": [
            {
                "quantity": 4,
                "material": "Goethite Iron Ore"
            }
        ]
    },
    {
        "name": "456 to 715 Throwing Twinblades",
        "category": "Throwing Twinblades",
        "craftingLevel": 92,
        "minLevel": 456,
        "maxLevel": 715,
        "url": "https://brightershoreswiki.org/w/456_to_715_Throwing_Twinblades",
        "materials": [
            {
                "quantity": 4,
                "material": "Goethite Iron Ore"
            }
        ]
    },
    {
        "name": "481 to 735 Metal Kite Shield",
        "category": "Metal Kite Shield",
        "craftingLevel": 97,
        "minLevel": 481,
        "maxLevel": 735,
        "url": "https://brightershoreswiki.org/w/481_to_735_Metal_Kite_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Goethite Iron Ore"
            }
        ]
    },
    {
        "name": "491 to 745 Flanged Mace",
        "category": "Flanged Mace",
        "craftingLevel": 99,
        "minLevel": 491,
        "maxLevel": 745,
        "url": "https://brightershoreswiki.org/w/491_to_745_Flanged_Mace",
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
        "name": "511 to 765 Throwing Rings",
        "category": "Throwing Rings",
        "craftingLevel": 103,
        "minLevel": 511,
        "maxLevel": 765,
        "url": "https://brightershoreswiki.org/w/511_to_765_Throwing_Rings",
        "materials": [
            {
                "quantity": 4,
                "material": "Babian Cabranese Ore"
            }
        ]
    },
    {
        "name": "521 to 790 Shortsword",
        "category": "Shortsword",
        "craftingLevel": 105,
        "minLevel": 521,
        "maxLevel": 790,
        "url": "https://brightershoreswiki.org/w/521_to_790_Shortsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Babian Cabranese Ore"
            }
        ]
    },
    {
        "name": "546 to 800 Metal Javelins",
        "category": "Metal Javelins",
        "craftingLevel": 110,
        "minLevel": 546,
        "maxLevel": 800,
        "url": "https://brightershoreswiki.org/w/546_to_800_Metal_Javelins",
        "materials": [
            {
                "quantity": 5,
                "material": "Babian Cabranese Ore"
            }
        ]
    },
    {
        "name": "566 to 820 Metal Heater Shield",
        "category": "Metal Heater Shield",
        "craftingLevel": 114,
        "minLevel": 566,
        "maxLevel": 820,
        "url": "https://brightershoreswiki.org/w/566_to_820_Metal_Heater_Shield",
        "materials": [
            {
                "quantity": 6,
                "material": "Babian Cabranese Ore"
            }
        ]
    },
    {
        "name": "576 to 830 Longsword",
        "category": "Longsword",
        "craftingLevel": 116,
        "minLevel": 576,
        "maxLevel": 830,
        "url": "https://brightershoreswiki.org/w/576_to_830_Longsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Holmitite Flantium Ore"
            }
        ]
    },
    {
        "name": "596 to 855 Throwing Knives",
        "category": "Throwing Knives",
        "craftingLevel": 120,
        "minLevel": 596,
        "maxLevel": 855,
        "url": "https://brightershoreswiki.org/w/596_to_855_Throwing_Knives",
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
        "name": "621 to 875 Broadsword",
        "category": "Broadsword",
        "craftingLevel": 125,
        "minLevel": 621,
        "maxLevel": 875,
        "url": "https://brightershoreswiki.org/w/621_to_875_Broadsword",
        "materials": [
            {
                "quantity": 6,
                "material": "Holmitite Flantium Ore"
            }
        ]
    },
    {
        "name": "631 to 885 Metal Buckler",
        "category": "Metal Buckler",
        "craftingLevel": 127,
        "minLevel": 631,
        "maxLevel": 885,
        "url": "https://brightershoreswiki.org/w/631_to_885_Metal_Buckler",
        "materials": [
            {
                "quantity": 4,
                "material": "Portoic Adathril Ore"
            }
        ]
    },
    {
        "name": "651 to 905 Throwing Axes",
        "category": "Throwing Axes",
        "craftingLevel": 131,
        "minLevel": 651,
        "maxLevel": 905,
        "url": "https://brightershoreswiki.org/w/651_to_905_Throwing_Axes",
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
        "name": "661 to 915 Battleaxe",
        "category": "Battleaxe",
        "craftingLevel": 133,
        "minLevel": 661,
        "maxLevel": 915,
        "url": "https://brightershoreswiki.org/w/661_to_915_Battleaxe",
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
        "name": "681 to 940 Metal Bow",
        "category": "Metal Bow",
        "craftingLevel": 137,
        "minLevel": 681,
        "maxLevel": 940,
        "url": "https://brightershoreswiki.org/w/681_to_940_Metal_Bow",
        "materials": [
            {
                "quantity": 6,
                "material": "Portoic Adathril Ore"
            }
        ]
    },
    {
        "name": "706 to 960 Rapier",
        "category": "Rapier",
        "craftingLevel": 142,
        "minLevel": 706,
        "maxLevel": 960,
        "url": "https://brightershoreswiki.org/w/706_to_960_Rapier",
        "materials": [
            {
                "quantity": 4,
                "material": "Hematite Iron Ore"
            }
        ]
    },
    {
        "name": "716 to 970 Throwing Twinblades",
        "category": "Throwing Twinblades",
        "craftingLevel": 144,
        "minLevel": 716,
        "maxLevel": 970,
        "url": "https://brightershoreswiki.org/w/716_to_970_Throwing_Twinblades",
        "materials": [
            {
                "quantity": 4,
                "material": "Hematite Iron Ore"
            }
        ]
    },
    {
        "name": "736 to 995 Metal Kite Shield",
        "category": "Metal Kite Shield",
        "craftingLevel": 148,
        "minLevel": 736,
        "maxLevel": 995,
        "url": "https://brightershoreswiki.org/w/736_to_995_Metal_Kite_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Hematite Iron Ore"
            }
        ]
    },
    {
        "name": "746 to 1060 Flanged Mace",
        "category": "Flanged Mace",
        "craftingLevel": 150,
        "minLevel": 746,
        "maxLevel": 1060,
        "url": "https://brightershoreswiki.org/w/746_to_1060_Flanged_Mace",
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
        "name": "766 to 1095 Throwing Rings",
        "category": "Throwing Rings",
        "craftingLevel": 154,
        "minLevel": 766,
        "maxLevel": 1095,
        "url": "https://brightershoreswiki.org/w/766_to_1095_Throwing_Rings",
        "materials": [
            {
                "quantity": 4,
                "material": "Morian Cabranese Ore"
            }
        ]
    },
    {
        "name": "791 to 1160 Shortsword",
        "category": "Shortsword",
        "craftingLevel": 159,
        "minLevel": 791,
        "maxLevel": 1160,
        "url": "https://brightershoreswiki.org/w/791_to_1160_Shortsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Morian Cabranese Ore"
            }
        ]
    },
    {
        "name": "801 to 1195 Metal Javelins",
        "category": "Metal Javelins",
        "craftingLevel": 161,
        "minLevel": 801,
        "maxLevel": 1195,
        "url": "https://brightershoreswiki.org/w/801_to_1195_Metal_Javelins",
        "materials": [
            {
                "quantity": 5,
                "material": "Morian Cabranese Ore"
            }
        ]
    },
    {
        "name": "821 to 1260 Metal Heater Shield",
        "category": "Metal Heater Shield",
        "craftingLevel": 165,
        "minLevel": 821,
        "maxLevel": 1260,
        "url": "https://brightershoreswiki.org/w/821_to_1260_Metal_Heater_Shield",
        "materials": [
            {
                "quantity": 6,
                "material": "Morian Cabranese Ore"
            }
        ]
    },
    {
        "name": "831 to 1330 Longsword",
        "category": "Longsword",
        "craftingLevel": 167,
        "minLevel": 831,
        "maxLevel": 1330,
        "url": "https://brightershoreswiki.org/w/831_to_1330_Longsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Amirite Flantium Ore"
            }
        ]
    },
    {
        "name": "856 to 1365 Throwing Knives",
        "category": "Throwing Knives",
        "craftingLevel": 172,
        "minLevel": 856,
        "maxLevel": 1365,
        "url": "https://brightershoreswiki.org/w/856_to_1365_Throwing_Knives",
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
        "name": "876 to 1430 Broadsword",
        "category": "Broadsword",
        "craftingLevel": 176,
        "minLevel": 876,
        "maxLevel": 1430,
        "url": "https://brightershoreswiki.org/w/876_to_1430_Broadsword",
        "materials": [
            {
                "quantity": 6,
                "material": "Amirite Flantium Ore"
            }
        ]
    },
    {
        "name": "886 to 1465 Metal Buckler",
        "category": "Metal Buckler",
        "craftingLevel": 178,
        "minLevel": 886,
        "maxLevel": 1465,
        "url": "https://brightershoreswiki.org/w/886_to_1465_Metal_Buckler",
        "materials": [
            {
                "quantity": 4,
                "material": "Caric Adathril Ore"
            }
        ]
    },
    {
        "name": "906 to 1530 Throwing Axes",
        "category": "Throwing Axes",
        "craftingLevel": 182,
        "minLevel": 906,
        "maxLevel": 1530,
        "url": "https://brightershoreswiki.org/w/906_to_1530_Throwing_Axes",
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
        "name": "916 to 1600 Battleaxe",
        "category": "Battleaxe",
        "craftingLevel": 184,
        "minLevel": 916,
        "maxLevel": 1600,
        "url": "https://brightershoreswiki.org/w/916_to_1600_Battleaxe",
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
        "name": "941 to 1635 Metal Bow",
        "category": "Metal Bow",
        "craftingLevel": 189,
        "minLevel": 941,
        "maxLevel": 1635,
        "url": "https://brightershoreswiki.org/w/941_to_1635_Metal_Bow",
        "materials": [
            {
                "quantity": 6,
                "material": "Caric Adathril Ore"
            }
        ]
    },
    {
        "name": "961 to 1700 Rapier",
        "category": "Rapier",
        "craftingLevel": 193,
        "minLevel": 961,
        "maxLevel": 1700,
        "url": "https://brightershoreswiki.org/w/961_to_1700_Rapier",
        "materials": [
            {
                "quantity": 4,
                "material": "Magnetite Iron Ore"
            }
        ]
    },
    {
        "name": "971 to 1735 Throwing Twinblades",
        "category": "Throwing Twinblades",
        "craftingLevel": 195,
        "minLevel": 971,
        "maxLevel": 1735,
        "url": "https://brightershoreswiki.org/w/971_to_1735_Throwing_Twinblades",
        "materials": [
            {
                "quantity": 4,
                "material": "Magnetite Iron Ore"
            }
        ]
    },
    {
        "name": "996 to 1800 Metal Kite Shield",
        "category": "Metal Kite Shield",
        "craftingLevel": 200,
        "minLevel": 996,
        "maxLevel": 1800,
        "url": "https://brightershoreswiki.org/w/996_to_1800_Metal_Kite_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Magnetite Iron Ore"
            }
        ]
    },
    {
        "name": "1061 to 1870 Flanged Mace",
        "category": "Flanged Mace",
        "craftingLevel": 213,
        "minLevel": 1061,
        "maxLevel": 1870,
        "url": "https://brightershoreswiki.org/w/1061_to_1870_Flanged_Mace",
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
        "name": "1096 to 1905 Throwing Rings",
        "category": "Throwing Rings",
        "craftingLevel": 220,
        "minLevel": 1096,
        "maxLevel": 1905,
        "url": "https://brightershoreswiki.org/w/1096_to_1905_Throwing_Rings",
        "materials": [
            {
                "quantity": 4,
                "material": "Shaprian Cabranese Ore"
            }
        ]
    },
    {
        "name": "1161 to 1970 Shortsword",
        "category": "Shortsword",
        "craftingLevel": 233,
        "minLevel": 1161,
        "maxLevel": 1970,
        "url": "https://brightershoreswiki.org/w/1161_to_1970_Shortsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Shaprian Cabranese Ore"
            }
        ]
    },
    {
        "name": "1196 to 2005 Metal Javelins",
        "category": "Metal Javelins",
        "craftingLevel": 240,
        "minLevel": 1196,
        "maxLevel": 2005,
        "url": "https://brightershoreswiki.org/w/1196_to_2005_Metal_Javelins",
        "materials": [
            {
                "quantity": 5,
                "material": "Shaprian Cabranese Ore"
            }
        ]
    },
    {
        "name": "1261 to 2070 Metal Heater Shield",
        "category": "Metal Heater Shield",
        "craftingLevel": 253,
        "minLevel": 1261,
        "maxLevel": 2070,
        "url": "https://brightershoreswiki.org/w/1261_to_2070_Metal_Heater_Shield",
        "materials": [
            {
                "quantity": 6,
                "material": "Shaprian Cabranese Ore"
            }
        ]
    },
    {
        "name": "1331 to 2140 Longsword",
        "category": "Longsword",
        "craftingLevel": 267,
        "minLevel": 1331,
        "maxLevel": 2140,
        "url": "https://brightershoreswiki.org/w/1331_to_2140_Longsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Eysite Flantium Ore"
            }
        ]
    },
    {
        "name": "1366 to 2175 Throwing Knives",
        "category": "Throwing Knives",
        "craftingLevel": 274,
        "minLevel": 1366,
        "maxLevel": 2175,
        "url": "https://brightershoreswiki.org/w/1366_to_2175_Throwing_Knives",
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
        "name": "1431 to 2240 Broadsword",
        "category": "Broadsword",
        "craftingLevel": 287,
        "minLevel": 1431,
        "maxLevel": 2240,
        "url": "https://brightershoreswiki.org/w/1431_to_2240_Broadsword",
        "materials": [
            {
                "quantity": 6,
                "material": "Eysite Flantium Ore"
            }
        ]
    },
    {
        "name": "1466 to 2275 Metal Buckler",
        "category": "Metal Buckler",
        "craftingLevel": 294,
        "minLevel": 1466,
        "maxLevel": 2275,
        "url": "https://brightershoreswiki.org/w/1466_to_2275_Metal_Buckler",
        "materials": [
            {
                "quantity": 4,
                "material": "Masic Adathril Ore"
            }
        ]
    },
    {
        "name": "1531 to 2340 Throwing Axes",
        "category": "Throwing Axes",
        "craftingLevel": 307,
        "minLevel": 1531,
        "maxLevel": 2340,
        "url": "https://brightershoreswiki.org/w/1531_to_2340_Throwing_Axes",
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
        "name": "1601 to 2410 Battleaxe",
        "category": "Battleaxe",
        "craftingLevel": 321,
        "minLevel": 1601,
        "maxLevel": 2410,
        "url": "https://brightershoreswiki.org/w/1601_to_2410_Battleaxe",
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
        "name": "1636 to 2445 Metal Bow",
        "category": "Metal Bow",
        "craftingLevel": 328,
        "minLevel": 1636,
        "maxLevel": 2445,
        "url": "https://brightershoreswiki.org/w/1636_to_2445_Metal_Bow",
        "materials": [
            {
                "quantity": 6,
                "material": "Masic Adathril Ore"
            }
        ]
    },
    {
        "name": "1701 to 2500 Rapier",
        "category": "Rapier",
        "craftingLevel": 341,
        "minLevel": 1701,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1701_to_2500_Rapier",
        "materials": [
            {
                "quantity": 4,
                "material": "Siderite Iron Ore"
            }
        ]
    },
    {
        "name": "1736 to 2500 Throwing Twinblades",
        "category": "Throwing Twinblades",
        "craftingLevel": 348,
        "minLevel": 1736,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1736_to_2500_Throwing_Twinblades",
        "materials": [
            {
                "quantity": 4,
                "material": "Siderite Iron Ore"
            }
        ]
    },
    {
        "name": "1801 to 2500 Metal Kite Shield",
        "category": "Metal Kite Shield",
        "craftingLevel": 361,
        "minLevel": 1801,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1801_to_2500_Metal_Kite_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Siderite Iron Ore"
            }
        ]
    },
    {
        "name": "1871 to 2500 Flanged Mace",
        "category": "Flanged Mace",
        "craftingLevel": 375,
        "minLevel": 1871,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1871_to_2500_Flanged_Mace",
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
        "name": "1906 to 2500 Throwing Rings",
        "category": "Throwing Rings",
        "craftingLevel": 382,
        "minLevel": 1906,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1906_to_2500_Throwing_Rings",
        "materials": [
            {
                "quantity": 4,
                "material": "Temberian Cabranese Ore"
            }
        ]
    },
    {
        "name": "1971 to 2500 Shortsword",
        "category": "Shortsword",
        "craftingLevel": 395,
        "minLevel": 1971,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1971_to_2500_Shortsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Temberian Cabranese Ore"
            }
        ]
    },
    {
        "name": "2006 to 2500 Metal Javelins",
        "category": "Metal Javelins",
        "craftingLevel": 402,
        "minLevel": 2006,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2006_to_2500_Metal_Javelins",
        "materials": [
            {
                "quantity": 5,
                "material": "Temberian Cabranese Ore"
            }
        ]
    },
    {
        "name": "2071 to 2500 Metal Heater Shield",
        "category": "Metal Heater Shield",
        "craftingLevel": 415,
        "minLevel": 2071,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2071_to_2500_Metal_Heater_Shield",
        "materials": [
            {
                "quantity": 6,
                "material": "Temberian Cabranese Ore"
            }
        ]
    },
    {
        "name": "2141 to 2500 Longsword",
        "category": "Longsword",
        "craftingLevel": 429,
        "minLevel": 2141,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2141_to_2500_Longsword",
        "materials": [
            {
                "quantity": 4,
                "material": "Seethalite Flantium Ore"
            }
        ]
    },
    {
        "name": "2176 to 2500 Throwing Knives",
        "category": "Throwing Knives",
        "craftingLevel": 436,
        "minLevel": 2176,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2176_to_2500_Throwing_Knives",
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
        "name": "2241 to 2500 Broadsword",
        "category": "Broadsword",
        "craftingLevel": 449,
        "minLevel": 2241,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2241_to_2500_Broadsword",
        "materials": [
            {
                "quantity": 6,
                "material": "Seethalite Flantium Ore"
            }
        ]
    },
    {
        "name": "2276 to 2500 Metal Buckler",
        "category": "Metal Buckler",
        "craftingLevel": 456,
        "minLevel": 2276,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2276_to_2500_Metal_Buckler",
        "materials": [
            {
                "quantity": 4,
                "material": "Fortoic Adathril Ore"
            }
        ]
    },
    {
        "name": "2341 to 2500 Throwing Axes",
        "category": "Throwing Axes",
        "craftingLevel": 469,
        "minLevel": 2341,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2341_to_2500_Throwing_Axes",
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
        "name": "2411 to 2500 Battleaxe",
        "category": "Battleaxe",
        "craftingLevel": 483,
        "minLevel": 2411,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2411_to_2500_Battleaxe",
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
        "name": "2446 to 2500 Metal Bow",
        "category": "Metal Bow",
        "craftingLevel": 490,
        "minLevel": 2446,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2446_to_2500_Metal_Bow",
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
        "name": "0 to 185 Truncheon",
        "category": "Truncheon",
        "craftingLevel": 0,
        "minLevel": 0,
        "maxLevel": 185,
        "url": "https://brightershoreswiki.org/w/0_to_185_Truncheon",
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
        "name": "0 to 205 Blowpipe",
        "category": "Blowpipe",
        "craftingLevel": 2,
        "minLevel": 0,
        "maxLevel": 205,
        "url": "https://brightershoreswiki.org/w/0_to_205_Blowpipe",
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
        "name": "0 to 215 Wooden Round Shield",
        "category": "Wooden Round Shield",
        "craftingLevel": 4,
        "minLevel": 0,
        "maxLevel": 215,
        "url": "https://brightershoreswiki.org/w/0_to_215_Wooden_Round_Shield",
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
        "name": "0 to 235 Cudgel",
        "category": "Cudgel",
        "craftingLevel": 6,
        "minLevel": 0,
        "maxLevel": 235,
        "url": "https://brightershoreswiki.org/w/0_to_235_Cudgel",
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
        "name": "0 to 255 Javelins",
        "category": "Javelins",
        "craftingLevel": 8,
        "minLevel": 0,
        "maxLevel": 255,
        "url": "https://brightershoreswiki.org/w/0_to_255_Javelins",
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
        "name": "0 to 265 Club",
        "category": "Club",
        "craftingLevel": 10,
        "minLevel": 0,
        "maxLevel": 265,
        "url": "https://brightershoreswiki.org/w/0_to_265_Club",
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
        "name": "0 to 285 Light Crossbow",
        "category": "Light Crossbow",
        "craftingLevel": 12,
        "minLevel": 0,
        "maxLevel": 285,
        "url": "https://brightershoreswiki.org/w/0_to_285_Light_Crossbow",
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
        "name": "0 to 305 Wooden Square Shield",
        "category": "Wooden Square Shield",
        "craftingLevel": 14,
        "minLevel": 0,
        "maxLevel": 305,
        "url": "https://brightershoreswiki.org/w/0_to_305_Wooden_Square_Shield",
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
        "name": "0 to 325 Quarterstaff",
        "category": "Quarterstaff",
        "craftingLevel": 16,
        "minLevel": 0,
        "maxLevel": 325,
        "url": "https://brightershoreswiki.org/w/0_to_325_Quarterstaff",
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
        "name": "0 to 335 Recurve Bow",
        "category": "Recurve Bow",
        "craftingLevel": 18,
        "minLevel": 0,
        "maxLevel": 335,
        "url": "https://brightershoreswiki.org/w/0_to_335_Recurve_Bow",
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
        "name": "0 to 355 Spear",
        "category": "Spear",
        "craftingLevel": 22,
        "minLevel": 0,
        "maxLevel": 355,
        "url": "https://brightershoreswiki.org/w/0_to_355_Spear",
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
        "name": "0 to 375 Wooden Hexagon Shield",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 24,
        "minLevel": 0,
        "maxLevel": 375,
        "url": "https://brightershoreswiki.org/w/0_to_375_Wooden_Hexagon_Shield",
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
        "name": "0 to 385 Longbow",
        "category": "Longbow",
        "craftingLevel": 28,
        "minLevel": 0,
        "maxLevel": 385,
        "url": "https://brightershoreswiki.org/w/0_to_385_Longbow",
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
        "name": "0 to 405 Poleaxe",
        "category": "Poleaxe",
        "craftingLevel": 30,
        "minLevel": 0,
        "maxLevel": 405,
        "url": "https://brightershoreswiki.org/w/0_to_405_Poleaxe",
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
        "name": "0 to 425 Heavy Crossbow",
        "category": "Heavy Crossbow",
        "craftingLevel": 34,
        "minLevel": 0,
        "maxLevel": 425,
        "url": "https://brightershoreswiki.org/w/0_to_425_Heavy_Crossbow",
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
        "name": "186 to 445 Truncheon",
        "category": "Truncheon",
        "craftingLevel": 38,
        "minLevel": 186,
        "maxLevel": 445,
        "url": "https://brightershoreswiki.org/w/186_to_445_Truncheon",
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
        "name": "206 to 455 Blowpipe",
        "category": "Blowpipe",
        "craftingLevel": 42,
        "minLevel": 206,
        "maxLevel": 455,
        "url": "https://brightershoreswiki.org/w/206_to_455_Blowpipe",
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
        "name": "216 to 475 Wooden Round Shield",
        "category": "Wooden Round Shield",
        "craftingLevel": 44,
        "minLevel": 216,
        "maxLevel": 475,
        "url": "https://brightershoreswiki.org/w/216_to_475_Wooden_Round_Shield",
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
        "name": "236 to 495 Cudgel",
        "category": "Cudgel",
        "craftingLevel": 48,
        "minLevel": 236,
        "maxLevel": 495,
        "url": "https://brightershoreswiki.org/w/236_to_495_Cudgel",
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
        "name": "256 to 505 Javelins",
        "category": "Javelins",
        "craftingLevel": 52,
        "minLevel": 256,
        "maxLevel": 505,
        "url": "https://brightershoreswiki.org/w/256_to_505_Javelins",
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
        "name": "266 to 525 Club",
        "category": "Club",
        "craftingLevel": 54,
        "minLevel": 266,
        "maxLevel": 525,
        "url": "https://brightershoreswiki.org/w/266_to_525_Club",
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
        "name": "286 to 545 Light Crossbow",
        "category": "Light Crossbow",
        "craftingLevel": 58,
        "minLevel": 286,
        "maxLevel": 545,
        "url": "https://brightershoreswiki.org/w/286_to_545_Light_Crossbow",
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
        "name": "306 to 555 Wooden Square Shield",
        "category": "Wooden Square Shield",
        "craftingLevel": 62,
        "minLevel": 306,
        "maxLevel": 555,
        "url": "https://brightershoreswiki.org/w/306_to_555_Wooden_Square_Shield",
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
        "name": "326 to 575 Quarterstaff",
        "category": "Quarterstaff",
        "craftingLevel": 66,
        "minLevel": 326,
        "maxLevel": 575,
        "url": "https://brightershoreswiki.org/w/326_to_575_Quarterstaff",
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
        "name": "336 to 595 Recurve Bow",
        "category": "Recurve Bow",
        "craftingLevel": 68,
        "minLevel": 336,
        "maxLevel": 595,
        "url": "https://brightershoreswiki.org/w/336_to_595_Recurve_Bow",
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
        "name": "356 to 615 Spear",
        "category": "Spear",
        "craftingLevel": 72,
        "minLevel": 356,
        "maxLevel": 615,
        "url": "https://brightershoreswiki.org/w/356_to_615_Spear",
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
        "name": "376 to 625 Wooden Hexagon Shield",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 76,
        "minLevel": 376,
        "maxLevel": 625,
        "url": "https://brightershoreswiki.org/w/376_to_625_Wooden_Hexagon_Shield",
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
        "name": "386 to 645 Longbow",
        "category": "Longbow",
        "craftingLevel": 79,
        "minLevel": 386,
        "maxLevel": 645,
        "url": "https://brightershoreswiki.org/w/386_to_645_Longbow",
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
        "name": "406 to 665 Poleaxe",
        "category": "Poleaxe",
        "craftingLevel": 82,
        "minLevel": 406,
        "maxLevel": 665,
        "url": "https://brightershoreswiki.org/w/406_to_665_Poleaxe",
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
        "name": "426 to 675 Heavy Crossbow",
        "category": "Heavy Crossbow",
        "craftingLevel": 86,
        "minLevel": 426,
        "maxLevel": 675,
        "url": "https://brightershoreswiki.org/w/426_to_675_Heavy_Crossbow",
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
        "name": "446 to 695 Truncheon",
        "category": "Truncheon",
        "craftingLevel": 90,
        "minLevel": 446,
        "maxLevel": 695,
        "url": "https://brightershoreswiki.org/w/446_to_695_Truncheon",
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
        "name": "456 to 715 Blowpipe",
        "category": "Blowpipe",
        "craftingLevel": 92,
        "minLevel": 456,
        "maxLevel": 715,
        "url": "https://brightershoreswiki.org/w/456_to_715_Blowpipe",
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
        "name": "476 to 735 Wooden Round Shield",
        "category": "Wooden Round Shield",
        "craftingLevel": 96,
        "minLevel": 476,
        "maxLevel": 735,
        "url": "https://brightershoreswiki.org/w/476_to_735_Wooden_Round_Shield",
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
        "name": "496 to 745 Cudgel",
        "category": "Cudgel",
        "craftingLevel": 100,
        "minLevel": 496,
        "maxLevel": 745,
        "url": "https://brightershoreswiki.org/w/496_to_745_Cudgel",
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
        "name": "506 to 765 Javelins",
        "category": "Javelins",
        "craftingLevel": 102,
        "minLevel": 506,
        "maxLevel": 765,
        "url": "https://brightershoreswiki.org/w/506_to_765_Javelins",
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
        "name": "526 to 785 Club",
        "category": "Club",
        "craftingLevel": 106,
        "minLevel": 526,
        "maxLevel": 785,
        "url": "https://brightershoreswiki.org/w/526_to_785_Club",
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
        "name": "546 to 795 Light Crossbow",
        "category": "Light Crossbow",
        "craftingLevel": 110,
        "minLevel": 546,
        "maxLevel": 795,
        "url": "https://brightershoreswiki.org/w/546_to_795_Light_Crossbow",
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
        "name": "556 to 815 Wooden Square Shield",
        "category": "Wooden Square Shield",
        "craftingLevel": 112,
        "minLevel": 556,
        "maxLevel": 815,
        "url": "https://brightershoreswiki.org/w/556_to_815_Wooden_Square_Shield",
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
        "name": "576 to 835 Quarterstaff",
        "category": "Quarterstaff",
        "craftingLevel": 116,
        "minLevel": 576,
        "maxLevel": 835,
        "url": "https://brightershoreswiki.org/w/576_to_835_Quarterstaff",
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
        "name": "596 to 855 Recurve Bow",
        "category": "Recurve Bow",
        "craftingLevel": 120,
        "minLevel": 596,
        "maxLevel": 855,
        "url": "https://brightershoreswiki.org/w/596_to_855_Recurve_Bow",
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
        "name": "616 to 865 Spear",
        "category": "Spear",
        "craftingLevel": 124,
        "minLevel": 616,
        "maxLevel": 865,
        "url": "https://brightershoreswiki.org/w/616_to_865_Spear",
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
        "name": "626 to 885 Wooden Hexagon Shield",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 126,
        "minLevel": 626,
        "maxLevel": 885,
        "url": "https://brightershoreswiki.org/w/626_to_885_Wooden_Hexagon_Shield",
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
        "name": "646 to 905 Longbow",
        "category": "Longbow",
        "craftingLevel": 130,
        "minLevel": 646,
        "maxLevel": 905,
        "url": "https://brightershoreswiki.org/w/646_to_905_Longbow",
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
        "name": "666 to 915 Poleaxe",
        "category": "Poleaxe",
        "craftingLevel": 134,
        "minLevel": 666,
        "maxLevel": 915,
        "url": "https://brightershoreswiki.org/w/666_to_915_Poleaxe",
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
        "name": "676 to 935 Heavy Crossbow",
        "category": "Heavy Crossbow",
        "craftingLevel": 136,
        "minLevel": 676,
        "maxLevel": 935,
        "url": "https://brightershoreswiki.org/w/676_to_935_Heavy_Crossbow",
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
        "name": "696 to 955 Truncheon",
        "category": "Truncheon",
        "craftingLevel": 140,
        "minLevel": 696,
        "maxLevel": 955,
        "url": "https://brightershoreswiki.org/w/696_to_955_Truncheon",
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
        "name": "716 to 975 Blowpipe",
        "category": "Blowpipe",
        "craftingLevel": 144,
        "minLevel": 716,
        "maxLevel": 975,
        "url": "https://brightershoreswiki.org/w/716_to_975_Blowpipe",
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
        "name": "736 to 985 Wooden Round Shield",
        "category": "Wooden Round Shield",
        "craftingLevel": 148,
        "minLevel": 736,
        "maxLevel": 985,
        "url": "https://brightershoreswiki.org/w/736_to_985_Wooden_Round_Shield",
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
        "name": "746 to 1025 Cudgel",
        "category": "Cudgel",
        "craftingLevel": 150,
        "minLevel": 746,
        "maxLevel": 1025,
        "url": "https://brightershoreswiki.org/w/746_to_1025_Cudgel",
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
        "name": "766 to 1090 Javelins",
        "category": "Javelins",
        "craftingLevel": 154,
        "minLevel": 766,
        "maxLevel": 1090,
        "url": "https://brightershoreswiki.org/w/766_to_1090_Javelins",
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
        "name": "786 to 1120 Club",
        "category": "Club",
        "craftingLevel": 158,
        "minLevel": 786,
        "maxLevel": 1120,
        "url": "https://brightershoreswiki.org/w/786_to_1120_Club",
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
        "name": "796 to 1185 Light Crossbow",
        "category": "Light Crossbow",
        "craftingLevel": 160,
        "minLevel": 796,
        "maxLevel": 1185,
        "url": "https://brightershoreswiki.org/w/796_to_1185_Light_Crossbow",
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
        "name": "816 to 1250 Wooden Square Shield",
        "category": "Wooden Square Shield",
        "craftingLevel": 164,
        "minLevel": 816,
        "maxLevel": 1250,
        "url": "https://brightershoreswiki.org/w/816_to_1250_Wooden_Square_Shield",
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
        "name": "836 to 1285 Quarterstaff",
        "category": "Quarterstaff",
        "craftingLevel": 168,
        "minLevel": 836,
        "maxLevel": 1285,
        "url": "https://brightershoreswiki.org/w/836_to_1285_Quarterstaff",
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
        "name": "856 to 1345 Recurve Bow",
        "category": "Recurve Bow",
        "craftingLevel": 172,
        "minLevel": 856,
        "maxLevel": 1345,
        "url": "https://brightershoreswiki.org/w/856_to_1345_Recurve_Bow",
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
        "name": "866 to 1410 Spear",
        "category": "Spear",
        "craftingLevel": 174,
        "minLevel": 866,
        "maxLevel": 1410,
        "url": "https://brightershoreswiki.org/w/866_to_1410_Spear",
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
        "name": "886 to 1475 Wooden Hexagon Shield",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 178,
        "minLevel": 886,
        "maxLevel": 1475,
        "url": "https://brightershoreswiki.org/w/886_to_1475_Wooden_Hexagon_Shield",
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
        "name": "906 to 1510 Longbow",
        "category": "Longbow",
        "craftingLevel": 182,
        "minLevel": 906,
        "maxLevel": 1510,
        "url": "https://brightershoreswiki.org/w/906_to_1510_Longbow",
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
        "name": "916 to 1575 Poleaxe",
        "category": "Poleaxe",
        "craftingLevel": 184,
        "minLevel": 916,
        "maxLevel": 1575,
        "url": "https://brightershoreswiki.org/w/916_to_1575_Poleaxe",
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
        "name": "936 to 1635 Heavy Crossbow",
        "category": "Heavy Crossbow",
        "craftingLevel": 188,
        "minLevel": 936,
        "maxLevel": 1635,
        "url": "https://brightershoreswiki.org/w/936_to_1635_Heavy_Crossbow",
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
        "name": "956 to 1670 Truncheon",
        "category": "Truncheon",
        "craftingLevel": 192,
        "minLevel": 956,
        "maxLevel": 1670,
        "url": "https://brightershoreswiki.org/w/956_to_1670_Truncheon",
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
        "name": "976 to 1735 Blowpipe",
        "category": "Blowpipe",
        "craftingLevel": 196,
        "minLevel": 976,
        "maxLevel": 1735,
        "url": "https://brightershoreswiki.org/w/976_to_1735_Blowpipe",
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
        "name": "986 to 1800 Wooden Round Shield",
        "category": "Wooden Round Shield",
        "craftingLevel": 198,
        "minLevel": 986,
        "maxLevel": 1800,
        "url": "https://brightershoreswiki.org/w/986_to_1800_Wooden_Round_Shield",
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
        "name": "1026 to 1865 Cudgel",
        "category": "Cudgel",
        "craftingLevel": 206,
        "minLevel": 1026,
        "maxLevel": 1865,
        "url": "https://brightershoreswiki.org/w/1026_to_1865_Cudgel",
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
        "name": "1091 to 1895 Javelins",
        "category": "Javelins",
        "craftingLevel": 219,
        "minLevel": 1091,
        "maxLevel": 1895,
        "url": "https://brightershoreswiki.org/w/1091_to_1895_Javelins",
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
        "name": "1121 to 1960 Club",
        "category": "Club",
        "craftingLevel": 225,
        "minLevel": 1121,
        "maxLevel": 1960,
        "url": "https://brightershoreswiki.org/w/1121_to_1960_Club",
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
        "name": "1186 to 2025 Light Crossbow",
        "category": "Light Crossbow",
        "craftingLevel": 238,
        "minLevel": 1186,
        "maxLevel": 2025,
        "url": "https://brightershoreswiki.org/w/1186_to_2025_Light_Crossbow",
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
        "name": "1251 to 2055 Wooden Square Shield",
        "category": "Wooden Square Shield",
        "craftingLevel": 251,
        "minLevel": 1251,
        "maxLevel": 2055,
        "url": "https://brightershoreswiki.org/w/1251_to_2055_Wooden_Square_Shield",
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
        "name": "1286 to 2120 Quarterstaff",
        "category": "Quarterstaff",
        "craftingLevel": 258,
        "minLevel": 1286,
        "maxLevel": 2120,
        "url": "https://brightershoreswiki.org/w/1286_to_2120_Quarterstaff",
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
        "name": "1346 to 2185 Recurve Bow",
        "category": "Recurve Bow",
        "craftingLevel": 270,
        "minLevel": 1346,
        "maxLevel": 2185,
        "url": "https://brightershoreswiki.org/w/1346_to_2185_Recurve_Bow",
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
        "name": "1411 to 2250 Spear",
        "category": "Spear",
        "craftingLevel": 283,
        "minLevel": 1411,
        "maxLevel": 2250,
        "url": "https://brightershoreswiki.org/w/1411_to_2250_Spear",
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
        "name": "1476 to 2280 Wooden Hexagon Shield",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 296,
        "minLevel": 1476,
        "maxLevel": 2280,
        "url": "https://brightershoreswiki.org/w/1476_to_2280_Wooden_Hexagon_Shield",
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
        "name": "1511 to 2345 Longbow",
        "category": "Longbow",
        "craftingLevel": 303,
        "minLevel": 1511,
        "maxLevel": 2345,
        "url": "https://brightershoreswiki.org/w/1511_to_2345_Longbow",
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
        "name": "1576 to 2410 Poleaxe",
        "category": "Poleaxe",
        "craftingLevel": 316,
        "minLevel": 1576,
        "maxLevel": 2410,
        "url": "https://brightershoreswiki.org/w/1576_to_2410_Poleaxe",
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
        "name": "1636 to 2445 Heavy Crossbow",
        "category": "Heavy Crossbow",
        "craftingLevel": 328,
        "minLevel": 1636,
        "maxLevel": 2445,
        "url": "https://brightershoreswiki.org/w/1636_to_2445_Heavy_Crossbow",
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
        "name": "1671 to 2500 Truncheon",
        "category": "Truncheon",
        "craftingLevel": 335,
        "minLevel": 1671,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1671_to_2500_Truncheon",
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
        "name": "1736 to 2500 Blowpipe",
        "category": "Blowpipe",
        "craftingLevel": 348,
        "minLevel": 1736,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1736_to_2500_Blowpipe",
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
        "name": "1801 to 2500 Wooden Round Shield",
        "category": "Wooden Round Shield",
        "craftingLevel": 361,
        "minLevel": 1801,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1801_to_2500_Wooden_Round_Shield",
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
        "name": "1866 to 2500 Cudgel",
        "category": "Cudgel",
        "craftingLevel": 374,
        "minLevel": 1866,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1866_to_2500_Cudgel",
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
        "name": "1896 to 2500 Javelins",
        "category": "Javelins",
        "craftingLevel": 380,
        "minLevel": 1896,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1896_to_2500_Javelins",
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
        "name": "1961 to 2500 Club",
        "category": "Club",
        "craftingLevel": 393,
        "minLevel": 1961,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1961_to_2500_Club",
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
        "name": "2026 to 2500 Light Crossbow",
        "category": "Light Crossbow",
        "craftingLevel": 406,
        "minLevel": 2026,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2026_to_2500_Light_Crossbow",
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
        "name": "2056 to 2500 Wooden Square Shield",
        "category": "Wooden Square Shield",
        "craftingLevel": 412,
        "minLevel": 2056,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2056_to_2500_Wooden_Square_Shield",
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
        "name": "2121 to 2500 Quarterstaff",
        "category": "Quarterstaff",
        "craftingLevel": 425,
        "minLevel": 2121,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2121_to_2500_Quarterstaff",
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
        "name": "2186 to 2500 Recurve Bow",
        "category": "Recurve Bow",
        "craftingLevel": 438,
        "minLevel": 2186,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2186_to_2500_Recurve_Bow",
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
        "name": "2251 to 2500 Spear",
        "category": "Spear",
        "craftingLevel": 451,
        "minLevel": 2251,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2251_to_2500_Spear",
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
        "name": "2281 to 2500 Wooden Hexagon Shield",
        "category": "Wooden Hexagon Shield",
        "craftingLevel": 457,
        "minLevel": 2281,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2281_to_2500_Wooden_Hexagon_Shield",
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
        "name": "2346 to 2500 Longbow",
        "category": "Longbow",
        "craftingLevel": 470,
        "minLevel": 2346,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2346_to_2500_Longbow",
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
        "name": "2411 to 2500 Poleaxe",
        "category": "Poleaxe",
        "craftingLevel": 483,
        "minLevel": 2411,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2411_to_2500_Poleaxe",
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
        "name": "2446 to 2500 Heavy Crossbow",
        "category": "Heavy Crossbow",
        "craftingLevel": 490,
        "minLevel": 2446,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2446_to_2500_Heavy_Crossbow",
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
        "name": "0 to 185 Hammerfist",
        "category": "Hammerfist",
        "craftingLevel": 0,
        "minLevel": 0,
        "maxLevel": 185,
        "url": "https://brightershoreswiki.org/w/0_to_185_Hammerfist",
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
        "name": "0 to 195 Throwing Stones",
        "category": "Throwing Stones",
        "craftingLevel": 2,
        "minLevel": 0,
        "maxLevel": 195,
        "url": "https://brightershoreswiki.org/w/0_to_195_Throwing_Stones",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Flint"
            }
        ]
    },
    {
        "name": "0 to 215 Stone Slab Shield",
        "category": "Stone Slab Shield",
        "craftingLevel": 4,
        "minLevel": 0,
        "maxLevel": 215,
        "url": "https://brightershoreswiki.org/w/0_to_215_Stone_Slab_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Coarse Flint"
            }
        ]
    },
    {
        "name": "0 to 235 Stone Mace",
        "category": "Stone Mace",
        "craftingLevel": 6,
        "minLevel": 0,
        "maxLevel": 235,
        "url": "https://brightershoreswiki.org/w/0_to_235_Stone_Mace",
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
        "name": "0 to 245 Stone Discs",
        "category": "Stone Discs",
        "craftingLevel": 8,
        "minLevel": 0,
        "maxLevel": 245,
        "url": "https://brightershoreswiki.org/w/0_to_245_Stone_Discs",
        "materials": [
            {
                "quantity": 4,
                "material": "Coarse Basalt"
            }
        ]
    },
    {
        "name": "0 to 265 War Hammer",
        "category": "War Hammer",
        "craftingLevel": 10,
        "minLevel": 0,
        "maxLevel": 265,
        "url": "https://brightershoreswiki.org/w/0_to_265_War_Hammer",
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
        "name": "0 to 285 Bolas",
        "category": "Bolas",
        "craftingLevel": 12,
        "minLevel": 0,
        "maxLevel": 285,
        "url": "https://brightershoreswiki.org/w/0_to_285_Bolas",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Andesite"
            }
        ]
    },
    {
        "name": "0 to 295 Stone Chunk Shield",
        "category": "Stone Chunk Shield",
        "craftingLevel": 14,
        "minLevel": 0,
        "maxLevel": 295,
        "url": "https://brightershoreswiki.org/w/0_to_295_Stone_Chunk_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Coarse Andesite"
            }
        ]
    },
    {
        "name": "0 to 320 Double Headed Hammer",
        "category": "Double Headed Hammer",
        "craftingLevel": 16,
        "minLevel": 0,
        "maxLevel": 320,
        "url": "https://brightershoreswiki.org/w/0_to_320_Double_Headed_Hammer",
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
        "name": "0 to 340 Throwing Clubs",
        "category": "Throwing Clubs",
        "craftingLevel": 18,
        "minLevel": 0,
        "maxLevel": 340,
        "url": "https://brightershoreswiki.org/w/0_to_340_Throwing_Clubs",
        "materials": [
            {
                "quantity": 5,
                "material": "Coarse Granite"
            }
        ]
    },
    {
        "name": "0 to 350 Great Stone Mace",
        "category": "Great Stone Mace",
        "craftingLevel": 22,
        "minLevel": 0,
        "maxLevel": 350,
        "url": "https://brightershoreswiki.org/w/0_to_350_Great_Stone_Mace",
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
        "name": "0 to 370 Polished Stone Shield",
        "category": "Polished Stone Shield",
        "craftingLevel": 24,
        "minLevel": 0,
        "maxLevel": 370,
        "url": "https://brightershoreswiki.org/w/0_to_370_Polished_Stone_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Coarse Granite"
            }
        ]
    },
    {
        "name": "0 to 390 Throwing Hammers",
        "category": "Throwing Hammers",
        "craftingLevel": 28,
        "minLevel": 0,
        "maxLevel": 390,
        "url": "https://brightershoreswiki.org/w/0_to_390_Throwing_Hammers",
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
        "name": "0 to 400 Great Hammer",
        "category": "Great Hammer",
        "craftingLevel": 30,
        "minLevel": 0,
        "maxLevel": 400,
        "url": "https://brightershoreswiki.org/w/0_to_400_Great_Hammer",
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
        "name": "0 to 420 Sling",
        "category": "Sling",
        "craftingLevel": 34,
        "minLevel": 0,
        "maxLevel": 420,
        "url": "https://brightershoreswiki.org/w/0_to_420_Sling",
        "materials": [
            {
                "quantity": 3,
                "material": "Coarse Deathstone"
            }
        ]
    },
    {
        "name": "186 to 430 Hammerfist",
        "category": "Hammerfist",
        "craftingLevel": 38,
        "minLevel": 186,
        "maxLevel": 430,
        "url": "https://brightershoreswiki.org/w/186_to_430_Hammerfist",
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
        "name": "196 to 450 Throwing Stones",
        "category": "Throwing Stones",
        "craftingLevel": 40,
        "minLevel": 196,
        "maxLevel": 450,
        "url": "https://brightershoreswiki.org/w/196_to_450_Throwing_Stones",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Flint"
            }
        ]
    },
    {
        "name": "216 to 470 Stone Slab Shield",
        "category": "Stone Slab Shield",
        "craftingLevel": 44,
        "minLevel": 216,
        "maxLevel": 470,
        "url": "https://brightershoreswiki.org/w/216_to_470_Stone_Slab_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Rugged Flint"
            }
        ]
    },
    {
        "name": "236 to 480 Stone Mace",
        "category": "Stone Mace",
        "craftingLevel": 48,
        "minLevel": 236,
        "maxLevel": 480,
        "url": "https://brightershoreswiki.org/w/236_to_480_Stone_Mace",
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
        "name": "246 to 500 Stone Discs",
        "category": "Stone Discs",
        "craftingLevel": 50,
        "minLevel": 246,
        "maxLevel": 500,
        "url": "https://brightershoreswiki.org/w/246_to_500_Stone_Discs",
        "materials": [
            {
                "quantity": 4,
                "material": "Rugged Basalt"
            }
        ]
    },
    {
        "name": "266 to 520 War Hammer",
        "category": "War Hammer",
        "craftingLevel": 54,
        "minLevel": 266,
        "maxLevel": 520,
        "url": "https://brightershoreswiki.org/w/266_to_520_War_Hammer",
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
        "name": "286 to 530 Bolas",
        "category": "Bolas",
        "craftingLevel": 58,
        "minLevel": 286,
        "maxLevel": 530,
        "url": "https://brightershoreswiki.org/w/286_to_530_Bolas",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Andesite"
            }
        ]
    },
    {
        "name": "296 to 555 Stone Chunk Shield",
        "category": "Stone Chunk Shield",
        "craftingLevel": 60,
        "minLevel": 296,
        "maxLevel": 555,
        "url": "https://brightershoreswiki.org/w/296_to_555_Stone_Chunk_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Rugged Andesite"
            }
        ]
    },
    {
        "name": "321 to 575 Double Headed Hammer",
        "category": "Double Headed Hammer",
        "craftingLevel": 65,
        "minLevel": 321,
        "maxLevel": 575,
        "url": "https://brightershoreswiki.org/w/321_to_575_Double_Headed_Hammer",
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
        "name": "341 to 585 Throwing Clubs",
        "category": "Throwing Clubs",
        "craftingLevel": 69,
        "minLevel": 341,
        "maxLevel": 585,
        "url": "https://brightershoreswiki.org/w/341_to_585_Throwing_Clubs",
        "materials": [
            {
                "quantity": 5,
                "material": "Rugged Granite"
            }
        ]
    },
    {
        "name": "351 to 605 Great Stone Mace",
        "category": "Great Stone Mace",
        "craftingLevel": 71,
        "minLevel": 351,
        "maxLevel": 605,
        "url": "https://brightershoreswiki.org/w/351_to_605_Great_Stone_Mace",
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
        "name": "371 to 625 Polished Stone Shield",
        "category": "Polished Stone Shield",
        "craftingLevel": 75,
        "minLevel": 371,
        "maxLevel": 625,
        "url": "https://brightershoreswiki.org/w/371_to_625_Polished_Stone_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Rugged Granite"
            }
        ]
    },
    {
        "name": "391 to 635 Throwing Hammers",
        "category": "Throwing Hammers",
        "craftingLevel": 79,
        "minLevel": 391,
        "maxLevel": 635,
        "url": "https://brightershoreswiki.org/w/391_to_635_Throwing_Hammers",
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
        "name": "401 to 655 Great Hammer",
        "category": "Great Hammer",
        "craftingLevel": 81,
        "minLevel": 401,
        "maxLevel": 655,
        "url": "https://brightershoreswiki.org/w/401_to_655_Great_Hammer",
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
        "name": "421 to 675 Sling",
        "category": "Sling",
        "craftingLevel": 85,
        "minLevel": 421,
        "maxLevel": 675,
        "url": "https://brightershoreswiki.org/w/421_to_675_Sling",
        "materials": [
            {
                "quantity": 3,
                "material": "Rugged Deathstone"
            }
        ]
    },
    {
        "name": "431 to 685 Hammerfist",
        "category": "Hammerfist",
        "craftingLevel": 87,
        "minLevel": 431,
        "maxLevel": 685,
        "url": "https://brightershoreswiki.org/w/431_to_685_Hammerfist",
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
        "name": "451 to 705 Throwing Stones",
        "category": "Throwing Stones",
        "craftingLevel": 91,
        "minLevel": 451,
        "maxLevel": 705,
        "url": "https://brightershoreswiki.org/w/451_to_705_Throwing_Stones",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Flint"
            }
        ]
    },
    {
        "name": "471 to 725 Stone Slab Shield",
        "category": "Stone Slab Shield",
        "craftingLevel": 95,
        "minLevel": 471,
        "maxLevel": 725,
        "url": "https://brightershoreswiki.org/w/471_to_725_Stone_Slab_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Average Flint"
            }
        ]
    },
    {
        "name": "481 to 735 Stone Mace",
        "category": "Stone Mace",
        "craftingLevel": 97,
        "minLevel": 481,
        "maxLevel": 735,
        "url": "https://brightershoreswiki.org/w/481_to_735_Stone_Mace",
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
        "name": "501 to 755 Stone Discs",
        "category": "Stone Discs",
        "craftingLevel": 101,
        "minLevel": 501,
        "maxLevel": 755,
        "url": "https://brightershoreswiki.org/w/501_to_755_Stone_Discs",
        "materials": [
            {
                "quantity": 4,
                "material": "Average Basalt"
            }
        ]
    },
    {
        "name": "521 to 780 War Hammer",
        "category": "War Hammer",
        "craftingLevel": 105,
        "minLevel": 521,
        "maxLevel": 780,
        "url": "https://brightershoreswiki.org/w/521_to_780_War_Hammer",
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
        "name": "531 to 790 Bolas",
        "category": "Bolas",
        "craftingLevel": 107,
        "minLevel": 531,
        "maxLevel": 790,
        "url": "https://brightershoreswiki.org/w/531_to_790_Bolas",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Andesite"
            }
        ]
    },
    {
        "name": "556 to 810 Stone Chunk Shield",
        "category": "Stone Chunk Shield",
        "craftingLevel": 112,
        "minLevel": 556,
        "maxLevel": 810,
        "url": "https://brightershoreswiki.org/w/556_to_810_Stone_Chunk_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Average Andesite"
            }
        ]
    },
    {
        "name": "576 to 830 Double Headed Hammer",
        "category": "Double Headed Hammer",
        "craftingLevel": 116,
        "minLevel": 576,
        "maxLevel": 830,
        "url": "https://brightershoreswiki.org/w/576_to_830_Double_Headed_Hammer",
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
        "name": "586 to 840 Throwing Clubs",
        "category": "Throwing Clubs",
        "craftingLevel": 118,
        "minLevel": 586,
        "maxLevel": 840,
        "url": "https://brightershoreswiki.org/w/586_to_840_Throwing_Clubs",
        "materials": [
            {
                "quantity": 5,
                "material": "Average Granite"
            }
        ]
    },
    {
        "name": "606 to 860 Great Stone Mace",
        "category": "Great Stone Mace",
        "craftingLevel": 122,
        "minLevel": 606,
        "maxLevel": 860,
        "url": "https://brightershoreswiki.org/w/606_to_860_Great_Stone_Mace",
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
        "name": "626 to 880 Polished Stone Shield",
        "category": "Polished Stone Shield",
        "craftingLevel": 126,
        "minLevel": 626,
        "maxLevel": 880,
        "url": "https://brightershoreswiki.org/w/626_to_880_Polished_Stone_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Average Granite"
            }
        ]
    },
    {
        "name": "636 to 890 Throwing Hammers",
        "category": "Throwing Hammers",
        "craftingLevel": 128,
        "minLevel": 636,
        "maxLevel": 890,
        "url": "https://brightershoreswiki.org/w/636_to_890_Throwing_Hammers",
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
        "name": "656 to 910 Great Hammer",
        "category": "Great Hammer",
        "craftingLevel": 132,
        "minLevel": 656,
        "maxLevel": 910,
        "url": "https://brightershoreswiki.org/w/656_to_910_Great_Hammer",
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
        "name": "676 to 930 Sling",
        "category": "Sling",
        "craftingLevel": 136,
        "minLevel": 676,
        "maxLevel": 930,
        "url": "https://brightershoreswiki.org/w/676_to_930_Sling",
        "materials": [
            {
                "quantity": 3,
                "material": "Average Deathstone"
            }
        ]
    },
    {
        "name": "686 to 940 Hammerfist",
        "category": "Hammerfist",
        "craftingLevel": 138,
        "minLevel": 686,
        "maxLevel": 940,
        "url": "https://brightershoreswiki.org/w/686_to_940_Hammerfist",
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
        "name": "706 to 960 Throwing Stones",
        "category": "Throwing Stones",
        "craftingLevel": 142,
        "minLevel": 706,
        "maxLevel": 960,
        "url": "https://brightershoreswiki.org/w/706_to_960_Throwing_Stones",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Flint"
            }
        ]
    },
    {
        "name": "726 to 980 Stone Slab Shield",
        "category": "Stone Slab Shield",
        "craftingLevel": 146,
        "minLevel": 726,
        "maxLevel": 980,
        "url": "https://brightershoreswiki.org/w/726_to_980_Stone_Slab_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Fine Flint"
            }
        ]
    },
    {
        "name": "736 to 995 Stone Mace",
        "category": "Stone Mace",
        "craftingLevel": 148,
        "minLevel": 736,
        "maxLevel": 995,
        "url": "https://brightershoreswiki.org/w/736_to_995_Stone_Mace",
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
        "name": "756 to 1060 Stone Discs",
        "category": "Stone Discs",
        "craftingLevel": 152,
        "minLevel": 756,
        "maxLevel": 1060,
        "url": "https://brightershoreswiki.org/w/756_to_1060_Stone_Discs",
        "materials": [
            {
                "quantity": 4,
                "material": "Fine Basalt"
            }
        ]
    },
    {
        "name": "781 to 1125 War Hammer",
        "category": "War Hammer",
        "craftingLevel": 157,
        "minLevel": 781,
        "maxLevel": 1125,
        "url": "https://brightershoreswiki.org/w/781_to_1125_War_Hammer",
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
        "name": "791 to 1160 Bolas",
        "category": "Bolas",
        "craftingLevel": 159,
        "minLevel": 791,
        "maxLevel": 1160,
        "url": "https://brightershoreswiki.org/w/791_to_1160_Bolas",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Andesite"
            }
        ]
    },
    {
        "name": "811 to 1230 Stone Chunk Shield",
        "category": "Stone Chunk Shield",
        "craftingLevel": 163,
        "minLevel": 811,
        "maxLevel": 1230,
        "url": "https://brightershoreswiki.org/w/811_to_1230_Stone_Chunk_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Fine Andesite"
            }
        ]
    },
    {
        "name": "831 to 1295 Double Headed Hammer",
        "category": "Double Headed Hammer",
        "craftingLevel": 167,
        "minLevel": 831,
        "maxLevel": 1295,
        "url": "https://brightershoreswiki.org/w/831_to_1295_Double_Headed_Hammer",
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
        "name": "841 to 1330 Throwing Clubs",
        "category": "Throwing Clubs",
        "craftingLevel": 169,
        "minLevel": 841,
        "maxLevel": 1330,
        "url": "https://brightershoreswiki.org/w/841_to_1330_Throwing_Clubs",
        "materials": [
            {
                "quantity": 5,
                "material": "Fine Granite"
            }
        ]
    },
    {
        "name": "861 to 1395 Great Stone Mace",
        "category": "Great Stone Mace",
        "craftingLevel": 173,
        "minLevel": 861,
        "maxLevel": 1395,
        "url": "https://brightershoreswiki.org/w/861_to_1395_Great_Stone_Mace",
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
        "name": "881 to 1430 Polished Stone Shield",
        "category": "Polished Stone Shield",
        "craftingLevel": 177,
        "minLevel": 881,
        "maxLevel": 1430,
        "url": "https://brightershoreswiki.org/w/881_to_1430_Polished_Stone_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Fine Granite"
            }
        ]
    },
    {
        "name": "891 to 1500 Throwing Hammers",
        "category": "Throwing Hammers",
        "craftingLevel": 179,
        "minLevel": 891,
        "maxLevel": 1500,
        "url": "https://brightershoreswiki.org/w/891_to_1500_Throwing_Hammers",
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
        "name": "911 to 1565 Great Hammer",
        "category": "Great Hammer",
        "craftingLevel": 183,
        "minLevel": 911,
        "maxLevel": 1565,
        "url": "https://brightershoreswiki.org/w/911_to_1565_Great_Hammer",
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
        "name": "931 to 1600 Sling",
        "category": "Sling",
        "craftingLevel": 187,
        "minLevel": 931,
        "maxLevel": 1600,
        "url": "https://brightershoreswiki.org/w/931_to_1600_Sling",
        "materials": [
            {
                "quantity": 3,
                "material": "Fine Deathstone"
            }
        ]
    },
    {
        "name": "941 to 1665 Hammerfist",
        "category": "Hammerfist",
        "craftingLevel": 189,
        "minLevel": 941,
        "maxLevel": 1665,
        "url": "https://brightershoreswiki.org/w/941_to_1665_Hammerfist",
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
        "name": "961 to 1735 Throwing Stones",
        "category": "Throwing Stones",
        "craftingLevel": 193,
        "minLevel": 961,
        "maxLevel": 1735,
        "url": "https://brightershoreswiki.org/w/961_to_1735_Throwing_Stones",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Flint"
            }
        ]
    },
    {
        "name": "981 to 1770 Stone Slab Shield",
        "category": "Stone Slab Shield",
        "craftingLevel": 197,
        "minLevel": 981,
        "maxLevel": 1770,
        "url": "https://brightershoreswiki.org/w/981_to_1770_Stone_Slab_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Sturdy Flint"
            }
        ]
    },
    {
        "name": "996 to 1835 Stone Mace",
        "category": "Stone Mace",
        "craftingLevel": 200,
        "minLevel": 996,
        "maxLevel": 1835,
        "url": "https://brightershoreswiki.org/w/996_to_1835_Stone_Mace",
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
        "name": "1061 to 1905 Stone Discs",
        "category": "Stone Discs",
        "craftingLevel": 213,
        "minLevel": 1061,
        "maxLevel": 1905,
        "url": "https://brightershoreswiki.org/w/1061_to_1905_Stone_Discs",
        "materials": [
            {
                "quantity": 4,
                "material": "Sturdy Basalt"
            }
        ]
    },
    {
        "name": "1126 to 1935 War Hammer",
        "category": "War Hammer",
        "craftingLevel": 226,
        "minLevel": 1126,
        "maxLevel": 1935,
        "url": "https://brightershoreswiki.org/w/1126_to_1935_War_Hammer",
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
        "name": "1161 to 2005 Bolas",
        "category": "Bolas",
        "craftingLevel": 233,
        "minLevel": 1161,
        "maxLevel": 2005,
        "url": "https://brightershoreswiki.org/w/1161_to_2005_Bolas",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Andesite"
            }
        ]
    },
    {
        "name": "1231 to 2070 Stone Chunk Shield",
        "category": "Stone Chunk Shield",
        "craftingLevel": 247,
        "minLevel": 1231,
        "maxLevel": 2070,
        "url": "https://brightershoreswiki.org/w/1231_to_2070_Stone_Chunk_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Sturdy Andesite"
            }
        ]
    },
    {
        "name": "1296 to 2105 Double Headed Hammer",
        "category": "Double Headed Hammer",
        "craftingLevel": 260,
        "minLevel": 1296,
        "maxLevel": 2105,
        "url": "https://brightershoreswiki.org/w/1296_to_2105_Double_Headed_Hammer",
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
        "name": "1331 to 2175 Throwing Clubs",
        "category": "Throwing Clubs",
        "craftingLevel": 267,
        "minLevel": 1331,
        "maxLevel": 2175,
        "url": "https://brightershoreswiki.org/w/1331_to_2175_Throwing_Clubs",
        "materials": [
            {
                "quantity": 5,
                "material": "Sturdy Granite"
            }
        ]
    },
    {
        "name": "1396 to 2240 Great Stone Mace",
        "category": "Great Stone Mace",
        "craftingLevel": 280,
        "minLevel": 1396,
        "maxLevel": 2240,
        "url": "https://brightershoreswiki.org/w/1396_to_2240_Great_Stone_Mace",
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
        "name": "1431 to 2275 Polished Stone Shield",
        "category": "Polished Stone Shield",
        "craftingLevel": 287,
        "minLevel": 1431,
        "maxLevel": 2275,
        "url": "https://brightershoreswiki.org/w/1431_to_2275_Polished_Stone_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Sturdy Granite"
            }
        ]
    },
    {
        "name": "1501 to 2340 Throwing Hammers",
        "category": "Throwing Hammers",
        "craftingLevel": 301,
        "minLevel": 1501,
        "maxLevel": 2340,
        "url": "https://brightershoreswiki.org/w/1501_to_2340_Throwing_Hammers",
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
        "name": "1566 to 2410 Great Hammer",
        "category": "Great Hammer",
        "craftingLevel": 314,
        "minLevel": 1566,
        "maxLevel": 2410,
        "url": "https://brightershoreswiki.org/w/1566_to_2410_Great_Hammer",
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
        "name": "1601 to 2445 Sling",
        "category": "Sling",
        "craftingLevel": 321,
        "minLevel": 1601,
        "maxLevel": 2445,
        "url": "https://brightershoreswiki.org/w/1601_to_2445_Sling",
        "materials": [
            {
                "quantity": 3,
                "material": "Sturdy Deathstone"
            }
        ]
    },
    {
        "name": "1666 to 2500 Hammerfist",
        "category": "Hammerfist",
        "craftingLevel": 334,
        "minLevel": 1666,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1666_to_2500_Hammerfist",
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
        "name": "1736 to 2500 Throwing Stones",
        "category": "Throwing Stones",
        "craftingLevel": 348,
        "minLevel": 1736,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1736_to_2500_Throwing_Stones",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Flint"
            }
        ]
    },
    {
        "name": "1771 to 2500 Stone Slab Shield",
        "category": "Stone Slab Shield",
        "craftingLevel": 355,
        "minLevel": 1771,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1771_to_2500_Stone_Slab_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Perfect Flint"
            }
        ]
    },
    {
        "name": "1836 to 2500 Stone Mace",
        "category": "Stone Mace",
        "craftingLevel": 368,
        "minLevel": 1836,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1836_to_2500_Stone_Mace",
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
        "name": "1906 to 2500 Stone Discs",
        "category": "Stone Discs",
        "craftingLevel": 382,
        "minLevel": 1906,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1906_to_2500_Stone_Discs",
        "materials": [
            {
                "quantity": 4,
                "material": "Perfect Basalt"
            }
        ]
    },
    {
        "name": "1936 to 2500 War Hammer",
        "category": "War Hammer",
        "craftingLevel": 388,
        "minLevel": 1936,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/1936_to_2500_War_Hammer",
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
        "name": "2006 to 2500 Bolas",
        "category": "Bolas",
        "craftingLevel": 402,
        "minLevel": 2006,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2006_to_2500_Bolas",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Andesite"
            }
        ]
    },
    {
        "name": "2071 to 2500 Stone Chunk Shield",
        "category": "Stone Chunk Shield",
        "craftingLevel": 415,
        "minLevel": 2071,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2071_to_2500_Stone_Chunk_Shield",
        "materials": [
            {
                "quantity": 4,
                "material": "Perfect Andesite"
            }
        ]
    },
    {
        "name": "2106 to 2500 Double Headed Hammer",
        "category": "Double Headed Hammer",
        "craftingLevel": 422,
        "minLevel": 2106,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2106_to_2500_Double_Headed_Hammer",
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
        "name": "2176 to 2500 Throwing Clubs",
        "category": "Throwing Clubs",
        "craftingLevel": 436,
        "minLevel": 2176,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2176_to_2500_Throwing_Clubs",
        "materials": [
            {
                "quantity": 5,
                "material": "Perfect Granite"
            }
        ]
    },
    {
        "name": "2241 to 2500 Great Stone Mace",
        "category": "Great Stone Mace",
        "craftingLevel": 449,
        "minLevel": 2241,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2241_to_2500_Great_Stone_Mace",
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
        "name": "2276 to 2500 Polished Stone Shield",
        "category": "Polished Stone Shield",
        "craftingLevel": 456,
        "minLevel": 2276,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2276_to_2500_Polished_Stone_Shield",
        "materials": [
            {
                "quantity": 5,
                "material": "Perfect Granite"
            }
        ]
    },
    {
        "name": "2341 to 2500 Throwing Hammers",
        "category": "Throwing Hammers",
        "craftingLevel": 469,
        "minLevel": 2341,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2341_to_2500_Throwing_Hammers",
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
        "name": "2411 to 2500 Great Hammer",
        "category": "Great Hammer",
        "craftingLevel": 483,
        "minLevel": 2411,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2411_to_2500_Great_Hammer",
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
        "name": "2446 to 2500 Sling",
        "category": "Sling",
        "craftingLevel": 490,
        "minLevel": 2446,
        "maxLevel": 2500,
        "url": "https://brightershoreswiki.org/w/2446_to_2500_Sling",
        "materials": [
            {
                "quantity": 3,
                "material": "Perfect Deathstone"
            }
        ]
    }
];
