import {Equipment, WeaponCategory} from "@/model/equipment";
import {Enemy} from "@/model/enemy";

export const findIdealWeaponCategory = (
    categories: WeaponCategory[], type: 'melee' | 'ranged', enemy: Enemy, priority: 'speed' | 'strength'
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

export const findIdealWeapon = (
    category: WeaponCategory, equipment: Equipment[], combatLevel: number
): Equipment => {
    const eligibleWeapons = equipment
        .filter(e => e.category === category.name && e.minLevel <= combatLevel && e.maxLevel >= combatLevel);

    return eligibleWeapons[0];
};

export const findSuitableShields = (
    equipment: Equipment[], combatLevel: number
): Equipment[] => {
    return equipment
        .filter(e => e.category.includes('Shield') && e.minLevel <= combatLevel && e.maxLevel >= combatLevel)
        .sort((a, b) => b.craftingLevel - a.craftingLevel);
};
