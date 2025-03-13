"use client"

import FactionSelector from "@/components/selectors/faction-selector";
import {useCallback, useEffect, useState} from "react";
import EnemySelector from "@/components/selectors/enemy-selector";
import {Enemy, enemyByName} from "@/model/enemy";
import LevelSelector from "@/components/selectors/level-selector";
import {Faction, factionByName} from "@/model/faction";
import PrioritySelector from "@/components/selectors/priority-selector";
import Recommendations from "@/components/recommendations";
import {CraftingRecommendations, generateRecommendations} from "@/model/strategist";

/**
 * Computes the crafting level based on the given faction and corresponding skill levels.
 *
 * @param {Faction} faction - The faction for which the crafting level is determined.
 *                            The faction's `name` property is used to decide the relevant skill level.
 *                            Possible faction names include 'Cryoknight', 'Guardian', and others.
 * @param {number} blacksmithLevel - The skill level of the blacksmith, relevant for 'Cryoknight' faction.
 * @param {number} bonewrightLevel - The skill level of the bonewright, relevant for 'Guardian' faction.
 * @param {number} stonemasonLevel - The skill level of the stonemason, relevant for 'Hammermage' faction.
 * @returns {number} The crafting level corresponding to the faction and relevant skill level.
 */
const craftingLevel = (
    faction: Faction, blacksmithLevel: number, bonewrightLevel: number, stonemasonLevel: number
): number => {
    switch (faction.name) {
        case 'Cryoknight':
            return blacksmithLevel;
        case 'Guardian':
            return bonewrightLevel;
        default:
            return stonemasonLevel;
    }
};

/**
 * Represents the main application component for configuring various parameters
 * such as faction, enemy, priority, combat level, and crafting professions.
 * Manages state and handles user interactions to update these settings, while
 * also calculating crafting recommendations based on the provided inputs.
 */
export default function Home() {
    const [faction, setFaction] = useState<Faction | null>(null);
    const [enemy, setEnemy] = useState<Enemy | null>(null);
    const [priority, setPriority] = useState<'speed' | 'strength'>('speed');
    const [combatLevel, setCombatLevel] = useState(0);
    const [blacksmithLevel, setBlacksmithLevel] = useState(0);
    const [bonewrightLevel, setBonewrightLevel] = useState(0);
    const [stonemasonLevel, setStonemasonLevel] = useState(0);
    const [recommendations, setRecommendations] = useState<CraftingRecommendations | null>(null);

    useEffect(() => {
        const factionName = localStorage.getItem('faction') || '';
        const faction = factionByName(factionName);
        setFaction(faction);

        const enemyName = localStorage.getItem('enemy') || '';
        const enemy = enemyByName(enemyName);
        setEnemy(enemy);

        const priority = localStorage.getItem('priority') || 'speed';
        setPriority(priority === 'speed' ? 'speed' : 'strength');

        const combatLevel = parseInt(localStorage.getItem('combatLevel') || '0');
        setCombatLevel(combatLevel);

        const blacksmithLevel = parseInt(localStorage.getItem('blacksmithLevel') || '0');
        setBlacksmithLevel(blacksmithLevel);

        const bonewrightLevel = parseInt(localStorage.getItem('bonewrightLevel') || '0');
        setBonewrightLevel(bonewrightLevel);

        const stonemasonLevel = parseInt(localStorage.getItem('stonemasonLevel') || '0');
        setStonemasonLevel(stonemasonLevel);

        if (faction && enemy) {
            setRecommendations(generateRecommendations(faction, enemy, priority, combatLevel,
                craftingLevel(faction, blacksmithLevel, bonewrightLevel, stonemasonLevel)))
        } else {
            setRecommendations(null);
        }
    }, [faction, enemy, priority, combatLevel, blacksmithLevel, bonewrightLevel, stonemasonLevel]);

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
                <PrioritySelector value={priority} onSelect={handlePriorityChange}/>
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

            {recommendations && <Recommendations {...recommendations}/>}
            {!recommendations && (
                <p className="text-xl text-warning p-20">
                    Please pick an enemy so the app can give you recommendations 🙏
                    (personalized striping makes it impossible to guess which enemy makes sense for you 🥺)
                </p>
            )}
        </>
    );
}
