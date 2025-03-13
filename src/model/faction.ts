import {Element, elements} from "./element";

import {
    cryoknightEquipment, cryoknightEquipmentCategories,
    Equipment, EquipmentCategory,
    guardianEquipment, guardianEquipmentCategories,
    hammermageEquipment, hammermageEquipmentCategories
} from "@/model/equipment";

export interface Faction {
    name: string;
    craftingProfession: "Blacksmith" | "Bonewright" | "Stonemason";
    vulnerability: Element;
    equipmentCategories: EquipmentCategory[];
    equipment: Equipment[];
}

export const factions: Faction[] = [
    {
        name: "Cryoknight",
        craftingProfession: "Blacksmith",
        vulnerability: elements.tempestae,
        equipmentCategories: cryoknightEquipmentCategories,
        equipment: cryoknightEquipment,
    },
    {
        name: "Guardian",
        craftingProfession: "Bonewright",
        vulnerability: elements.cryonae,
        equipmentCategories: guardianEquipmentCategories,
        equipment: guardianEquipment,
    },
    {
        name: "Hammermage",
        craftingProfession: "Stonemason",
        vulnerability: elements.arborae,
        equipmentCategories: hammermageEquipmentCategories,
        equipment: hammermageEquipment,
    },
];

const factionsByName = new Map(factions.map(faction => [faction.name, faction]));

export function factionByName(name: string): Faction | null {
    return factionsByName.get(name) || null;
}
