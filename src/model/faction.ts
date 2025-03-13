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

export function factionByName(name: string): Faction | null {
    return factionsByName.get(name) || null;
}
