import {Element, elements} from "./element";

export interface Enemy {
    name: string;
    url: string;
    unlockLevel: number; // Minimum level required to encounter this enemy
    combatLevel: number; // The combat level of the enemy
    vulnerability: Element | null; // Elemental vulnerability
    immunity: Element | null; // Elemental immunity
}

export const guardEnemies: Enemy[] = [
    {
        "name": "Recruit Sparring Guard",
        "url": "https://brightershoreswiki.org/w/Recruit_Sparring_Guard#Male_(brown_hair)",
        "unlockLevel": 0,
        "combatLevel": 0,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Glinteye Deathcrow",
        "url": "https://brightershoreswiki.org/w/Glinteye_Deathcrow",
        "unlockLevel": 0,
        "combatLevel": 2,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Common Thief",
        "url": "https://brightershoreswiki.org/w/Common_Thief#Male_(black_hair)",
        "unlockLevel": 0,
        "combatLevel": 4,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Looter Goblin Soldier",
        "url": "https://brightershoreswiki.org/w/Looter_Goblin_Soldier",
        "unlockLevel": 0,
        "combatLevel": 6,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Irritable Goblin Chief",
        "url": "https://brightershoreswiki.org/w/Irritable_Goblin_Chief",
        "unlockLevel": 0,
        "combatLevel": 8,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Feral Hairbeast",
        "url": "https://brightershoreswiki.org/w/Feral_Hairbeast",
        "unlockLevel": 0,
        "combatLevel": 10,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Greenlid Carnivorous Plant",
        "url": "https://brightershoreswiki.org/w/Greenlid_Carnivorous_Plant",
        "unlockLevel": 0,
        "combatLevel": 12,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Shambling Ghoul",
        "url": "https://brightershoreswiki.org/w/Shambling_Ghoul",
        "unlockLevel": 0,
        "combatLevel": 14,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Beady-eyed Deathcrow",
        "url": "https://brightershoreswiki.org/w/Beady-eyed_Deathcrow",
        "unlockLevel": 10,
        "combatLevel": 16,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Rookie Sparring Guard",
        "url": "https://brightershoreswiki.org/w/Rookie_Sparring_Guard#Male_(brown_hair)",
        "unlockLevel": 12,
        "combatLevel": 18,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Scruffy Thief",
        "url": "https://brightershoreswiki.org/w/Scruffy_Thief#Male_(black_hair)",
        "unlockLevel": 14,
        "combatLevel": 22,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Hooligan Goblin Soldier",
        "url": "https://brightershoreswiki.org/w/Hooligan_Goblin_Soldier",
        "unlockLevel": 16,
        "combatLevel": 28,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Tangled Hairbeast",
        "url": "https://brightershoreswiki.org/w/Tangled_Hairbeast",
        "unlockLevel": 18,
        "combatLevel": 33,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Bossy Goblin Chief",
        "url": "https://brightershoreswiki.org/w/Bossy_Goblin_Chief",
        "unlockLevel": 22,
        "combatLevel": 41,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Snap Carnivorous Plant",
        "url": "https://brightershoreswiki.org/w/Snap_Carnivorous_Plant",
        "unlockLevel": 28,
        "combatLevel": 47,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Foraging Ghoul",
        "url": "https://brightershoreswiki.org/w/Foraging_Ghoul",
        "unlockLevel": 33,
        "combatLevel": 52,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Wily Deathcrow",
        "url": "https://brightershoreswiki.org/w/Wily_Deathcrow",
        "unlockLevel": 41,
        "combatLevel": 60,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Loitering Thief",
        "url": "https://brightershoreswiki.org/w/Loitering_Thief#Male_(black_hair)",
        "unlockLevel": 47,
        "combatLevel": 66,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Patrol Sparring Guard",
        "url": "https://brightershoreswiki.org/w/Patrol_Sparring_Guard#Male_(brown_hair)",
        "unlockLevel": 52,
        "combatLevel": 71,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Plunderer Goblin Soldier",
        "url": "https://brightershoreswiki.org/w/Plunderer_Goblin_Soldier",
        "unlockLevel": 60,
        "combatLevel": 77,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Lumbering Hairbeast",
        "url": "https://brightershoreswiki.org/w/Lumbering_Hairbeast",
        "unlockLevel": 66,
        "combatLevel": 85,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Leafjaw Carnivorous Plant",
        "url": "https://brightershoreswiki.org/w/Leafjaw_Carnivorous_Plant",
        "unlockLevel": 71,
        "combatLevel": 90,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Robust Goblin Chief",
        "url": "https://brightershoreswiki.org/w/Robust_Goblin_Chief",
        "unlockLevel": 77,
        "combatLevel": 96,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Slickwing Deathcrow",
        "url": "https://brightershoreswiki.org/w/Slickwing_Deathcrow",
        "unlockLevel": 85,
        "combatLevel": 104,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Pale Ghoul",
        "url": "https://brightershoreswiki.org/w/Pale_Ghoul",
        "unlockLevel": 90,
        "combatLevel": 110,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Shifty Thief",
        "url": "https://brightershoreswiki.org/w/Shifty_Thief#Male_(black_hair)",
        "unlockLevel": 96,
        "combatLevel": 115,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Raider Goblin Soldier",
        "url": "https://brightershoreswiki.org/w/Raider_Goblin_Soldier",
        "unlockLevel": 104,
        "combatLevel": 124,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Wall Sparring Guard",
        "url": "https://brightershoreswiki.org/w/Wall_Sparring_Guard#Male_(brown_hair)",
        "unlockLevel": 110,
        "combatLevel": 129,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Shaggy Hairbeast",
        "url": "https://brightershoreswiki.org/w/Shaggy_Hairbeast",
        "unlockLevel": 115,
        "combatLevel": 135,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Munching Carnivorous Plant",
        "url": "https://brightershoreswiki.org/w/Munching_Carnivorous_Plant",
        "unlockLevel": 124,
        "combatLevel": 143,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Authoritative Goblin Chief",
        "url": "https://brightershoreswiki.org/w/Authoritative_Goblin_Chief",
        "unlockLevel": 129,
        "combatLevel": 149,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Shadowy Deathcrow",
        "url": "https://brightershoreswiki.org/w/Shadowy_Deathcrow",
        "unlockLevel": 135,
        "combatLevel": 155,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Crafty Thief",
        "url": "https://brightershoreswiki.org/w/Crafty_Thief#Male_(black_hair)",
        "unlockLevel": 143,
        "combatLevel": 160,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Marauder Goblin Soldier",
        "url": "https://brightershoreswiki.org/w/Marauder_Goblin_Soldier",
        "unlockLevel": 149,
        "combatLevel": 169,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Crazed Ghoul",
        "url": "https://brightershoreswiki.org/w/Crazed_Ghoul",
        "unlockLevel": 155,
        "combatLevel": 174,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Veteran Sparring Guard",
        "url": "https://brightershoreswiki.org/w/Veteran_Sparring_Guard#Male_(brown_hair)",
        "unlockLevel": 160,
        "combatLevel": 180,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Hefty Hairbeast",
        "url": "https://brightershoreswiki.org/w/Hefty_Hairbeast",
        "unlockLevel": 169,
        "combatLevel": 188,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Bladefang Carnivorous Plant",
        "url": "https://brightershoreswiki.org/w/Bladefang_Carnivorous_Plant",
        "unlockLevel": 174,
        "combatLevel": 194,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Vicious Deathcrow",
        "url": "https://brightershoreswiki.org/w/Vicious_Deathcrow",
        "unlockLevel": 180,
        "combatLevel": 200,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Fierce Goblin Chief",
        "url": "https://brightershoreswiki.org/w/Fierce_Goblin_Chief",
        "unlockLevel": 188,
        "combatLevel": 227,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Sneaky Thief",
        "url": "https://brightershoreswiki.org/w/Sneaky_Thief#Male_(black_hair)",
        "unlockLevel": 194,
        "combatLevel": 245,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Trooper Goblin Soldier",
        "url": "https://brightershoreswiki.org/w/Trooper_Goblin_Soldier",
        "unlockLevel": 200,
        "combatLevel": 263,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Prowling Ghoul",
        "url": "https://brightershoreswiki.org/w/Prowling_Ghoul",
        "unlockLevel": 227,
        "combatLevel": 290,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Savage Hairbeast",
        "url": "https://brightershoreswiki.org/w/Savage_Hairbeast",
        "unlockLevel": 245,
        "combatLevel": 308,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Armsnapper Carnivorous Plant",
        "url": "https://brightershoreswiki.org/w/Armsnapper_Carnivorous_Plant",
        "unlockLevel": 263,
        "combatLevel": 326,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Decorated Sparring Guard",
        "url": "https://brightershoreswiki.org/w/Decorated_Sparring_Guard#Male_(brown_hair)",
        "unlockLevel": 290,
        "combatLevel": 345,
        "vulnerability": null,
        "immunity": null
    },
    {
        "name": "Malevolent Deathcrow",
        "url": "https://brightershoreswiki.org/w/Malevolent_Deathcrow",
        "unlockLevel": 308,
        "combatLevel": 372,
        "vulnerability": elements.cryonae,
        "immunity": elements.necromae
    },
    {
        "name": "Dangerous Thief",
        "url": "https://brightershoreswiki.org/w/Dangerous_Thief#Male_(black_hair)",
        "unlockLevel": 326,
        "combatLevel": 390,
        "vulnerability": elements.arborae,
        "immunity": elements.cryonae
    },
    {
        "name": "Preeminent Goblin Chief",
        "url": "https://brightershoreswiki.org/w/Preeminent_Goblin_Chief",
        "unlockLevel": 345,
        "combatLevel": 408,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Warrior Goblin Soldier",
        "url": "https://brightershoreswiki.org/w/Warrior_Goblin_Soldier",
        "unlockLevel": 372,
        "combatLevel": 435,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Psychic Hairbeast",
        "url": "https://brightershoreswiki.org/w/Psychic_Hairbeast",
        "unlockLevel": 390,
        "combatLevel": 453,
        "vulnerability": elements.necromae,
        "immunity": elements.tempestae
    },
    {
        "name": "Frenzied Ghoul",
        "url": "https://brightershoreswiki.org/w/Frenzied_Ghoul",
        "unlockLevel": 408,
        "combatLevel": 471,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Bonecruncher Carnivorous Plant",
        "url": "https://brightershoreswiki.org/w/Bonecruncher_Carnivorous_Plant",
        "unlockLevel": 435,
        "combatLevel": 490,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    }
];

