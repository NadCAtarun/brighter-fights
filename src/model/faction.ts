import {Element, elements} from "./element";

import {
    cryoknightMeleeWeapons, cryoknightRangedWeapons, cryoknightShields, cryoknightWeaponCategories,
    Equipment,
    guardianMeleeWeapons, guardianRangedWeapons, guardianShields, guardianWeaponCategories,
    hammermageMeleeWeapons, hammermageRangedWeapons, hammermageShields, hammermageWeaponCategories, WeaponCategory
} from "@/model/equipment";

export interface Faction {
    name: string;
    craftingProfession: "Blacksmith" | "Bonewright" | "Stonemason";
    vulnerability: Element;
    rangedOnly: Element;
    weaponCategories: WeaponCategory[];
    meleeWeapons: Equipment[];
    rangedWeapons: Equipment[];
    shields: Equipment[];
}

export const factions: Faction[] = [
    {
        name: "Cryoknight",
        craftingProfession: "Blacksmith",
        vulnerability: elements.tempestae,
        weaponCategories: cryoknightWeaponCategories,
        rangedOnly: elements.arborae,
        meleeWeapons: cryoknightMeleeWeapons,
        rangedWeapons: cryoknightRangedWeapons,
        shields: cryoknightShields,
    },
    {
        name: "Guardian",
        craftingProfession: "Bonewright",
        vulnerability: elements.cryonae,
        weaponCategories: guardianWeaponCategories,
        rangedOnly: elements.tempestae,
        meleeWeapons: guardianMeleeWeapons,
        rangedWeapons: guardianRangedWeapons,
        shields: guardianShields,
    },
    {
        name: "Hammermage",
        craftingProfession: "Stonemason",
        vulnerability: elements.arborae,
        rangedOnly: elements.cryonae,
        weaponCategories: hammermageWeaponCategories,
        meleeWeapons: hammermageMeleeWeapons,
        rangedWeapons: hammermageRangedWeapons,
        shields: hammermageShields,
    },
];

const factionsByName = new Map(factions.map(faction => [faction.name, faction]));

/**
 * Retrieves a faction by its name.
 *
 * The `factionByName` function searches for a faction based on the provided name string.
 * If a matching faction is found, it returns the corresponding Faction object.
 * If no match is found, it returns null.
 *
 * @param {string} name - The name of the faction to look up.
 * @returns {Faction | null} The corresponding Faction object if found, or null if no matching faction exists.
 */
export const factionByName = (name: string): Faction | null =>
    factionsByName.get(name) || null;
