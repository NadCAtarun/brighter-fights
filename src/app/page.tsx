"use client"

import FactionSelector from "@/components/selectors/faction-selector";
import {useCallback, useEffect, useState} from "react";
import EnemySelector from "@/components/selectors/enemy-selector";
import {Enemy, enemyByName} from "@/model/enemy";
import RaritySelector from "@/components/selectors/rarity-selector";
import LevelSelector from "@/components/selectors/level-selector";

export default function Home() {
    const [faction, setFaction] = useState('');
    const [enemy, setEnemy] = useState<Enemy | null>(null);
    const [rarity, setRarity] = useState<'Rare' | 'Epic'>('Epic');
    const [combatLevel, setCombatLevel] = useState(0);
    const [blacksmithLevel, setBlacksmithLevel] = useState(0);
    const [bonewrightLevel, setBonewrightLevel] = useState(0);
    const [stonemasonLevel, setStonemasonLevel] = useState(0);

    useEffect(() => {
        const faction = localStorage.getItem('faction') || '';
        setFaction(faction);

        const enemy = localStorage.getItem('enemy') || '';
        setEnemy(enemyByName(enemy));

        const rarity = localStorage.getItem('rarity') || 'Epic';
        setRarity(rarity === 'Rare' ? 'Rare' : 'Epic');

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
            setFaction(faction);
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
                <FactionSelector value={faction} onSelect={handleFactionChange}/>
                <EnemySelector value={enemy} onSelect={handleEnemyChange}/>
                <RaritySelector value={rarity} onSelect={handleRarityChange}/>
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
        </>
    );
}
