import {Element, elements} from "./element";
import {enemies, Enemy} from "@/model/enemy";

export interface Faction {
    name: string;
    craftingProfession: "Blacksmith" | "Bonewright" | "Stonemason";
    vulnerability: Element;
}

export const factions: Faction[] = [
    {
        name: "Cryoknight",
        craftingProfession: "Blacksmith",
        vulnerability: elements.tempestae,
    },
    {
        name: "Guardian",
        craftingProfession: "Bonewright",
        vulnerability: elements.cryonae,
    },
    {
        name: "Hammermage",
        craftingProfession: "Stonemason",
        vulnerability: elements.arborae,
    },
];

const factionsByName = new Map(factions.map(faction => [faction.name, faction]));

export function factionByName(name: string): Faction | null {
    return factionsByName.get(name) || null;
}
