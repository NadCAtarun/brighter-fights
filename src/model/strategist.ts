import {Enemy} from "@/model/enemy";
import {Equipment, EquipmentCategory} from "@/model/equipment";
import {enemiesByName} from "@/model/profession";
import {
    craftingProfessionByFactionName,
    equipmentByFactionName,
    equipmentCategoriesByFactionName
} from "@/model/faction";

export function findIdealEnemy(enemies: Enemy[], userLevel: number, offset: number): Enemy | null {
    const eligibleEnemies = enemies.filter(
        enemy => enemy.unlockLevel <= userLevel && enemy.combatLevel <= Math.max(0, userLevel + offset));

    if (eligibleEnemies.length === 0) {
        return null;
    }

    return eligibleEnemies[eligibleEnemies.length - 1];
}

export function findIdealWeaponCategory(factionCategories: EquipmentCategory[], type: 'melee' | 'ranged',
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

export function findIdealWeapon(weaponCategory: EquipmentCategory | null, factionEquipment: Equipment[],
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

export interface Recommendations {
    enemy: Enemy | null;
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
    const enemy = findIdealEnemy(enemiesByName(profession), userLevel, offset);
    return {
        enemy: enemy,
        meleeWeapon: findIdealWeapon(
            findIdealWeaponCategory(
                equipmentCategoriesByFactionName(faction),
                'melee',
                enemy,
                strategy),
            equipmentByFactionName(faction),
            userLevel,
            factionLevel,
            craftingProfessionByFactionName(faction),
        ),
        rangedWeapon: 'Sample Ranged Weapon',
        shield: 'Sample Shield',
    };
}
