import {Equipment, WeaponCategory} from "@/model/equipment";
import {Enemy} from "@/model/enemy";
import {Faction} from "@/model/faction";

export interface CraftingRecommendations {
    meleeWeapon: Equipment | string;
    rangedWeapon: Equipment | string;
    shield: Equipment | string;
}

const findIdealWeaponCategory = (
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

export const generateRecommendations =
    (faction: Faction, enemy: Enemy, priority: string,
     combatLevel: number, craftingLevel: number): CraftingRecommendations => {
        const idealMeleeWeapon = findIdealWeapon(
            findIdealWeaponCategory(faction.weaponCategories, 'melee', enemy, priority),
            faction.meleeWeapons,
            combatLevel,
        );
        const meleeWeapon = idealMeleeWeapon.craftingLevel <= craftingLevel
            ? idealMeleeWeapon : `You need to level up ${faction.craftingProfession} to ${idealMeleeWeapon.craftingLevel}`;

        const idealRangedWeapon = findIdealWeapon(
            findIdealWeaponCategory(faction.weaponCategories, 'ranged', enemy, priority),
            faction.rangedWeapons,
            combatLevel,
        );
        const rangedWeapon = idealRangedWeapon.craftingLevel <= craftingLevel
            ? idealRangedWeapon : `You need to level up ${faction.craftingProfession} to ${idealRangedWeapon.craftingLevel}`;

        const suitableShields = findSuitableShields(faction.shields, combatLevel);
        const shield = suitableShields.find(s => s.craftingLevel <= craftingLevel)
            || `You need to level up ${faction.craftingProfession} to ${suitableShields[suitableShields.length - 1].craftingLevel}`;

        return {
            meleeWeapon,
            rangedWeapon,
            shield,
        }
    };

