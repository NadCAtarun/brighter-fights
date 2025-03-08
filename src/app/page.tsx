"use client"

import FactionSelector from "@/components/faction-selector";
import {useCallback, useEffect, useState} from "react";
import EnemySelector from "@/components/enemy-selector";

export default function Home() {
    const [faction, setFaction] = useState('');

    useEffect(() => {
        const faction = localStorage.getItem('faction') || '';
        setFaction(faction || '');
    }, [faction]);

    const handleFactionChange = useCallback(
        (faction: string) => {
            localStorage.setItem('faction', faction);
            setFaction(faction);
        }, []);

    return (
        <>
            <FactionSelector value={faction} onSelect={handleFactionChange}/>
            <EnemySelector onEnemySelect={() => {
            }}/>
        </>
    );
}
