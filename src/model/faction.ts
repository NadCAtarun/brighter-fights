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

export const craftingProfessionByFactionName: (name: string) => string = (name: string) =>
    factions.find(f => f.name === name)?.craftingProfession || "";

export const equipmentCategoriesByFactionName: (name: string) => EquipmentCategory[] = (name: string) =>
    factions.find(f => f.name === name)?.equipmentCategories || [];

export const equipmentByFactionName: (name: string) => Equipment[] = (name: string) =>
    factions.find(f => f.name === name)?.equipment || [];
