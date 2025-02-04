import {Element, elements} from "./element";

export interface Enemy {
    name: string;
    unlockLevel: number; // Minimum level required to encounter this enemy
    combatLevel: number; // The combat level of the enemy
    vulnerability: Element | null; // Elemental vulnerability
    immunity: Element | null; // Elemental immunity
}

export const guardEnemies: Enemy[] = [
    {
        "name": "Recruit Sparring Guard",
        "unlockLevel": 0,
        "combatLevel": 0,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Glinteye Deathcrow",
        "unlockLevel": 0,
        "combatLevel": 2,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Common Thief",
        "unlockLevel": 0,
        "combatLevel": 4,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Looter Goblin Soldier",
        "unlockLevel": 0,
        "combatLevel": 6,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Irritable Goblin Chief",
        "unlockLevel": 0,
        "combatLevel": 8,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Feral Hairbeast",
        "unlockLevel": 0,
        "combatLevel": 10,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Greenlid Carnivorous Plant",
        "unlockLevel": 0,
        "combatLevel": 12,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Shambling Ghoul",
        "unlockLevel": 0,
        "combatLevel": 14,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Beady-eyed Deathcrow",
        "unlockLevel": 10,
        "combatLevel": 16,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Rookie Sparring Guard",
        "unlockLevel": 12,
        "combatLevel": 18,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Scruffy Thief",
        "unlockLevel": 14,
        "combatLevel": 22,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Hooligan Goblin Soldier",
        "unlockLevel": 16,
        "combatLevel": 28,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Tangled Hairbeast",
        "unlockLevel": 18,
        "combatLevel": 33,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Bossy Goblin Chief",
        "unlockLevel": 22,
        "combatLevel": 41,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Snap Carnivorous Plant",
        "unlockLevel": 28,
        "combatLevel": 47,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Foraging Ghoul",
        "unlockLevel": 33,
        "combatLevel": 52,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Wily Deathcrow",
        "unlockLevel": 41,
        "combatLevel": 60,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Loitering Thief",
        "unlockLevel": 47,
        "combatLevel": 66,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Patrol Sparring Guard",
        "unlockLevel": 52,
        "combatLevel": 71,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Plunderer Goblin Soldier",
        "unlockLevel": 60,
        "combatLevel": 77,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Lumbering Hairbeast",
        "unlockLevel": 66,
        "combatLevel": 85,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Leafjaw Carnivorous Plant",
        "unlockLevel": 71,
        "combatLevel": 90,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Robust Goblin Chief",
        "unlockLevel": 77,
        "combatLevel": 96,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Slickwing Deathcrow",
        "unlockLevel": 85,
        "combatLevel": 104,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Pale Ghoul",
        "unlockLevel": 90,
        "combatLevel": 110,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Shifty Thief",
        "unlockLevel": 96,
        "combatLevel": 115,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Raider Goblin Soldier",
        "unlockLevel": 104,
        "combatLevel": 124,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Wall Sparring Guard",
        "unlockLevel": 110,
        "combatLevel": 129,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Shaggy Hairbeast",
        "unlockLevel": 115,
        "combatLevel": 135,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Munching Carnivorous Plant",
        "unlockLevel": 124,
        "combatLevel": 143,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Authoritative Goblin Chief",
        "unlockLevel": 129,
        "combatLevel": 149,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Shadowy Deathcrow",
        "unlockLevel": 135,
        "combatLevel": 155,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Crafty Thief",
        "unlockLevel": 143,
        "combatLevel": 160,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Marauder Goblin Soldier",
        "unlockLevel": 149,
        "combatLevel": 169,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Crazed Ghoul",
        "unlockLevel": 155,
        "combatLevel": 174,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Veteran Sparring Guard",
        "unlockLevel": 160,
        "combatLevel": 180,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Hefty Hairbeast",
        "unlockLevel": 169,
        "combatLevel": 188,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Bladefang Carnivorous Plant",
        "unlockLevel": 174,
        "combatLevel": 194,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Vicious Deathcrow",
        "unlockLevel": 180,
        "combatLevel": 200,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Fierce Goblin Chief",
        "unlockLevel": 188,
        "combatLevel": 227,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Sneaky Thief",
        "unlockLevel": 194,
        "combatLevel": 245,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Trooper Goblin Soldier",
        "unlockLevel": 200,
        "combatLevel": 263,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Prowling Ghoul",
        "unlockLevel": 227,
        "combatLevel": 290,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Savage Hairbeast",
        "unlockLevel": 245,
        "combatLevel": 308,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Armsnapper Carnivorous Plant",
        "unlockLevel": 263,
        "combatLevel": 326,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Decorated Sparring Guard",
        "unlockLevel": 290,
        "combatLevel": 345,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Malevolent Deathcrow",
        "unlockLevel": 308,
        "combatLevel": 372,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Dangerous Thief",
        "unlockLevel": 326,
        "combatLevel": 390,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Preeminent Goblin Chief",
        "unlockLevel": 345,
        "combatLevel": 408,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Warrior Goblin Soldier",
        "unlockLevel": 372,
        "combatLevel": 435,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Psychic Hairbeast",
        "unlockLevel": 390,
        "combatLevel": 453,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Frenzied Ghoul",
        "unlockLevel": 408,
        "combatLevel": 471,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Bonecruncher Carnivorous Plant",
        "unlockLevel": 435,
        "combatLevel": 490,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    }
];