export const scoutEnemies: Enemy[] = [
    {
        "name": "Ragged Outlaw",
        "url": "https://brightershoreswiki.org/w/Ragged_Outlaw#Brown",
        "unlockLevel": 0,
        "combatLevel": 0,
        "vulnerability": elements.arborae,
        "immunity": null
    },
    {
        "name": "Vagabond Goblin",
        "url": "https://brightershoreswiki.org/w/Vagabond_Goblin#1",
        "unlockLevel": 0,
        "combatLevel": 2,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Grizzly Bear",
        "url": "https://brightershoreswiki.org/w/Grizzly_Bear",
        "unlockLevel": 0,
        "combatLevel": 4,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Twisted Wendigo",
        "url": "https://brightershoreswiki.org/w/Twisted_Wendigo",
        "unlockLevel": 0,
        "combatLevel": 6,
        "vulnerability": elements.infernae,
        "immunity": elements.cryonae
    },
    {
        "name": "Common Viper",
        "url": "https://brightershoreswiki.org/w/Common_Viper",
        "unlockLevel": 0,
        "combatLevel": 8,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Lean Spriggan",
        "url": "https://brightershoreswiki.org/w/Lean_Spriggan",
        "unlockLevel": 0,
        "combatLevel": 10,
        "vulnerability": elements.infernae,
        "immunity": elements.arborae
    },
    {
        "name": "Rotting Bramblelith",
        "url": "https://brightershoreswiki.org/w/Rotting_Bramblelith",
        "unlockLevel": 0,
        "combatLevel": 12,
        "vulnerability": elements.tempestae,
        "immunity": elements.arborae
    },
    {
        "name": "Murmuring Shade",
        "url": "https://brightershoreswiki.org/w/Murmuring_Shade",
        "unlockLevel": 0,
        "combatLevel": 14,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Disreputable Outlaw",
        "url": "https://brightershoreswiki.org/w/Disreputable_Outlaw#Brown",
        "unlockLevel": 10,
        "combatLevel": 16,
        "vulnerability": elements.arborae,
        "immunity": null
    },
    {
        "name": "Warty Goblin",
        "url": "https://brightershoreswiki.org/w/Warty_Goblin#1",
        "unlockLevel": 12,
        "combatLevel": 18,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Shambling Bear",
        "url": "https://brightershoreswiki.org/w/Shambling_Bear",
        "unlockLevel": 14,
        "combatLevel": 22,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Horned Viper",
        "url": "https://brightershoreswiki.org/w/Horned_Viper",
        "unlockLevel": 16,
        "combatLevel": 28,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Wirehair Wendigo",
        "url": "https://brightershoreswiki.org/w/Wirehair_Wendigo",
        "unlockLevel": 18,
        "combatLevel": 33,
        "vulnerability": elements.infernae,
        "immunity": elements.cryonae
    },
    {
        "name": "Bright-eyed Spriggan",
        "url": "https://brightershoreswiki.org/w/Bright-eyed_Spriggan",
        "unlockLevel": 22,
        "combatLevel": 39,
        "vulnerability": elements.infernae,
        "immunity": elements.arborae
    },
    {
        "name": "Mean Outlaw",
        "url": "https://brightershoreswiki.org/w/Mean_Outlaw#Brown",
        "unlockLevel": 28,
        "combatLevel": 47,
        "vulnerability": elements.arborae,
        "immunity": null
    },
    {
        "name": "Budding Bramblelith",
        "url": "https://brightershoreswiki.org/w/Budding_Bramblelith",
        "unlockLevel": 33,
        "combatLevel": 52,
        "vulnerability": elements.tempestae,
        "immunity": elements.arborae
    },
    {
        "name": "Slinking Shade",
        "url": "https://brightershoreswiki.org/w/Slinking_Shade",
        "unlockLevel": 39,
        "combatLevel": 58,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Rowdy Goblin",
        "url": "https://brightershoreswiki.org/w/Rowdy_Goblin#1",
        "unlockLevel": 47,
        "combatLevel": 63,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Gray Bear",
        "url": "https://brightershoreswiki.org/w/Gray_Bear",
        "unlockLevel": 52,
        "combatLevel": 71,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Asp Viper",
        "url": "https://brightershoreswiki.org/w/Asp_Viper",
        "unlockLevel": 58,
        "combatLevel": 77,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Gaudy Outlaw",
        "url": "https://brightershoreswiki.org/w/Gaudy_Outlaw#Brown",
        "unlockLevel": 63,
        "combatLevel": 82,
        "vulnerability": elements.arborae,
        "immunity": null
    },
    {
        "name": "Roughbark Spriggan",
        "url": "https://brightershoreswiki.org/w/Roughbark_Spriggan",
        "unlockLevel": 71,
        "combatLevel": 88,
        "vulnerability": elements.infernae,
        "immunity": elements.arborae
    },
    {
        "name": "Silverhide Wendigo",
        "url": "https://brightershoreswiki.org/w/Silverhide_Wendigo",
        "unlockLevel": 77,
        "combatLevel": 96,
        "vulnerability": elements.infernae,
        "immunity": elements.cryonae
    },
    {
        "name": "Stalking Bramblelith",
        "url": "https://brightershoreswiki.org/w/Stalking_Bramblelith",
        "unlockLevel": 82,
        "combatLevel": 101,
        "vulnerability": elements.tempestae,
        "immunity": elements.arborae
    },
    {
        "name": "Deformed Goblin",
        "url": "https://brightershoreswiki.org/w/Deformed_Goblin#1",
        "unlockLevel": 88,
        "combatLevel": 107,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Gray Shade",
        "url": "https://brightershoreswiki.org/w/Gray_Shade",
        "unlockLevel": 96,
        "combatLevel": 112,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Hungry Bear",
        "url": "https://brightershoreswiki.org/w/Hungry_Bear",
        "unlockLevel": 101,
        "combatLevel": 121,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Sneaky Outlaw",
        "url": "https://brightershoreswiki.org/w/Sneaky_Outlaw#Red",
        "unlockLevel": 107,
        "combatLevel": 126,
        "vulnerability": elements.arborae,
        "immunity": null
    },
    {
        "name": "Cotton Mouth Viper",
        "url": "https://brightershoreswiki.org/w/Cotton_Mouth_Viper",
        "unlockLevel": 112,
        "combatLevel": 132,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Leafswirl Spriggan",
        "url": "https://brightershoreswiki.org/w/Leafswirl_Spriggan",
        "unlockLevel": 121,
        "combatLevel": 138,
        "vulnerability": elements.infernae,
        "immunity": elements.arborae
    },
    {
        "name": "Furious Wendigo",
        "url": "https://brightershoreswiki.org/w/Furious_Wendigo",
        "unlockLevel": 126,
        "combatLevel": 146,
        "vulnerability": elements.infernae,
        "immunity": elements.cryonae
    },
    {
        "name": "Angry Goblin",
        "url": "https://brightershoreswiki.org/w/Angry_Goblin#1",
        "unlockLevel": 132,
        "combatLevel": 152,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Shaggy Bear",
        "url": "https://brightershoreswiki.org/w/Shaggy_Bear",
        "unlockLevel": 138,
        "combatLevel": 157,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Creeping Bramblelith",
        "url": "https://brightershoreswiki.org/w/Creeping_Bramblelith",
        "unlockLevel": 146,
        "combatLevel": 166,
        "vulnerability": elements.tempestae,
        "immunity": elements.arborae
    },
    {
        "name": "Nimble Outlaw",
        "url": "https://brightershoreswiki.org/w/Nimble_Outlaw#Red",
        "unlockLevel": 152,
        "combatLevel": 171,
        "vulnerability": elements.arborae,
        "immunity": null
    },
    {
        "name": "Wailing Shade",
        "url": "https://brightershoreswiki.org/w/Wailing_Shade",
        "unlockLevel": 157,
        "combatLevel": 177,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Arrow Head Viper",
        "url": "https://brightershoreswiki.org/w/Arrow_Head_Viper",
        "unlockLevel": 166,
        "combatLevel": 183,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Stretching Spriggan",
        "url": "https://brightershoreswiki.org/w/Stretching_Spriggan",
        "unlockLevel": 171,
        "combatLevel": 191,
        "vulnerability": elements.infernae,
        "immunity": elements.arborae
    },
    {
        "name": "Menacing Wendigo",
        "url": "https://brightershoreswiki.org/w/Menacing_Wendigo",
        "unlockLevel": 177,
        "combatLevel": 197,
        "vulnerability": elements.infernae,
        "immunity": elements.cryonae
    },
    {
        "name": "Rugged Goblin",
        "url": "https://brightershoreswiki.org/w/Rugged_Goblin#1",
        "unlockLevel": 183,
        "combatLevel": 209,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Tough Outlaw",
        "url": "https://brightershoreswiki.org/w/Tough_Outlaw#Red",
        "unlockLevel": 191,
        "combatLevel": 227,
        "vulnerability": elements.arborae,
        "immunity": null
    },
    {
        "name": "Cinnamon Bear",
        "url": "https://brightershoreswiki.org/w/Cinnamon_Bear",
        "unlockLevel": 197,
        "combatLevel": 254,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Razor Bramblelith",
        "url": "https://brightershoreswiki.org/w/Razor_Bramblelith",
        "unlockLevel": 209,
        "combatLevel": 272,
        "vulnerability": elements.tempestae,
        "immunity": elements.arborae
    },
    {
        "name": "Rock Viper",
        "url": "https://brightershoreswiki.org/w/Rock_Viper",
        "unlockLevel": 227,
        "combatLevel": 290,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Spooky Shade",
        "url": "https://brightershoreswiki.org/w/Spooky_Shade",
        "unlockLevel": 254,
        "combatLevel": 308,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Mysterious Spriggan",
        "url": "https://brightershoreswiki.org/w/Mysterious_Spriggan",
        "unlockLevel": 272,
        "combatLevel": 335,
        "vulnerability": elements.infernae,
        "immunity": elements.arborae
    },
    {
        "name": "Monstrous Goblin",
        "url": "https://brightershoreswiki.org/w/Monstrous_Goblin#1",
        "unlockLevel": 290,
        "combatLevel": 354,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Notorious Outlaw",
        "url": "https://brightershoreswiki.org/w/Notorious_Outlaw#Red",
        "unlockLevel": 308,
        "combatLevel": 372,
        "vulnerability": elements.arborae,
        "immunity": null
    },
    {
        "name": "Terrifying Wendigo",
        "url": "https://brightershoreswiki.org/w/Terrifying_Wendigo",
        "unlockLevel": 335,
        "combatLevel": 390,
        "vulnerability": elements.infernae,
        "immunity": elements.cryonae
    },
    {
        "name": "Black Bear",
        "url": "https://brightershoreswiki.org/w/Black_Bear",
        "unlockLevel": 354,
        "combatLevel": 417,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Magnificent Viper",
        "url": "https://brightershoreswiki.org/w/Magnificent_Viper",
        "unlockLevel": 372,
        "combatLevel": 435,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Deadly Bramblelith",
        "url": "https://brightershoreswiki.org/w/Deadly_Bramblelith",
        "unlockLevel": 390,
        "combatLevel": 453,
        "vulnerability": elements.tempestae,
        "immunity": elements.arborae
    },
    {
        "name": "Powerful Spriggan",
        "url": "https://brightershoreswiki.org/w/Powerful_Spriggan",
        "unlockLevel": 417,
        "combatLevel": 471,
        "vulnerability": elements.infernae,
        "immunity": elements.arborae
    },
    {
        "name": "Terrifying Shade",
        "url": "https://brightershoreswiki.org/w/Terrifying_Shade",
        "unlockLevel": 435,
        "combatLevel": 490,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    }
];

