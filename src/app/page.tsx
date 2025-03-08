"use client"

import FactionSelector from "@/components/faction-selector";
import {useCallback, useEffect, useState} from "react";
import EnemySelector from "@/components/enemy-selector";
import {Enemy, enemyByName} from "@/model/enemy";


export default function Home() {
    const [faction, setFaction] = useState('');
    const [enemy, setEnemy] = useState<Enemy | null>(null);

    useEffect(() => {
        const faction = localStorage.getItem('faction') || '';
        setFaction(faction);

        const enemy = localStorage.getItem('enemy') || '';
        setEnemy(enemyByName(enemy));
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

    return (
        <>
            <FactionSelector value={faction} onSelect={handleFactionChange}/>
            <EnemySelector value={enemy} onSelect={handleEnemyChange}/>
        </>
    );
}