export const scoutEnemies: Enemy[] = [
    {
        "name": "Ragged Outlaw",
        "unlockLevel": 0,
        "combatLevel": 0,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Vagabond Goblin",
        "unlockLevel": 0,
        "combatLevel": 2,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Grizzly Bear",
        "unlockLevel": 0,
        "combatLevel": 4,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Twisted Wendigo",
        "unlockLevel": 0,
        "combatLevel": 6,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Common Viper",
        "unlockLevel": 0,
        "combatLevel": 8,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Lean Spriggan",
        "unlockLevel": 0,
        "combatLevel": 10,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Rotting Bramblelith",
        "unlockLevel": 0,
        "combatLevel": 12,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Murmuring Shade",
        "unlockLevel": 0,
        "combatLevel": 14,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Disreputable Outlaw",
        "unlockLevel": 10,
        "combatLevel": 16,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Warty Goblin",
        "unlockLevel": 12,
        "combatLevel": 18,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Shambling Bear",
        "unlockLevel": 14,
        "combatLevel": 22,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Horned Viper",
        "unlockLevel": 16,
        "combatLevel": 28,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Wirehair Wendigo",
        "unlockLevel": 18,
        "combatLevel": 33,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Bright-eyed Spriggan",
        "unlockLevel": 22,
        "combatLevel": 39,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Mean Outlaw",
        "unlockLevel": 28,
        "combatLevel": 47,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Budding Bramblelith",
        "unlockLevel": 33,
        "combatLevel": 52,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Slinking Shade",
        "unlockLevel": 39,
        "combatLevel": 58,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Rowdy Goblin",
        "unlockLevel": 47,
        "combatLevel": 63,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Gray Bear",
        "unlockLevel": 52,
        "combatLevel": 71,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Asp Viper",
        "unlockLevel": 58,
        "combatLevel": 77,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Gaudy Outlaw",
        "unlockLevel": 63,
        "combatLevel": 82,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Roughbark Spriggan",
        "unlockLevel": 71,
        "combatLevel": 88,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Silverhide Wendigo",
        "unlockLevel": 77,
        "combatLevel": 96,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Stalking Bramblelith",
        "unlockLevel": 82,
        "combatLevel": 101,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Deformed Goblin",
        "unlockLevel": 88,
        "combatLevel": 107,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Gray Shade",
        "unlockLevel": 96,
        "combatLevel": 112,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Hungry Bear",
        "unlockLevel": 101,
        "combatLevel": 121,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Sneaky Outlaw",
        "unlockLevel": 107,
        "combatLevel": 126,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Cotton Mouth Viper",
        "unlockLevel": 112,
        "combatLevel": 132,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Leafswirl Spriggan",
        "unlockLevel": 121,
        "combatLevel": 138,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Furious Wendigo",
        "unlockLevel": 126,
        "combatLevel": 146,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Angry Goblin",
        "unlockLevel": 132,
        "combatLevel": 152,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Shaggy Bear",
        "unlockLevel": 138,
        "combatLevel": 157,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Creeping Bramblelith",
        "unlockLevel": 146,
        "combatLevel": 166,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Nimble Outlaw",
        "unlockLevel": 152,
        "combatLevel": 171,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Wailing Shade",
        "unlockLevel": 157,
        "combatLevel": 177,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Arrow Head Viper",
        "unlockLevel": 166,
        "combatLevel": 183,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Stretching Spriggan",
        "unlockLevel": 171,
        "combatLevel": 191,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Menacing Wendigo",
        "unlockLevel": 177,
        "combatLevel": 197,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Rugged Goblin",
        "unlockLevel": 183,
        "combatLevel": 209,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Tough Outlaw",
        "unlockLevel": 191,
        "combatLevel": 227,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Cinnamon Bear",
        "unlockLevel": 197,
        "combatLevel": 254,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Razor Bramblelith",
        "unlockLevel": 209,
        "combatLevel": 272,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Rock Viper",
        "unlockLevel": 227,
        "combatLevel": 290,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Spooky Shade",
        "unlockLevel": 254,
        "combatLevel": 308,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Mysterious Spriggan",
        "unlockLevel": 272,
        "combatLevel": 335,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Monstrous Goblin",
        "unlockLevel": 290,
        "combatLevel": 354,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Notorious Outlaw",
        "unlockLevel": 308,
        "combatLevel": 372,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Terrifying Wendigo",
        "unlockLevel": 335,
        "combatLevel": 390,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Black Bear",
        "unlockLevel": 354,
        "combatLevel": 417,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Magnificent Viper",
        "unlockLevel": 372,
        "combatLevel": 435,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Deadly Bramblelith",
        "unlockLevel": 390,
        "combatLevel": 453,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Powerful Spriggan",
        "unlockLevel": 417,
        "combatLevel": 471,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Terrifying Shade",
        "unlockLevel": 435,
        "combatLevel": 490,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    }
];