export const mineEnemies: Enemy[] = [
    {
        "name": "Haggard Minecrawler",
        "url": "https://brightershoreswiki.org/w/Haggard_Minecrawler",
        "unlockLevel": 0,
        "combatLevel": 0,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Nuisance Goblin Miner",
        "url": "https://brightershoreswiki.org/w/Nuisance_Goblin_Miner#1",
        "unlockLevel": 0,
        "combatLevel": 2,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Shadowy Floor Tentacle",
        "url": "https://brightershoreswiki.org/w/Shadowy_Floor_Tentacle",
        "unlockLevel": 0,
        "combatLevel": 4,
        "vulnerability": elements.infernae,
        "immunity": elements.tempestae
    },
    {
        "name": "Slimy Fire Toad",
        "url": "https://brightershoreswiki.org/w/Slimy_Fire_Toad",
        "unlockLevel": 0,
        "combatLevel": 6,
        "vulnerability": elements.cryonae,
        "immunity": elements.infernae
    },
    {
        "name": "Brittle Skeleton Miner",
        "url": "https://brightershoreswiki.org/w/Brittle_Skeleton_Miner",
        "unlockLevel": 0,
        "combatLevel": 8,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Rusty Metalith",
        "url": "https://brightershoreswiki.org/w/Rusty_Metalith",
        "unlockLevel": 0,
        "combatLevel": 10,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Old Cobble Stonewurm",
        "url": "https://brightershoreswiki.org/w/Old_Cobble_Stonewurm",
        "unlockLevel": 0,
        "combatLevel": 12,
        "vulnerability": elements.arborae,
        "immunity": elements.tempestae
    },
    {
        "name": "Stinking Cockroach",
        "url": "https://brightershoreswiki.org/w/Stinking_Cockroach",
        "unlockLevel": 0,
        "combatLevel": 14,
        "vulnerability": elements.infernae,
        "immunity": null
    },
    {
        "name": "Drifting Wraith",
        "url": "https://brightershoreswiki.org/w/Drifting_Wraith",
        "unlockLevel": 0,
        "combatLevel": 16,
        "vulnerability": elements.tempestae,
        "immunity": elements.necromae
    },
    {
        "name": "One Eyed Blob",
        "url": "https://brightershoreswiki.org/w/One_Eyed_Blob",
        "unlockLevel": 0,
        "combatLevel": 18,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Pale Minecrawler",
        "url": "https://brightershoreswiki.org/w/Pale_Minecrawler",
        "unlockLevel": 14,
        "combatLevel": 22,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Wastrel Goblin Miner",
        "url": "https://brightershoreswiki.org/w/Wastrel_Goblin_Miner#1",
        "unlockLevel": 16,
        "combatLevel": 24,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Gooey Floor Tentacle",
        "url": "https://brightershoreswiki.org/w/Gooey_Floor_Tentacle",
        "unlockLevel": 18,
        "combatLevel": 29,
        "vulnerability": elements.infernae,
        "immunity": elements.tempestae
    },
    {
        "name": "Yellowing Skeleton Miner",
        "url": "https://brightershoreswiki.org/w/Yellowing_Skeleton_Miner",
        "unlockLevel": 22,
        "combatLevel": 34,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Broad Footed Fire Toad",
        "url": "https://brightershoreswiki.org/w/Broad_Footed_Fire_Toad",
        "unlockLevel": 24,
        "combatLevel": 39,
        "vulnerability": elements.cryonae,
        "immunity": elements.infernae
    },
    {
        "name": "Short Legged Cockroach",
        "url": "https://brightershoreswiki.org/w/Short_Legged_Cockroach",
        "unlockLevel": 29,
        "combatLevel": 44,
        "vulnerability": elements.infernae,
        "immunity": null
    },
    {
        "name": "Iron Metalith",
        "url": "https://brightershoreswiki.org/w/Iron_Metalith",
        "unlockLevel": 34,
        "combatLevel": 49,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Twelverock Stonewurm",
        "url": "https://brightershoreswiki.org/w/Twelverock_Stonewurm",
        "unlockLevel": 39,
        "combatLevel": 54,
        "vulnerability": elements.arborae,
        "immunity": elements.tempestae
    },
    {
        "name": "Umber Blob",
        "url": "https://brightershoreswiki.org/w/Umber_Blob",
        "unlockLevel": 44,
        "combatLevel": 58,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Faded Wraith",
        "url": "https://brightershoreswiki.org/w/Faded_Wraith",
        "unlockLevel": 49,
        "combatLevel": 63,
        "vulnerability": elements.tempestae,
        "immunity": elements.necromae
    },
    {
        "name": "Ugly Minecrawler",
        "url": "https://brightershoreswiki.org/w/Ugly_Minecrawler",
        "unlockLevel": 54,
        "combatLevel": 68,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Ragamuffin Goblin Miner",
        "url": "https://brightershoreswiki.org/w/Ragamuffin_Goblin_Miner#1",
        "unlockLevel": 58,
        "combatLevel": 73,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Clattering Skeleton Miner",
        "url": "https://brightershoreswiki.org/w/Clattering_Skeleton_Miner",
        "unlockLevel": 63,
        "combatLevel": 78,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Red Sucker Floor Tentacle",
        "url": "https://brightershoreswiki.org/w/Red_Sucker_Floor_Tentacle",
        "unlockLevel": 68,
        "combatLevel": 83,
        "vulnerability": elements.infernae,
        "immunity": elements.tempestae
    },
    {
        "name": "Lumpy Fire Toad",
        "url": "https://brightershoreswiki.org/w/Lumpy_Fire_Toad",
        "unlockLevel": 73,
        "combatLevel": 88,
        "vulnerability": elements.cryonae,
        "immunity": elements.infernae
    },
    {
        "name": "Mantuban Cockroach",
        "url": "https://brightershoreswiki.org/w/Mantuban_Cockroach",
        "unlockLevel": 78,
        "combatLevel": 90,
        "vulnerability": elements.infernae,
        "immunity": null
    },
    {
        "name": "Spiked Metalith",
        "url": "https://brightershoreswiki.org/w/Spiked_Metalith",
        "unlockLevel": 83,
        "combatLevel": 95,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Smooth Back Stonewurm",
        "url": "https://brightershoreswiki.org/w/Smooth_Back_Stonewurm",
        "unlockLevel": 88,
        "combatLevel": 100,
        "vulnerability": elements.arborae,
        "immunity": elements.tempestae
    },
    {
        "name": "Slobbering Blob",
        "url": "https://brightershoreswiki.org/w/Slobbering_Blob",
        "unlockLevel": 90,
        "combatLevel": 105,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Ashen Minecrawler",
        "url": "https://brightershoreswiki.org/w/Ashen_Minecrawler",
        "unlockLevel": 95,
        "combatLevel": 110,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Broken Jaw Skeleton Miner",
        "url": "https://brightershoreswiki.org/w/Broken_Jaw_Skeleton_Miner",
        "unlockLevel": 100,
        "combatLevel": 114,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Miscreant Goblin Miner",
        "url": "https://brightershoreswiki.org/w/Miscreant_Goblin_Miner#1",
        "unlockLevel": 105,
        "combatLevel": 119,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Howling Wraith",
        "url": "https://brightershoreswiki.org/w/Howling_Wraith",
        "unlockLevel": 110,
        "combatLevel": 124,
        "vulnerability": elements.tempestae,
        "immunity": elements.necromae
    },
    {
        "name": "Darkvein Floor Tentacle",
        "url": "https://brightershoreswiki.org/w/Darkvein_Floor_Tentacle",
        "unlockLevel": 114,
        "combatLevel": 128,
        "vulnerability": elements.infernae,
        "immunity": elements.tempestae
    },
    {
        "name": "Silverstripe Fire Toad",
        "url": "https://brightershoreswiki.org/w/Silverstripe_Fire_Toad",
        "unlockLevel": 119,
        "combatLevel": 133,
        "vulnerability": elements.cryonae,
        "immunity": elements.infernae
    },
    {
        "name": "Speckled Cockroach",
        "url": "https://brightershoreswiki.org/w/Speckled_Cockroach",
        "unlockLevel": 124,
        "combatLevel": 138,
        "vulnerability": elements.infernae,
        "immunity": null
    },
    {
        "name": "Pasty Blob",
        "url": "https://brightershoreswiki.org/w/Pasty_Blob",
        "unlockLevel": 128,
        "combatLevel": 143,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Grayboned Skeleton Miner",
        "url": "https://brightershoreswiki.org/w/Grayboned_Skeleton_Miner",
        "unlockLevel": 133,
        "combatLevel": 147,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Jagged Metalith",
        "url": "https://brightershoreswiki.org/w/Jagged_Metalith",
        "unlockLevel": 138,
        "combatLevel": 152,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Boil Ridden Minecrawler",
        "url": "https://brightershoreswiki.org/w/Boil_Ridden_Minecrawler",
        "unlockLevel": 143,
        "combatLevel": 155,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Delinquent Goblin Miner",
        "url": "https://brightershoreswiki.org/w/Delinquent_Goblin_Miner#1",
        "unlockLevel": 147,
        "combatLevel": 159,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Grim Heart Stonewurm",
        "url": "https://brightershoreswiki.org/w/Grim_Heart_Stonewurm",
        "unlockLevel": 152,
        "combatLevel": 164,
        "vulnerability": elements.arborae,
        "immunity": elements.tempestae
    },
    {
        "name": "Sharp Snap Floor Tentacle",
        "url": "https://brightershoreswiki.org/w/Sharp_Snap_Floor_Tentacle",
        "unlockLevel": 155,
        "combatLevel": 169,
        "vulnerability": elements.infernae,
        "immunity": elements.tempestae
    },
    {
        "name": "Spined Cockroach",
        "url": "https://brightershoreswiki.org/w/Spined_Cockroach",
        "unlockLevel": 159,
        "combatLevel": 173,
        "vulnerability": elements.infernae,
        "immunity": null
    },
    {
        "name": "Belching Fire Toad",
        "url": "https://brightershoreswiki.org/w/Belching_Fire_Toad",
        "unlockLevel": 164,
        "combatLevel": 178,
        "vulnerability": elements.cryonae,
        "immunity": elements.infernae
    },
    {
        "name": "Chilling Wraith",
        "url": "https://brightershoreswiki.org/w/Chilling_Wraith",
        "unlockLevel": 169,
        "combatLevel": 183,
        "vulnerability": elements.tempestae,
        "immunity": elements.necromae
    },
    {
        "name": "Durable Skeleton Miner",
        "url": "https://brightershoreswiki.org/w/Durable_Skeleton_Miner",
        "unlockLevel": 173,
        "combatLevel": 188,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Blotchy Blob",
        "url": "https://brightershoreswiki.org/w/Blotchy_Blob",
        "unlockLevel": 178,
        "combatLevel": 192,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Sharptooth Minecrawler",
        "url": "https://brightershoreswiki.org/w/Sharptooth_Minecrawler",
        "unlockLevel": 183,
        "combatLevel": 197,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Troublemaker Goblin Miner",
        "url": "https://brightershoreswiki.org/w/Troublemaker_Goblin_Miner#1",
        "unlockLevel": 188,
        "combatLevel": 207,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Smokeybrown Cockroach",
        "url": "https://brightershoreswiki.org/w/Smokeybrown_Cockroach",
        "unlockLevel": 192,
        "combatLevel": 223,
        "vulnerability": elements.infernae,
        "immunity": null
    },
    {
        "name": "Glinted Metalith",
        "url": "https://brightershoreswiki.org/w/Glinted_Metalith",
        "unlockLevel": 197,
        "combatLevel": 239,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Tightgrip Floor Tentacle",
        "url": "https://brightershoreswiki.org/w/Tightgrip_Floor_Tentacle",
        "unlockLevel": 207,
        "combatLevel": 254,
        "vulnerability": elements.infernae,
        "immunity": elements.tempestae
    },
    {
        "name": "Craggy Stonewurm",
        "url": "https://brightershoreswiki.org/w/Craggy_Stonewurm",
        "unlockLevel": 223,
        "combatLevel": 270,
        "vulnerability": elements.arborae,
        "immunity": elements.tempestae
    },
    {
        "name": "Loathsome Fire Toad",
        "url": "https://brightershoreswiki.org/w/Loathsome_Fire_Toad",
        "unlockLevel": 239,
        "combatLevel": 278,
        "vulnerability": elements.cryonae,
        "immunity": elements.infernae
    },
    {
        "name": "Throsum Wraith",
        "url": "https://brightershoreswiki.org/w/Throsum_Wraith",
        "unlockLevel": 254,
        "combatLevel": 294,
        "vulnerability": elements.tempestae,
        "immunity": elements.necromae
    },
    {
        "name": "Dangerous Skeleton Miner",
        "url": "https://brightershoreswiki.org/w/Dangerous_Skeleton_Miner",
        "unlockLevel": 270,
        "combatLevel": 309,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Vile Blob",
        "url": "https://brightershoreswiki.org/w/Vile_Blob",
        "unlockLevel": 278,
        "combatLevel": 325,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    },
    {
        "name": "Hairy Cockroach",
        "url": "https://brightershoreswiki.org/w/Hairy_Cockroach",
        "unlockLevel": 294,
        "combatLevel": 341,
        "vulnerability": elements.infernae,
        "immunity": null
    },
    {
        "name": "Deepway Minecrawler",
        "url": "https://brightershoreswiki.org/w/Deepway_Minecrawler",
        "unlockLevel": 309,
        "combatLevel": 356,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Scoundrel Goblin Miner",
        "url": "https://brightershoreswiki.org/w/Scoundrel_Goblin_Miner#1",
        "unlockLevel": 325,
        "combatLevel": 372,
        "vulnerability": elements.tempestae,
        "immunity": elements.infernae
    },
    {
        "name": "Malevolent Floor Tentacle",
        "url": "https://brightershoreswiki.org/w/Malevolent_Floor_Tentacle",
        "unlockLevel": 341,
        "combatLevel": 388,
        "vulnerability": elements.infernae,
        "immunity": elements.tempestae
    },
    {
        "name": "Volatile Fire Toad",
        "url": "https://brightershoreswiki.org/w/Volatile_Fire_Toad",
        "unlockLevel": 356,
        "combatLevel": 403,
        "vulnerability": elements.cryonae,
        "immunity": elements.infernae
    },
    {
        "name": "Toughened Metalith",
        "url": "https://brightershoreswiki.org/w/Toughened_Metalith",
        "unlockLevel": 372,
        "combatLevel": 419,
        "vulnerability": elements.necromae,
        "immunity": elements.cryonae
    },
    {
        "name": "Insidious Stonewurm",
        "url": "https://brightershoreswiki.org/w/Insidious_Stonewurm",
        "unlockLevel": 388,
        "combatLevel": 435,
        "vulnerability": elements.arborae,
        "immunity": elements.tempestae
    },
    {
        "name": "Elite Skeleton Miner",
        "url": "https://brightershoreswiki.org/w/Elite_Skeleton_Miner",
        "unlockLevel": 403,
        "combatLevel": 450,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Grim Wraith",
        "url": "https://brightershoreswiki.org/w/Grim_Wraith",
        "unlockLevel": 419,
        "combatLevel": 466,
        "vulnerability": elements.tempestae,
        "immunity": elements.necromae
    },
    {
        "name": "Deaths Head Cockroach",
        "url": "https://brightershoreswiki.org/w/Deaths_Head_Cockroach",
        "unlockLevel": 435,
        "combatLevel": 482,
        "vulnerability": elements.infernae,
        "immunity": null
    },
    {
        "name": "Bulging Blob",
        "url": "https://brightershoreswiki.org/w/Bulging_Blob",
        "unlockLevel": 450,
        "combatLevel": 490,
        "vulnerability": elements.cryonae,
        "immunity": elements.arborae
    }
];

