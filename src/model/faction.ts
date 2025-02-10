import {
    cryoknightEquipmentCategories,
    cryoknightEquipment,
    Equipment,
    EquipmentCategory,
    guardianEquipmentCategories, guardianEquipment, hammermageEquipmentCategories, hammermageEquipment
} from "@/model/equipment";

export interface Faction {
    name: string;
    craftingProfession: "Blacksmith" | "Bonewright" | "Stonemason";
    equipmentCategories: EquipmentCategory[];
    equipment: Equipment[];
}

export const factions: Faction[] = [
    {
        name: "Cryoknight",
        craftingProfession: "Blacksmith",
        equipmentCategories: cryoknightEquipmentCategories,
        equipment: cryoknightEquipment,
    },
    {
        name: "Guardian",
        craftingProfession: "Bonewright",
        equipmentCategories: guardianEquipmentCategories,
        equipment: guardianEquipment,
    },
    {
        name: "Hammermage",
        craftingProfession: "Stonemason",
        equipmentCategories: hammermageEquipmentCategories,
        equipment: hammermageEquipment,
    },
];

/**
 * Retrieve the crafting profession associated with a given faction
 *
 * @param {string} name - The name of the faction whose crafting profession is to be retrieved.
 * @returns {string} The crafting profession linked to the given faction name, or an empty string
 * if no match or profession is found.
 */
export const craftingProfessionByFactionName: (name: string) => string = (name: string): string =>
    factions.find(f => f.name === name)?.craftingProfession || "";

/**
 * Retrieve a list of equipment categories associated with a given faction name.
 *
 * @param {string} name - The name of the faction for which to retrieve the equipment categories.
 * @returns {EquipmentCategory[]} An array of equipment categories that belong to the specified faction.
 *                                If no faction matches the given name, an empty array is returned.
 */
export const equipmentCategoriesByFactionName: (name: string) => EquipmentCategory[] =
    (name: string): EquipmentCategory[] => factions.find(f => f.name === name)?.equipmentCategories || [];

/**
 * Retrieve the equipment associated with a given faction name.
 *
 * This function searches through the available factions to find the
 * matching faction by its name and returns the list of equipment assigned
 * to that faction. If no matching faction is found, it returns an empty array.
 *
 * @param {string} name - The name of the faction to look up.
 * @returns {Equipment[]} - The equipment associated with the specified faction,
 *                          or an empty array if the faction is not found.
 */
export const equipmentByFactionName: (name: string) => Equipment[] = (name: string): Equipment[] =>
    factions.find(f => f.name === name)?.equipment || [];
