"use client";

import {useCallback, useEffect, useState} from "react";
import FactionSelector from "@/components/faction-selector";
import ProfessionSelector from "@/components/profession-selector";
import LevelInput from "@/components/level-input";
import OffsetInput from "@/components/offset-input";
import StrategySelector from "@/components/strategy-selector";
import Results from "@/components/results";
import {getRecommendations} from "@/model/strategist";
import {Enemy} from "@/model/enemy";
import {craftingProfessionByFactionName,} from "@/model/faction";
import {Equipment} from "@/model/equipment";

export default function Home() {
    const [profession, setProfession] = useState('Guard');
    const [userLevel, setUserLevel] = useState(0);
    const [faction, setFaction] = useState('Cryoknight');
    const [factionLevel, setFactionLevel] = useState(0);
    const [offset, setOffset] = useState(0);
    const [strategy, setStrategy] = useState('vulnerability');
    const [results, setResults] = useState<{
        enemy: Enemy | null;
        nextLevel: number;
        meleeWeapon: Equipment | string;
        rangedWeapon: Equipment | string;
        shield: Equipment | string;
    } | null>(null);

    useEffect(() => {
        const profession = localStorage.getItem('profession') || 'Guard';
        setProfession(profession || 'Guard');

        const userLevel = parseInt(localStorage.getItem('userLevel') || '0');
        setUserLevel(userLevel);

        const faction = localStorage.getItem('faction') || 'Cryoknight';
        setFaction(faction || 'Cryoknight');

        const factionLevel = parseInt(localStorage.getItem('factionLevel') || '0');
        setFactionLevel(parseInt(localStorage.getItem('factionLevel') || '0'));

        const offset = parseInt(localStorage.getItem('offset') || '0');
        setOffset(offset);

        const strategy = localStorage.getItem('strategy') || 'vulnerability';
        setStrategy(localStorage.getItem('strategy') || 'vulnerability');

        setResults(getRecommendations(
            profession,
            userLevel,
            offset,
            faction,
            factionLevel,
            strategy,
        ));
    }, [])

    const handleProfessionChange = useCallback(
        (profession: string) => {
            localStorage.setItem('profession', profession);
            setProfession(profession);
        }, []);

    const handleUserLevelChange = useCallback(
        (level: number) => {
            localStorage.setItem('userLevel', level.toString());
            setUserLevel(level);
        }, []);

    const handleFactionChange = useCallback(
        (faction: string) => {
            localStorage.setItem('faction', faction);
            setFaction(faction);
        }, []);

    const handleFactionLevelChange = useCallback(
        (level: number) => {
            localStorage.setItem('factionLevel', level.toString());
            setFactionLevel(level);
        }, []);

    const handleStrategyChange = useCallback(
        (strategy: string) => {
            localStorage.setItem('strategy', strategy);
            setStrategy(strategy);
        }, []);

    const handleOffsetChange = useCallback(
        (offset: number) => {
            localStorage.setItem('offset', offset.toString());
            setOffset(offset);
        }, []);

    const handleSubmit = useCallback(
        () => {
            setResults(getRecommendations(
                profession,
                userLevel,
                offset,
                faction,
                factionLevel,
                strategy,
            ));

        }, [faction, factionLevel, offset, profession, strategy, userLevel]);

    return (
        <div className="container mx-auto p-4 font-text">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ProfessionSelector value={profession} onSelect={handleProfessionChange}/>
                <LevelInput
                    value={userLevel}
                    onChange={handleUserLevelChange}
                    targetProfession={profession}
                />
                <FactionSelector value={faction} onSelect={handleFactionChange}/>
                <LevelInput
                    value={factionLevel}
                    onChange={handleFactionLevelChange}
                    targetProfession={craftingProfessionByFactionName(faction)}
                />
                <StrategySelector value={strategy} onSelect={handleStrategyChange}/>
                <OffsetInput value={offset} onChange={handleOffsetChange}/>
            </div>
            <button className="btn btn-primary mt-8 mb-8 text-xl" onClick={handleSubmit}>
                Update recommendations
            </button>
            {results && <Results onLevelClick={handleUserLevelChange} recs={results}/>}
        </div>
    );
}
