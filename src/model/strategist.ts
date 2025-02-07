import {Enemy} from "@/model/enemy";
import {Equipment, EquipmentCategory} from "@/model/equipment";
import {enemiesByName} from "@/model/profession";
import {
    craftingProfessionByFactionName,
    equipmentByFactionName,
    equipmentCategoriesByFactionName
} from "@/model/faction";

function findIdealEnemy(enemies: Enemy[], userLevel: number, offset: number): Enemy | null {
    const eligibleEnemies = enemies.filter(
        enemy => enemy.unlockLevel <= userLevel && enemy.combatLevel <= Math.max(0, userLevel + offset));

    if (eligibleEnemies.length === 0) {
        return null;
    }

    return eligibleEnemies[eligibleEnemies.length - 1];
}

function findNextLevel(enemies: Enemy[], currentEnemy: Enemy | null, offset: number): number {
    if (!currentEnemy) return 0;

    const futureEnemies = enemies.filter(enemy => enemy.combatLevel > currentEnemy.combatLevel)
        .sort((a, b) => a.combatLevel - b.combatLevel);

    if (futureEnemies.length === 0) return 0;

    const nextLevel = futureEnemies[0].combatLevel - offset;

    if (nextLevel < 1 || nextLevel > 500) return 0;

    return nextLevel
}

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

function findIdealShield(factionEquipment: Equipment[], userLevel: number,
                         craftingLevel: number, craftingProfession: string): Equipment | string {
    const eligibleShields = factionEquipment.filter((e) =>
        e.name.includes('Shield') && e.maxLevel >= userLevel
    ).sort((a, b) => a.craftingLevel - b.craftingLevel);

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
