import {Equipment, WeaponCategory} from "@/model/equipment";
import {Enemy} from "@/model/enemy";
import {Faction} from "@/model/faction";

export interface CraftingRecommendations {
    meleeWeapon: Equipment | string;
    rangedWeapon: Equipment | string;
    shield: Equipment | string;
}

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

const findIdealWeapon = (
    category: WeaponCategory, equipment: Equipment[], combatLevel: number
): Equipment => {
    const eligibleWeapons = equipment
        .filter(e => e.category === category.name && e.minLevel <= combatLevel && e.maxLevel >= combatLevel);

    return eligibleWeapons[0];
};

const findSuitableShields = (
    equipment: Equipment[], combatLevel: number
): Equipment[] => {
    return equipment
        .filter(e => e.category.includes('Shield') && e.minLevel <= combatLevel && e.maxLevel >= combatLevel)
        .sort((a, b) => b.craftingLevel - a.craftingLevel);
};

const chooseMeleeWeapon = (
    faction: Faction, category: WeaponCategory, combatLevel: number, craftingLevel: number
): Equipment | string => {
    const idealMeleeWeapon = findIdealWeapon(category, faction.meleeWeapons, combatLevel);

    return idealMeleeWeapon.craftingLevel <= craftingLevel
        ? idealMeleeWeapon : `You need to level up ${faction.craftingProfession} to ${idealMeleeWeapon.craftingLevel}`;
};

const chooseRangedWeapon = (
    faction: Faction, category: WeaponCategory, enemy: Enemy, combatLevel: number, craftingLevel: number
): Equipment | string => {
    if (enemy.ranged && enemy.attackStyle !== faction.rangedOnly)
        return `The enemy attacks at range and is not vulnerable to ${faction.rangedOnly.name}`;

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
