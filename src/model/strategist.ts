import {Enemy} from "@/model/enemy";

export function findIdealEnemy(enemies: Enemy[], userLevel: number, offset: number): Enemy | null {
    const eligibleEnemies = enemies.filter(
        enemy => enemy.unlockLevel <= userLevel && enemy.combatLevel <= Math.max(0, userLevel + offset));

    if (eligibleEnemies.length === 0) {
        return null;
    }

    return eligibleEnemies[eligibleEnemies.length - 1];
}