export const mineEnemies: Enemy[] = [
    {
        "name": "Haggard Minecrawler",
        "unlockLevel": 0,
        "combatLevel": 0,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Nuisance Goblin Miner",
        "unlockLevel": 0,
        "combatLevel": 2,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Shadowy Floor Tentacle",
        "unlockLevel": 0,
        "combatLevel": 4,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Slimy Fire Toad",
        "unlockLevel": 0,
        "combatLevel": 6,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Brittle Skeleton Miner",
        "unlockLevel": 0,
        "combatLevel": 8,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Rusty Metalith",
        "unlockLevel": 0,
        "combatLevel": 10,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Old Cobble Stonewurm",
        "unlockLevel": 0,
        "combatLevel": 12,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Stinking Cockroach",
        "unlockLevel": 0,
        "combatLevel": 14,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Drifting Wraith",
        "unlockLevel": 0,
        "combatLevel": 16,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "One Eyed Blob",
        "unlockLevel": 0,
        "combatLevel": 18,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Pale Minecrawler",
        "unlockLevel": 14,
        "combatLevel": 22,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Wastrel Goblin Miner",
        "unlockLevel": 16,
        "combatLevel": 24,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Gooey Floor Tentacle",
        "unlockLevel": 18,
        "combatLevel": 29,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Yellowing Skeleton Miner",
        "unlockLevel": 22,
        "combatLevel": 34,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Broad Footed Fire Toad",
        "unlockLevel": 24,
        "combatLevel": 39,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Short Legged Cockroach",
        "unlockLevel": 29,
        "combatLevel": 44,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Iron Metalith",
        "unlockLevel": 34,
        "combatLevel": 49,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Twelverock Stonewurm",
        "unlockLevel": 39,
        "combatLevel": 54,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Umber Blob",
        "unlockLevel": 44,
        "combatLevel": 58,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Faded Wraith",
        "unlockLevel": 49,
        "combatLevel": 63,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Ugly Minecrawler",
        "unlockLevel": 54,
        "combatLevel": 68,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Ragamuffin Goblin Miner",
        "unlockLevel": 58,
        "combatLevel": 73,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Clattering Skeleton Miner",
        "unlockLevel": 63,
        "combatLevel": 78,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Red Sucker Floor Tentacle",
        "unlockLevel": 68,
        "combatLevel": 83,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Lumpy Fire Toad",
        "unlockLevel": 73,
        "combatLevel": 88,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Mantuban Cockroach",
        "unlockLevel": 78,
        "combatLevel": 90,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Spiked Metalith",
        "unlockLevel": 83,
        "combatLevel": 95,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Smooth Back Stonewurm",
        "unlockLevel": 88,
        "combatLevel": 100,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Slobbering Blob",
        "unlockLevel": 90,
        "combatLevel": 105,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Ashen Minecrawler",
        "unlockLevel": 95,
        "combatLevel": 110,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Broken Jaw Skeleton Miner",
        "unlockLevel": 100,
        "combatLevel": 114,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Miscreant Goblin Miner",
        "unlockLevel": 105,
        "combatLevel": 119,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Howling Wraith",
        "unlockLevel": 110,
        "combatLevel": 124,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Darkvein Floor Tentacle",
        "unlockLevel": 114,
        "combatLevel": 128,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Silverstripe Fire Toad",
        "unlockLevel": 119,
        "combatLevel": 133,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Speckled Cockroach",
        "unlockLevel": 124,
        "combatLevel": 138,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Pasty Blob",
        "unlockLevel": 128,
        "combatLevel": 143,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Grayboned Skeleton Miner",
        "unlockLevel": 133,
        "combatLevel": 147,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Jagged Metalith",
        "unlockLevel": 138,
        "combatLevel": 152,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Boil Ridden Minecrawler",
        "unlockLevel": 143,
        "combatLevel": 155,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Delinquent Goblin Miner",
        "unlockLevel": 147,
        "combatLevel": 159,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Grim Heart Stonewurm",
        "unlockLevel": 152,
        "combatLevel": 164,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Sharp Snap Floor Tentacle",
        "unlockLevel": 155,
        "combatLevel": 169,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Spined Cockroach",
        "unlockLevel": 159,
        "combatLevel": 173,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Belching Fire Toad",
        "unlockLevel": 164,
        "combatLevel": 178,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Chilling Wraith",
        "unlockLevel": 169,
        "combatLevel": 183,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Durable Skeleton Miner",
        "unlockLevel": 173,
        "combatLevel": 188,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Blotchy Blob",
        "unlockLevel": 178,
        "combatLevel": 192,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Sharptooth Minecrawler",
        "unlockLevel": 183,
        "combatLevel": 197,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Troublemaker Goblin Miner",
        "unlockLevel": 188,
        "combatLevel": 207,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Smokeybrown Cockroach",
        "unlockLevel": 192,
        "combatLevel": 223,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Glinted Metalith",
        "unlockLevel": 197,
        "combatLevel": 239,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Tightgrip Floor Tentacle",
        "unlockLevel": 207,
        "combatLevel": 254,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Craggy Stonewurm",
        "unlockLevel": 223,
        "combatLevel": 270,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Loathsome Fire Toad",
        "unlockLevel": 239,
        "combatLevel": 278,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Throsum Wraith",
        "unlockLevel": 254,
        "combatLevel": 294,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Dangerous Skeleton Miner",
        "unlockLevel": 270,
        "combatLevel": 309,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Vile Blob",
        "unlockLevel": 278,
        "combatLevel": 325,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Hairy Cockroach",
        "unlockLevel": 294,
        "combatLevel": 341,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Deepway Minecrawler",
        "unlockLevel": 309,
        "combatLevel": 356,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Scoundrel Goblin Miner",
        "unlockLevel": 325,
        "combatLevel": 372,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Malevolent Floor Tentacle",
        "unlockLevel": 341,
        "combatLevel": 388,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Volatile Fire Toad",
        "unlockLevel": 356,
        "combatLevel": 403,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Toughened Metalith",
        "unlockLevel": 372,
        "combatLevel": 419,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Insidious Stonewurm",
        "unlockLevel": 388,
        "combatLevel": 435,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Elite Skeleton Miner",
        "unlockLevel": 403,
        "combatLevel": 450,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Grim Wraith",
        "unlockLevel": 419,
        "combatLevel": 466,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Deaths Head Cockroach",
        "unlockLevel": 435,
        "combatLevel": 482,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Bulging Blob",
        "unlockLevel": 450,
        "combatLevel": 490,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    }
];

