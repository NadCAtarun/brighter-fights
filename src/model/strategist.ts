import {Enemy} from "@/model/enemy";
import {Equipment, EquipmentCategory} from "@/model/equipment";
import {enemiesByName} from "@/model/profession";
import {
    craftingProfessionByFactionName,
    equipmentByFactionName,
    equipmentCategoriesByFactionName
} from "@/model/faction";

/**
 * Finds the most suitable enemy for a user based on their level and an offset.
 *
 * @param {Enemy[]} enemies - An array of enemy objects to choose from.
 * @param {number} userLevel - The current level of the user.
 * @param {number} offset - An additional offset to adjust combat level compatibility.
 * @return {Enemy | null} - The ideal enemy from the provided list; null if no enemy is eligible.
 */
function findIdealEnemy(enemies: Enemy[], userLevel: number, offset: number): Enemy | null {
    const eligibleEnemies = enemies.filter(
        enemy => enemy.unlockLevel <= userLevel && enemy.combatLevel <= Math.max(0, userLevel + offset));

    if (eligibleEnemies.length === 0) {
        return null;
    }

    return eligibleEnemies[eligibleEnemies.length - 1];
}

/**
 * Calculates the level at which the user should ask for new recommendations.
 *
 * @param {Enemy[]} enemies - An array of enemy objects with defined combat levels.
 * @param {Enemy | null} currentEnemy - The current enemy object or null if no current enemy exists.
 * @param {number} offset - The numeric offset to adjust the calculated combat level.
 * @return {number} The next valid combat level, or 0 if no valid level is found.
 */
function findNextLevel(enemies: Enemy[], currentEnemy: Enemy | null, offset: number): number {
    if (!currentEnemy) return 0;

    const futureEnemies = enemies.filter(enemy => enemy.combatLevel > currentEnemy.combatLevel)
        .sort((a, b) => a.combatLevel - b.combatLevel);

    if (futureEnemies.length === 0) return 0;

    const nextLevel = futureEnemies[0].combatLevel - offset;

    if (nextLevel < 1 || nextLevel > 500) return 0;

    return nextLevel
}

/**
 * Determines the ideal equipment category for a given faction based on the type of weapon,
 * the enemy's characteristics, and the chosen strategy.
 *
 * @param {EquipmentCategory[]} factionCategories - The list of equipment categories available for the faction.
 * @param {'melee' | 'ranged'} type - The type of weapon being considered (either melee or ranged).
 * @param {Enemy | null} enemy - The enemy being fought, or null if there is no specific enemy.
 * @param {string} strategy - The strategy to use when choosing the weapon category (e.g., "vulnerability", "speed").
 * @return {EquipmentCategory | null} - The most suitable equipment category based on the criteria,
 *                                      or null if no applicable category is found.
 */
function findIdealWeaponCategory(factionCategories: EquipmentCategory[], type: 'melee' | 'ranged',
                                 enemy: Enemy | null, strategy: string): EquipmentCategory | null {
    if (enemy === null) {
        return null;
    }

    const eligibleCategories = factionCategories.filter((c) => c.type === type);

    if (strategy === 'vulnerability') {
        const bestWeaponCategories = eligibleCategories
            .filter((c) => c.element === enemy.vulnerability)
            .sort((a, b) => a.speedTier - b.speedTier);
        if (bestWeaponCategories.length > 0) {
            return bestWeaponCategories[0];
        }
    }

    // Choosing or defaulting to speed strategy
    const usefulCategories = eligibleCategories
        .filter((c) => c.element !== enemy.immunity)
        .sort((a, b) => a.speedTier - b.speedTier);

    return usefulCategories[0];
}

/**
 * Determines the ideal weapon for a user based on the weapon category, available equipment for the user's faction,
 * user's level, crafting level, and crafting profession.
 *
 * @param {EquipmentCategory | null} weaponCategory - The category of the weapon being sought,
 *                                                    or null if no suitable category was found.
 * @param {Equipment[]} factionEquipment - An array of available equipment for the user's faction.
 * @param {number} userLevel - The level of the user, used to filter weapons that the user can use.
 * @param {number} craftingLevel - The user's level in crafting, used to filter weapons by crafting requirements.
 * @param {string} craftingProfession - The crafting profession associated with the user's crafting level.
 * @return {Equipment | string} The ideal weapon matching the given criteria,
 *                              or a descriptive string if no suitable weapon is found.
 */