export const watchEnemies: Enemy[] = [
    {
        "name": "Whitepaw Sabertooth Tiger",
        "url": "https://brightershoreswiki.org/w/Whitepaw_Sabertooth_Tiger",
        "unlockLevel": 0,
        "combatLevel": 0,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Flea Ridden Street Hag",
        "url": "https://brightershoreswiki.org/w/Flea_Ridden_Street_Hag",
        "unlockLevel": 0,
        "combatLevel": 2,
        "vulnerability": elements.arborae,
        "immunity": elements.infernae
    },
    {
        "name": "Warty Mawchest",
        "url": "https://brightershoreswiki.org/w/Warty_Mawchest",
        "unlockLevel": 0,
        "combatLevel": 4,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Yellow Giant Wasp",
        "url": "https://brightershoreswiki.org/w/Yellow_Giant_Wasp",
        "unlockLevel": 0,
        "combatLevel": 6,
        "vulnerability": elements.necromae,
        "immunity": elements.arborae
    },
    {
        "name": "Mad Sewer Fiend",
        "url": "https://brightershoreswiki.org/w/Mad_Sewer_Fiend",
        "unlockLevel": 0,
        "combatLevel": 8,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Decomposing Zombie",
        "url": "https://brightershoreswiki.org/w/Decomposing_Zombie",
        "unlockLevel": 0,
        "combatLevel": 10,
        "vulnerability": elements.infernae,
        "immunity": elements.necromae
    },
    {
        "name": "Murky Spectral Stalker",
        "url": "https://brightershoreswiki.org/w/Murky_Spectral_Stalker",
        "unlockLevel": 0,
        "combatLevel": 12,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Blunt Spiky Ball",
        "url": "https://brightershoreswiki.org/w/Blunt_Spiky_Ball",
        "unlockLevel": 0,
        "combatLevel": 14,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Slinking Sabertooth Tiger",
        "url": "https://brightershoreswiki.org/w/Slinking_Sabertooth_Tiger",
        "unlockLevel": 10,
        "combatLevel": 16,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Toothless Street Hag",
        "url": "https://brightershoreswiki.org/w/Toothless_Street_Hag",
        "unlockLevel": 12,
        "combatLevel": 18,
        "vulnerability": elements.arborae,
        "immunity": elements.infernae
    },
    {
        "name": "Paper Giant Wasp",
        "url": "https://brightershoreswiki.org/w/Paper_Giant_Wasp",
        "unlockLevel": 14,
        "combatLevel": 22,
        "vulnerability": elements.necromae,
        "immunity": elements.arborae
    },
    {
        "name": "Sickening Sewer Fiend",
        "url": "https://brightershoreswiki.org/w/Sickening_Sewer_Fiend",
        "unlockLevel": 16,
        "combatLevel": 28,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Orange Eyed Mawchest",
        "url": "https://brightershoreswiki.org/w/Orange_Eyed_Mawchest",
        "unlockLevel": 18,
        "combatLevel": 34,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Eyeless Zombie",
        "url": "https://brightershoreswiki.org/w/Eyeless_Zombie",
        "unlockLevel": 22,
        "combatLevel": 39,
        "vulnerability": elements.infernae,
        "immunity": elements.necromae
    },
    {
        "name": "Snarling Spectral Stalker",
        "url": "https://brightershoreswiki.org/w/Snarling_Spectral_Stalker",
        "unlockLevel": 28,
        "combatLevel": 48,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Ragged Spiky Ball",
        "url": "https://brightershoreswiki.org/w/Ragged_Spiky_Ball",
        "unlockLevel": 34,
        "combatLevel": 53,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Widefang Sabertooth Tiger",
        "url": "https://brightershoreswiki.org/w/Widefang_Sabertooth_Tiger",
        "unlockLevel": 39,
        "combatLevel": 59,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Cackling Street Hag",
        "url": "https://brightershoreswiki.org/w/Cackling_Street_Hag",
        "unlockLevel": 48,
        "combatLevel": 65,
        "vulnerability": elements.arborae,
        "immunity": elements.infernae
    },
    {
        "name": "Red Giant Wasp",
        "url": "https://brightershoreswiki.org/w/Red_Giant_Wasp",
        "unlockLevel": 53,
        "combatLevel": 73,
        "vulnerability": elements.necromae,
        "immunity": elements.arborae
    },
    {
        "name": "Gibbering Sewer Fiend",
        "url": "https://brightershoreswiki.org/w/Gibbering_Sewer_Fiend",
        "unlockLevel": 59,
        "combatLevel": 79,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Maggoty Zombie",
        "url": "https://brightershoreswiki.org/w/Maggoty_Zombie",
        "unlockLevel": 65,
        "combatLevel": 84,
        "vulnerability": elements.infernae,
        "immunity": elements.necromae
    },
    {
        "name": "Fire Core Spectral Stalker",
        "url": "https://brightershoreswiki.org/w/Fire_Core_Spectral_Stalker",
        "unlockLevel": 73,
        "combatLevel": 93,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Spiny Mawchest",
        "url": "https://brightershoreswiki.org/w/Spiny_Mawchest",
        "unlockLevel": 79,
        "combatLevel": 98,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Puffy Spiky Ball",
        "url": "https://brightershoreswiki.org/w/Puffy_Spiky_Ball",
        "unlockLevel": 84,
        "combatLevel": 104,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Skulking Sabertooth Tiger",
        "url": "https://brightershoreswiki.org/w/Skulking_Sabertooth_Tiger",
        "unlockLevel": 93,
        "combatLevel": 110,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Grubby Street Hag",
        "url": "https://brightershoreswiki.org/w/Grubby_Street_Hag",
        "unlockLevel": 98,
        "combatLevel": 118,
        "vulnerability": elements.arborae,
        "immunity": elements.infernae
    },
    {
        "name": "Pale Giant Wasp",
        "url": "https://brightershoreswiki.org/w/Pale_Giant_Wasp",
        "unlockLevel": 104,
        "combatLevel": 124,
        "vulnerability": elements.necromae,
        "immunity": elements.arborae
    },
    {
        "name": "Glistening Sewer Fiend",
        "url": "https://brightershoreswiki.org/w/Glistening_Sewer_Fiend",
        "unlockLevel": 110,
        "combatLevel": 129,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Hungry Zombie",
        "url": "https://brightershoreswiki.org/w/Hungry_Zombie",
        "unlockLevel": 118,
        "combatLevel": 135,
        "vulnerability": elements.infernae,
        "immunity": elements.necromae
    },
    {
        "name": "Flare Eyed Spectral Stalker",
        "url": "https://brightershoreswiki.org/w/Flare_Eyed_Spectral_Stalker",
        "unlockLevel": 124,
        "combatLevel": 143,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Variegated Spiky Ball",
        "url": "https://brightershoreswiki.org/w/Variegated_Spiky_Ball",
        "unlockLevel": 129,
        "combatLevel": 149,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Rockblend Sabertooth Tiger",
        "url": "https://brightershoreswiki.org/w/Rockblend_Sabertooth_Tiger",
        "unlockLevel": 135,
        "combatLevel": 155,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Terrible White Mawchest",
        "url": "https://brightershoreswiki.org/w/Terrible_White_Mawchest",
        "unlockLevel": 143,
        "combatLevel": 160,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Sinister Street Hag",
        "url": "https://brightershoreswiki.org/w/Sinister_Street_Hag",
        "unlockLevel": 149,
        "combatLevel": 169,
        "vulnerability": elements.arborae,
        "immunity": elements.infernae
    },
    {
        "name": "Potter Giant Wasp",
        "url": "https://brightershoreswiki.org/w/Potter_Giant_Wasp",
        "unlockLevel": 155,
        "combatLevel": 174,
        "vulnerability": elements.necromae,
        "immunity": elements.arborae
    },
    {
        "name": "Vile Green Sewer Fiend",
        "url": "https://brightershoreswiki.org/w/Vile_Green_Sewer_Fiend",
        "unlockLevel": 160,
        "combatLevel": 180,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Twisted Zombie",
        "url": "https://brightershoreswiki.org/w/Twisted_Zombie",
        "unlockLevel": 169,
        "combatLevel": 185,
        "vulnerability": elements.infernae,
        "immunity": elements.necromae
    },
    {
        "name": "Glimmering Spectral Stalker",
        "url": "https://brightershoreswiki.org/w/Glimmering_Spectral_Stalker",
        "unlockLevel": 174,
        "combatLevel": 194,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Shiny Spiky Ball",
        "url": "https://brightershoreswiki.org/w/Shiny_Spiky_Ball",
        "unlockLevel": 180,
        "combatLevel": 200,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Steelclaw Sabertooth Tiger",
        "url": "https://brightershoreswiki.org/w/Steelclaw_Sabertooth_Tiger",
        "unlockLevel": 185,
        "combatLevel": 218,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Mysterious Street Hag",
        "url": "https://brightershoreswiki.org/w/Mysterious_Street_Hag",
        "unlockLevel": 194,
        "combatLevel": 237,
        "vulnerability": elements.arborae,
        "immunity": elements.infernae
    },
    {
        "name": "Horned Giant Wasp",
        "url": "https://brightershoreswiki.org/w/Horned_Giant_Wasp",
        "unlockLevel": 200,
        "combatLevel": 265,
        "vulnerability": elements.necromae,
        "immunity": elements.arborae
    },
    {
        "name": "Wicked Sewer Fiend",
        "url": "https://brightershoreswiki.org/w/Wicked_Sewer_Fiend",
        "unlockLevel": 218,
        "combatLevel": 284,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Longfang Mawchest",
        "url": "https://brightershoreswiki.org/w/Longfang_Mawchest",
        "unlockLevel": 237,
        "combatLevel": 302,
        "vulnerability": elements.cryonae,
        "immunity": elements.tempestae
    },
    {
        "name": "Ravenous Zombie",
        "url": "https://brightershoreswiki.org/w/Ravenous_Zombie",
        "unlockLevel": 265,
        "combatLevel": 330,
        "vulnerability": elements.infernae,
        "immunity": elements.necromae
    },
    {
        "name": "Horrifying Spectral Stalker",
        "url": "https://brightershoreswiki.org/w/Horrifying_Spectral_Stalker",
        "unlockLevel": 284,
        "combatLevel": 349,
        "vulnerability": elements.arborae,
        "immunity": elements.necromae
    },
    {
        "name": "Sharp Spiky Ball",
        "url": "https://brightershoreswiki.org/w/Sharp_Spiky_Ball",
        "unlockLevel": 302,
        "combatLevel": 368,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Terrifying Sabertooth Tiger",
        "url": "https://brightershoreswiki.org/w/Terrifying_Sabertooth_Tiger",
        "unlockLevel": 330,
        "combatLevel": 387,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    },
    {
        "name": "Powerful Street Hag",
        "url": "https://brightershoreswiki.org/w/Powerful_Street_Hag",
        "unlockLevel": 349,
        "combatLevel": 415,
        "vulnerability": elements.arborae,
        "immunity": elements.infernae
    },
    {
        "name": "Steel Sheen Giant Wasp",
        "url": "https://brightershoreswiki.org/w/Steel_Sheen_Giant_Wasp",
        "unlockLevel": 368,
        "combatLevel": 433,
        "vulnerability": elements.necromae,
        "immunity": elements.arborae
    },
    {
        "name": "Diabolical Sewer Fiend",
        "url": "https://brightershoreswiki.org/w/Diabolical_Sewer_Fiend",
        "unlockLevel": 387,
        "combatLevel": 452,
        "vulnerability": elements.cryonae,
        "immunity": null
    },
    {
        "name": "Green-Eyed Zombie",
        "url": "https://brightershoreswiki.org/w/Green-Eyed_Zombie",
        "unlockLevel": 415,
        "combatLevel": 471,
        "vulnerability": elements.infernae,
        "immunity": elements.necromae
    },
    {
        "name": "Blood Tipped Spiky Ball",
        "url": "https://brightershoreswiki.org/w/Blood_Tipped_Spiky_Ball",
        "unlockLevel": 433,
        "combatLevel": 490,
        "vulnerability": elements.tempestae,
        "immunity": elements.cryonae
    }
];
