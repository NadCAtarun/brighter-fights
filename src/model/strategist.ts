import {Equipment, WeaponCategory} from "@/model/equipment";
import {Enemy} from "@/model/enemy";
import {Faction} from "@/model/faction";

export interface CraftingRecommendations {
    meleeWeapon: Equipment | string;
    rangedWeapon: Equipment | string;
    shield: Equipment | string;
}

/**
 * Determines the ideal weapon category based on the specified type, enemy attributes, and priority.
 *
 * Filters the provided weapon categories to find the most suitable category given the specified
 * weapon type, enemy's vulnerabilities and immunities, and the player's prioritization criteria.
 * The function considers the following logic:
 * - Filters categories that match the desired type and are not immune to the enemy's attributes.
 * - Prioritizes categories that exploit the enemy's vulnerability, if applicable.
 * - Further filters based on the priority criteria, such as strength requiring two-handed weapons.
 * - Sorts the eligible categories by their speed tier and returns the most optimal weapon category.
 *
 * @param {WeaponCategory[]} categories - The array of weapon categories to evaluate.
 * @param {'melee' | 'ranged'} type - The desired type of weapon (either "melee" or "ranged").
 * @param {Enemy} enemy - The enemy data containing immunity and vulnerability attributes.
 * @param {string} priority - The priority criterion, such as "strength".
 * @return {WeaponCategory} The ideal weapon category based on the specified criteria.
 */
const findIdealWeaponCategory = (
    categories: WeaponCategory[], type: 'melee' | 'ranged', enemy: Enemy, priority: string
): WeaponCategory => {
    let eligibleCategories = categories
        .filter(c => c.type === type && c.element !== enemy.immunity);

    if (eligibleCategories.some(c => c.element === enemy.vulnerability)) {
        eligibleCategories = eligibleCategories.filter(c => c.element === enemy.vulnerability);
    }

    if (priority === 'strength' && eligibleCategories.some(c => c.hands === 2)) {
        eligibleCategories = eligibleCategories.filter(c => c.hands === 2);
    }

    return eligibleCategories.sort((a, b) => a.speedTier - b.speedTier)[0];
};

/**
 * Finds the ideal weapon based on specified criteria.
 *
 * This function identifies the most suitable weapon from a list of equipment
 * based on the provided weapon category and the combat level. Eligible weapons
 * are filtered by matching the category, minimum level, and maximum level to
 * the given combat level.
 *
 * @param {WeaponCategory} category - The category of weapon to search for.
 * @param {Equipment[]} equipment - An array of available equipment to evaluate.
 * @param {number} combatLevel - The combat level of the character, used to filter eligible weapons.
 * @returns {Equipment} The first eligible weapon matching the criteria.
 */
const findIdealWeapon = (
    category: WeaponCategory, equipment: Equipment[], combatLevel: number
): Equipment => {
    const eligibleWeapons = equipment
        .filter(e => e.category === category.name && e.minLevel <= combatLevel && e.maxLevel >= combatLevel);

    return eligibleWeapons[0];
};

/**
 * Filters and sorts a list of equipment to find shields appropriate for a specific combat level.
 *
 * @param {Equipment[]} equipment - The array of equipment objects to search through.
 * @param {number} combatLevel - The combat level to match suitable shields against.
 * @returns {Equipment[]} A sorted array of suitable shields where all returned shields have a
 *                        category including "Shield", a minimum level less than or equal to combatLevel,
 *                        and a maximum level greater than or equal to combatLevel. The shields
 *                        are sorted in descending order of craftingLevel.
 */
const findSuitableShields = (
    equipment: Equipment[], combatLevel: number
): Equipment[] => {
    return equipment
        .filter(e => e.category.includes('Shield') && e.minLevel <= combatLevel && e.maxLevel >= combatLevel)
        .sort((a, b) => b.craftingLevel - a.craftingLevel);
};

/**
 * Determines and selects the most suitable melee weapon for the given faction, category,
 * and character's combat and crafting levels.
 *
 * @param {Faction} faction - The faction associated with the melee weapons to choose from.
 * @param {WeaponCategory} category - The category of the weapon being sought.
 * @param {number} combatLevel - The combat level of the character, used to find an appropriate weapon.
 * @param {number} craftingLevel - The crafting level of the character, used to determine crafting eligibility.
 * @returns {Equipment|string} - Returns the ideal melee weapon if crafting requirements are met, or a message
 *                               indicating the required crafting level to acquire the weapon.
 */
