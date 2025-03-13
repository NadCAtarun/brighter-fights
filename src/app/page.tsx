"use client"

import FactionSelector from "@/components/selectors/faction-selector";
import {useCallback, useEffect, useState} from "react";
import EnemySelector from "@/components/selectors/enemy-selector";
import {Enemy, enemyByName} from "@/model/enemy";
import RaritySelector from "@/components/selectors/rarity-selector";
import LevelSelector from "@/components/selectors/level-selector";
import {Faction, factionByName} from "@/model/faction";
import PrioritySelector from "@/components/selectors/priority-selector";
import {findSuitableShields, findIdealWeapon, findIdealWeaponCategory} from "@/model/strategist";

export default function Home() {
    const [faction, setFaction] = useState<Faction | null>(null);
    const [enemy, setEnemy] = useState<Enemy | null>(null);
    const [rarity, setRarity] = useState<'Rare' | 'Epic'>('Epic');
    const [priority, setPriority] = useState<'speed' | 'strength'>('speed');
    const [combatLevel, setCombatLevel] = useState(0);
    const [blacksmithLevel, setBlacksmithLevel] = useState(0);
    const [bonewrightLevel, setBonewrightLevel] = useState(0);
    const [stonemasonLevel, setStonemasonLevel] = useState(0);

    useEffect(() => {
        const faction = localStorage.getItem('faction') || '';
        setFaction(factionByName(faction));

        const enemy = localStorage.getItem('enemy') || '';
        setEnemy(enemyByName(enemy));

        const rarity = localStorage.getItem('rarity') || 'Epic';
        setRarity(rarity === 'Rare' ? 'Rare' : 'Epic');

        const priority = localStorage.getItem('priority') || 'speed';
        setPriority(priority === 'speed' ? 'speed' : 'strength');

        const combatLevel = localStorage.getItem('combatLevel') || '0';
        setCombatLevel(parseInt(combatLevel));

        const blacksmithLevel = localStorage.getItem('blacksmithLevel') || '0';
        setBlacksmithLevel(parseInt(blacksmithLevel));

        const bonewrightLevel = localStorage.getItem('bonewrightLevel') || '0';
        setBonewrightLevel(parseInt(bonewrightLevel));

        const stonemasonLevel = localStorage.getItem('stonemasonLevel') || '0';
        setStonemasonLevel(parseInt(stonemasonLevel));
    }, [faction, enemy]);

    const handleFactionChange = useCallback(
        (faction: string) => {
            localStorage.setItem('faction', faction);
            setFaction(factionByName(faction));
        }, []);

    const handleEnemyChange = useCallback(
        (enemy: Enemy | null) => {
            localStorage.setItem('enemy', enemy?.name || '');
            setEnemy(enemy);
        }, []);

    const handleRarityChange = useCallback(
        (rarity: 'Rare' | 'Epic') => {
            localStorage.setItem('rarity', rarity);
            setRarity(rarity);
        }, []);

    const handlePriorityChange = useCallback(
        (priority: 'speed' | 'strength') => {
            localStorage.setItem('priority', priority);
            setPriority(priority);
        }, []);

    const handleCombatLevelChange = useCallback(
        (combatLevel: number) => {
            localStorage.setItem('combatLevel', combatLevel.toString());
            setCombatLevel(combatLevel);
        }, []);

    const handleBlacksmithLevelChange = useCallback(
        (blacksmithLevel: number) => {
            localStorage.setItem('blacksmithLevel', blacksmithLevel.toString());
            setBlacksmithLevel(blacksmithLevel);
        }, []);

    const handleBonewrightLevelChange = useCallback(
        (bonewrightLevel: number) => {
            localStorage.setItem('bonewrightLevel', bonewrightLevel.toString());
            setBonewrightLevel(bonewrightLevel);
        }, []);

    const handleStonemasonLevelChange = useCallback(
        (stonemasonLevel: number) => {
            localStorage.setItem('stonemasonLevel', stonemasonLevel.toString());
            setStonemasonLevel(stonemasonLevel);
        }, []);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <FactionSelector value={faction?.name || ''} onSelect={handleFactionChange}/>
                <EnemySelector value={enemy} onSelect={handleEnemyChange} faction={faction}/>
                <div>
                    <RaritySelector value={rarity} onSelect={handleRarityChange}/>
                    <PrioritySelector value={priority} onSelect={handlePriorityChange}/>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <LevelSelector value={combatLevel} onChange={handleCombatLevelChange}
                               profession="Combat" maxLevel={2000}/>
                <LevelSelector value={blacksmithLevel} onChange={handleBlacksmithLevelChange}
                               profession="Blacksmith" maxLevel={500}/>
                <LevelSelector value={bonewrightLevel} onChange={handleBonewrightLevelChange}
                               profession="Bonewright" maxLevel={500}/>
                <LevelSelector value={stonemasonLevel} onChange={handleStonemasonLevelChange}
                               profession="Stonemason" maxLevel={500}/>
            </div>

            {faction && enemy && (
                <div>
                    <pre>{JSON.stringify(findIdealWeapon(
                        findIdealWeaponCategory(faction.weaponCategories, 'melee', enemy, priority),
                        faction.meleeWeapons, combatLevel))}</pre>
                    <pre>{JSON.stringify(findIdealWeapon(
                        findIdealWeaponCategory(faction.weaponCategories, 'ranged', enemy, priority),
                        faction.rangedWeapons, combatLevel))}</pre>
                    <pre>{JSON.stringify(findSuitableShields(faction.shields, combatLevel))}</pre>
                </div>
            )}
        </>
    );
}
