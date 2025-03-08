export interface Faction {
    name: string;
    craftingProfession: "Blacksmith" | "Bonewright" | "Stonemason";
}

export const factions: Faction[] = [
    {
        name: "Cryoknight",
        craftingProfession: "Blacksmith",
    },
    {
        name: "Guardian",
        craftingProfession: "Bonewright",
    },
    {
        name: "Hammermage",
        craftingProfession: "Stonemason",
    },
];
