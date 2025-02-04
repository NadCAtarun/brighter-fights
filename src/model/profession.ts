import {Enemy, guardEnemies, mineEnemies, scoutEnemies, watchEnemies} from "@/model/enemy";

export interface Profession {
    name: string;
    enemies: Enemy[];
}

export const professions = {
    guard: {
        name: 'Guard',
        enemies: guardEnemies,
    },
    scout: {
        name: 'Scout',
        enemies: scoutEnemies
    },
    minefighter: {
        name: 'Minefighter',
        enemies: mineEnemies
    },
    watchperson: {
        name: 'Watchperson',
        enemies: watchEnemies
    },
};
