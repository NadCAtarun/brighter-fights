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

/**
 * Retrieve a list of enemies corresponding to a given profession name.
 *
 * @param {string} name - The name of the profession used to identify enemies.
 * @returns {Enemy[]} An array of enemies associated with the specified profession.
 * If the profession name does not match any in the list, an empty array is returned.
 */
export const enemiesByName: (name: string) => Enemy[] = (name: string): Enemy[] =>
    professions.find(p => p.name === name)?.enemies || [];
