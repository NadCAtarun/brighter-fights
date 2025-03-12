"use client"

import FactionSelector from "@/components/selectors/faction-selector";
import {useCallback, useEffect, useState} from "react";
import EnemySelector from "@/components/selectors/enemy-selector";
import {Enemy, enemyByName} from "@/model/enemy";
import RaritySelector from "@/components/selectors/rarity-selector";

export default function Home() {
    const [faction, setFaction] = useState('');
    const [enemy, setEnemy] = useState<Enemy | null>(null);
    const [rarity, setRarity] = useState<'Rare' | 'Epic'>('Epic');

    useEffect(() => {
        const faction = localStorage.getItem('faction') || '';
        setFaction(faction);

        const enemy = localStorage.getItem('enemy') || '';
        setEnemy(enemyByName(enemy));

        const rarity = localStorage.getItem('rarity') || 'Epic';
        setRarity(rarity === 'Rare' ? 'Rare' : 'Epic');
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

    return (
        <>
            <FactionSelector value={faction} onSelect={handleFactionChange}/>
            <EnemySelector value={enemy} onSelect={handleEnemyChange}/>
            <RaritySelector value={rarity} onSelect={handleRarityChange}/>
        </>
    );
}