const chooseMeleeWeapon = (
    faction: Faction, category: WeaponCategory, combatLevel: number, craftingLevel: number
): Equipment | string => {
    const idealMeleeWeapon = findIdealWeapon(category, faction.meleeWeapons, combatLevel);

    return idealMeleeWeapon.craftingLevel <= craftingLevel
        ? idealMeleeWeapon : `You need to level up ${faction.craftingProfession} to ${idealMeleeWeapon.craftingLevel}`;
};

/**
 * Determines the most suitable ranged weapon for a given faction and scenario
 * based on enemy attributes, combat level, and crafting level.
 *
 * @param {Faction} faction - The faction for which the weapon is being chosen.
 *                            Contains details about available weapons and restrictions.
 * @param {WeaponCategory} category - The category of weapons to consider.
 * @param {Enemy} enemy - The enemy details, including attack style and ranged capabilities.
 * @param {number} combatLevel - The player's current combat level to assess weapon accessibility.
 * @param {number} craftingLevel - The player's current crafting level
 *                                 to determine crafting eligibility for certain weapons.
 * @returns {Equipment | string} - Returns the ideal ranged weapon as `Equipment` if conditions are met,
 *                                 or a string message explaining the unmet requirements.
 */
const chooseRangedWeapon = (
    faction: Faction, category: WeaponCategory, enemy: Enemy, combatLevel: number, craftingLevel: number
): Equipment | string => {
    if (enemy.ranged && enemy.vulnerability !== faction.rangedOnly)
        return `The enemy attacks at range and is not vulnerable to ${faction.rangedOnly.name}, you should attack in melee exclusively`;

    const idealRangedWeapon = findIdealWeapon(category, faction.rangedWeapons, combatLevel,);

    return idealRangedWeapon.craftingLevel <= craftingLevel
        ? idealRangedWeapon : `You need to level up ${faction.craftingProfession} to ${idealRangedWeapon.craftingLevel}`;
};

/**
 * Generates crafting and equipment recommendations for a given faction and combat requirements.
 *
 * @function
 * @param {Faction} faction - The faction for which recommendations are being generated,
 *                            containing available weapon categories and shields.
 * @param {Enemy} enemy - The enemy for which the recommendations are being tailored, influencing weapon choices.
 * @param {string} priority - The priority strategy, guiding the selection of melee and ranged weapons.
 * @param {number} combatLevel - The combat level of the player, used to determine suitable equipment.
 * @param {number} craftingLevel - The crafting level of the player, defining access to craftable items.
 * @returns {CraftingRecommendations} An object containing recommended melee weapon, ranged weapon, and shield
 *                                    or guidance to improve crafting level.
 */
export const generateRecommendations = (
    faction: Faction, enemy: Enemy, priority: string, combatLevel: number, craftingLevel: number
): CraftingRecommendations => {
    const idealMeleeWeaponCategory = findIdealWeaponCategory(faction.weaponCategories, 'melee', enemy, priority);
    const meleeWeapon = chooseMeleeWeapon(faction, idealMeleeWeaponCategory, combatLevel, craftingLevel);

    const idealRangedWeaponCategory = findIdealWeaponCategory(faction.weaponCategories, 'ranged', enemy, priority);
    const rangedWeapon = chooseRangedWeapon(faction, idealRangedWeaponCategory, enemy, combatLevel, craftingLevel);

    let shield;
    if (idealMeleeWeaponCategory.hands === 2
        && (typeof (rangedWeapon) === 'string' || idealRangedWeaponCategory.hands === 2)) {
        shield = "The weapons recommended are 2-handed, no need for a shield"
    } else {
        const suitableShields = findSuitableShields(faction.shields, combatLevel);
        shield = suitableShields.find(s => s.craftingLevel <= craftingLevel)
            || `You need to level up ${faction.craftingProfession} to ${suitableShields[suitableShields.length - 1].craftingLevel}`;
    }

    return {
        meleeWeapon,
        rangedWeapon,
        shield,
    }
};
