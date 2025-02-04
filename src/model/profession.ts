import {Enemy, guardEnemies, mineEnemies, scoutEnemies, watchEnemies} from "@/model/enemy";

export interface Profession {
    name: string;
    enemies: Enemy[];
}

export const professions = [
    {
        name: 'Guard',
        enemies: guardEnemies,
    },
    {
        name: 'Scout',
        enemies: scoutEnemies
    },
    {
        name: 'Minefighter',
        enemies: mineEnemies
    },
    {
        name: 'Watchperson',
        enemies: watchEnemies
    },
];

export const enemiesByName: (name: string) => Enemy[] = (name: string) =>
    professions.find(p => p.name === name)?.enemies || [];
