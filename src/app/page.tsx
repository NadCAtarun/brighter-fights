"use client";

import {useEffect, useState} from "react";
import FactionSelector from "@/components/faction-selector";
import ProfessionSelector from "@/components/profession-selector";
import LevelInput from "@/components/level-input";
import OffsetInput from "@/components/offset-input";
import StrategySelector from "@/components/strategy-selector";
import Results from "@/components/results";
import {getRecommendations} from "@/model/strategist";
import {Enemy} from "@/model/enemy";
import {
    craftingProfessionByFactionName,
} from "@/model/faction";
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
        meleeWeapon: Equipment | string;
        rangedWeapon: Equipment | string;
        shield: Equipment | string;
    } | null>(null);

    const handleSubmit = (() => {
        setResults(getRecommendations(
            profession,
            userLevel,
            offset,
            faction,
            factionLevel,
            strategy,
        ));
    });

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

    return (
        <div className="container mx-auto p-4 font-text">
            <h1 className="text-4xl font-bold font-title mb-8">Brighter Fights</h1>
            <h2 className="text-2xl font-bold font-title mb-8">Combat companion app for Brighter Shores</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ProfessionSelector
                    value={profession}
                    onSelect={(p: string) => {
                        localStorage.setItem('profession', p);
                        setProfession(p);
                    }}
                />
                <LevelInput
                    value={userLevel}
                    onChange={(ul: number) => {
                        localStorage.setItem('userLevel', ul.toString());
                        setUserLevel(ul);
                    }}
                    targetProfession={profession}
                />
                <FactionSelector
                    value={faction}
                    onSelect={(f: string) => {
                        localStorage.setItem('faction', f);
                        setFaction(f);
                    }}
                />
                <LevelInput
                    value={factionLevel}
                    onChange={(fl: number) => {
                        localStorage.setItem('factionLevel', fl.toString());
                        setFactionLevel(fl);
                    }}
                    targetProfession={craftingProfessionByFactionName(faction)}
                />
                <StrategySelector
                    value={strategy}
                    onSelect={(s: string) => {
                        localStorage.setItem('strategy', s);
                        setStrategy(s);
                    }}
                />
                <OffsetInput
                    value={offset}
                    onChange={(o: number) => {
                        localStorage.setItem('offset', o.toString());
                        setOffset(o);
                    }}
                />
            </div>
            <button className="btn btn-primary mt-8 mb-8 text-xl" onClick={handleSubmit}>
                Update recommendations
            </button>
            {results && <Results {...results} />}
        </div>
    );
}