export const watchEnemies: Enemy[] = [
    {
        "name": "Whitepaw Sabertooth Tiger",
        "unlockLevel": 0,
        "combatLevel": 0,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Flea Ridden Street Hag",
        "unlockLevel": 0,
        "combatLevel": 2,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Warty Mawchest",
        "unlockLevel": 0,
        "combatLevel": 4,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Yellow Giant Wasp",
        "unlockLevel": 0,
        "combatLevel": 6,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Mad Sewer Fiend",
        "unlockLevel": 0,
        "combatLevel": 8,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Decomposing Zombie",
        "unlockLevel": 0,
        "combatLevel": 10,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Murky Spectral Stalker",
        "unlockLevel": 0,
        "combatLevel": 12,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Blunt Spiky Ball",
        "unlockLevel": 0,
        "combatLevel": 14,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Slinking Sabertooth Tiger",
        "unlockLevel": 10,
        "combatLevel": 16,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Toothless Street Hag",
        "unlockLevel": 12,
        "combatLevel": 18,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Paper Giant Wasp",
        "unlockLevel": 14,
        "combatLevel": 22,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Sickening Sewer Fiend",
        "unlockLevel": 16,
        "combatLevel": 28,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Orange Eyed Mawchest",
        "unlockLevel": 18,
        "combatLevel": 34,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Eyeless Zombie",
        "unlockLevel": 22,
        "combatLevel": 39,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Snarling Spectral Stalker",
        "unlockLevel": 28,
        "combatLevel": 48,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Ragged Spiky Ball",
        "unlockLevel": 34,
        "combatLevel": 53,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Widefang Sabertooth Tiger",
        "unlockLevel": 39,
        "combatLevel": 59,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Cackling Street Hag",
        "unlockLevel": 48,
        "combatLevel": 65,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Red Giant Wasp",
        "unlockLevel": 53,
        "combatLevel": 73,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Gibbering Sewer Fiend",
        "unlockLevel": 59,
        "combatLevel": 79,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Maggoty Zombie",
        "unlockLevel": 65,
        "combatLevel": 84,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Fire Core Spectral Stalker",
        "unlockLevel": 73,
        "combatLevel": 93,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Spiny Mawchest",
        "unlockLevel": 79,
        "combatLevel": 98,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Puffy Spiky Ball",
        "unlockLevel": 84,
        "combatLevel": 104,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Skulking Sabertooth Tiger",
        "unlockLevel": 93,
        "combatLevel": 110,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Grubby Street Hag",
        "unlockLevel": 98,
        "combatLevel": 118,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Pale Giant Wasp",
        "unlockLevel": 104,
        "combatLevel": 124,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Glistening Sewer Fiend",
        "unlockLevel": 110,
        "combatLevel": 129,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Hungry Zombie",
        "unlockLevel": 118,
        "combatLevel": 135,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Flare Eyed Spectral Stalker",
        "unlockLevel": 124,
        "combatLevel": 143,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Variegated Spiky Ball",
        "unlockLevel": 129,
        "combatLevel": 149,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Rockblend Sabertooth Tiger",
        "unlockLevel": 135,
        "combatLevel": 155,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Terrible White Mawchest",
        "unlockLevel": 143,
        "combatLevel": 160,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Sinister Street Hag",
        "unlockLevel": 149,
        "combatLevel": 169,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Potter Giant Wasp",
        "unlockLevel": 155,
        "combatLevel": 174,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Vile Green Sewer Fiend",
        "unlockLevel": 160,
        "combatLevel": 180,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Twisted Zombie",
        "unlockLevel": 169,
        "combatLevel": 185,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Glimmering Spectral Stalker",
        "unlockLevel": 174,
        "combatLevel": 194,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Shiny Spiky Ball",
        "unlockLevel": 180,
        "combatLevel": 200,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Steelclaw Sabertooth Tiger",
        "unlockLevel": 185,
        "combatLevel": 218,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Mysterious Street Hag",
        "unlockLevel": 194,
        "combatLevel": 237,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Horned Giant Wasp",
        "unlockLevel": 200,
        "combatLevel": 265,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Wicked Sewer Fiend",
        "unlockLevel": 218,
        "combatLevel": 284,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Longfang Mawchest",
        "unlockLevel": 237,
        "combatLevel": 302,
        "vulnerability": elements.tempestae,
        "immunity": elements.tempestae
    },
    {
        "name": "Ravenous Zombie",
        "unlockLevel": 265,
        "combatLevel": 330,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Horrifying Spectral Stalker",
        "unlockLevel": 284,
        "combatLevel": 349,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Sharp Spiky Ball",
        "unlockLevel": 302,
        "combatLevel": 368,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Terrifying Sabertooth Tiger",
        "unlockLevel": 330,
        "combatLevel": 387,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    },
    {
        "name": "Powerful Street Hag",
        "unlockLevel": 349,
        "combatLevel": 415,
        "vulnerability": elements.infernae,
        "immunity": elements.infernae
    },
    {
        "name": "Steel Sheen Giant Wasp",
        "unlockLevel": 368,
        "combatLevel": 433,
        "vulnerability": elements.arborae,
        "immunity": elements.arborae
    },
    {
        "name": "Diabolical Sewer Fiend",
        "unlockLevel": 387,
        "combatLevel": 452,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Green-Eyed Zombie",
        "unlockLevel": 415,
        "combatLevel": 471,
        "vulnerability": elements.necromae,
        "immunity": elements.necromae
    },
    {
        "name": "Blood Tipped Spiky Ball",
        "unlockLevel": 433,
        "combatLevel": 490,
        "vulnerability": elements.cryonae,
        "immunity": elements.cryonae
    }
];