function findIdealWeapon(weaponCategory: EquipmentCategory | null, factionEquipment: Equipment[],
                         userLevel: number, craftingLevel: number, craftingProfession: string): Equipment | string {
    if (weaponCategory === null) {
        return 'Impossible to pick weapons without a target enemy';
    }

    const eligibleWeapons = factionEquipment.filter((e) =>
        e.category === weaponCategory.name
        && e.maxLevel >= userLevel
    ).sort((a, b) => a.craftingLevel - b.craftingLevel);

    const minCraftingLevel = Math.min(...eligibleWeapons.map((e) => e.craftingLevel));

    if (minCraftingLevel > craftingLevel) {
        return `You must level up ${craftingProfession} to at least ${minCraftingLevel}`;
    }

    return eligibleWeapons[0];
}

/**
 * Finds the ideal shield for the user based on their level, crafting level, and crafting profession.
 *
 * @param {Equipment[]} factionEquipment - An array of equipment objects available for the user's faction.
 * @param {number} userLevel - The level of the user, used to determine eligibility for equipment.
 * @param {number} craftingLevel - The current crafting level of the user.
 * @param {string} craftingProfession - The profession associated with crafting the equipment.
 * @return {Equipment | string} The best suitable shield for the user
 *                              or a message prompting the user to increase their crafting level.
 */
function findIdealShield(factionEquipment: Equipment[], userLevel: number,
                         craftingLevel: number, craftingProfession: string): Equipment | string {
    const eligibleShields = factionEquipment.filter((e) =>
        e.name.includes('Shield') && e.maxLevel >= userLevel && e.minLevel <= userLevel
    ).sort((a, b) => b.craftingLevel - a.craftingLevel);

    console.log(eligibleShields);

    const minCraftingLevel = Math.min(...eligibleShields.map((e) => e.craftingLevel));

    if (minCraftingLevel > craftingLevel) {
        return `You must level up ${craftingProfession} to at least ${minCraftingLevel}`;
    }

    return eligibleShields[0];
}

export interface Recommendations {
    enemy: Enemy | null;
    nextLevel: number;
    meleeWeapon: Equipment | string;
    rangedWeapon: Equipment | string;
    shield: Equipment | string;
}

/**
 * Provides recommendations based on the given inputs, including an ideal enemy to target,
 * the next level to advance to, and appropriate weapons and shield for combat.
 *
 * @param {string} profession - The profession of the user, used to determine relevant enemies.
 * @param {number} userLevel - The current level of the user.
 * @param {number} offset - The offset used to calculate the ideal enemy or progression level.
 * @param {string} faction - The faction the user belongs to, impacting equipment and crafting options.
 * @param {number} factionLevel - The user's level within the crafting profession associated with their faction.
 * @param {string} strategy - The combat strategy influencing weapon and shield selection.
 * @return {Recommendations} An object containing recommendations including the ideal enemy,
 *                           next progression level, melee weapon, ranged weapon, and shield.
 */
export function getRecommendations(
    profession: string,
    userLevel: number,
    offset: number,
    faction: string,
    factionLevel: number,
    strategy: string,
): Recommendations {
    const enemies = enemiesByName(profession);

    const enemy = findIdealEnemy(enemies, userLevel, offset);

    const nextLevel = findNextLevel(enemies, enemy, offset);

    const meleeWeaponCategory = findIdealWeaponCategory(
        equipmentCategoriesByFactionName(faction),
        'melee',
        enemy,
        strategy);
    const meleeWeapon = findIdealWeapon(
        meleeWeaponCategory,
        equipmentByFactionName(faction),
        userLevel,
        factionLevel,
        craftingProfessionByFactionName(faction),
    );

    const rangedWeaponCategory = findIdealWeaponCategory(
        equipmentCategoriesByFactionName(faction),
        'ranged',
        enemy,
        strategy);
    const rangedWeapon = findIdealWeapon(
        rangedWeaponCategory,
        equipmentByFactionName(faction),
        userLevel,
        factionLevel,
        craftingProfessionByFactionName(faction),
    );

    const shield = meleeWeaponCategory?.hands === 1 || rangedWeaponCategory?.hands === 1
        ? findIdealShield(equipmentByFactionName(faction), userLevel, factionLevel, craftingProfessionByFactionName(faction))
        : 'No need for a shield, both weapons suggested are two-handed'

    return {
        enemy: enemy,
        nextLevel: nextLevel,
        meleeWeapon: meleeWeapon,
        rangedWeapon: rangedWeapon,
        shield: shield,
    };
}
