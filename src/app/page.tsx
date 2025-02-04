"use client";

import {useState} from "react";
import FactionSelector from "@/components/faction-selector";
import ProfessionSelector from "@/components/profession-selector";
import LevelInput from "@/components/level-input";
import OffsetInput from "@/components/offset-input";
import StrategySelector from "@/components/strategy-selector";
import Results from "@/components/results";
import {findIdealEnemy} from "@/model/strategist";
import {enemiesByName} from "@/model/profession";
import {Enemy} from "@/model/enemy";
import {craftingProfessionByFactionName} from "@/model/faction";

export default function Home() {
    const [profession, setProfession] = useState('Guard');
    const [userLevel, setUserLevel] = useState(0);
    const [faction, setFaction] = useState('Guardian');
    const [factionLevel, setFactionLevel] = useState(0);
    const [offset, setOffset] = useState(0);
    const [strategy, setStrategy] = useState('');
    const [results, setResults] = useState<{
        enemy: Enemy | null;
        meleeWeapon: string;
        rangedWeapon: string;
        shield: string;
    } | null>(null);

    const handleSubmit = () => {
        //TODO: replace by actual logic
        const calculatedResults = {
            enemy: findIdealEnemy(enemiesByName(profession), userLevel, offset),
            meleeWeapon: 'Sample Melee Weapon',
            rangedWeapon: 'Sample Ranged Weapon',
            shield: 'Sample Shield',
        };
        setResults(calculatedResults);
    };


    return (
        <div className="container mx-auto p-4 font-text">
            <h1 className="text-4xl font-bold font-title mb-8">Brighter Fights</h1>
            <h2 className="text-2xl font-bold font-title mb-8">Combat companion app for Brighter Shores</h2>

            <div className="grid grid-cols-2 gap-4">
                <ProfessionSelector onSelect={setProfession}/>
                <LevelInput value={userLevel} onChange={setUserLevel} targetProfession={profession}/>
                <FactionSelector onSelect={setFaction}/>
                <LevelInput
                    value={factionLevel}
                    onChange={setFactionLevel}
                    targetProfession={craftingProfessionByFactionName(faction)}
                />
                <StrategySelector onSelect={setStrategy}/>
                <OffsetInput value={offset} onChange={setOffset}/>
            </div>
            <button className="btn btn-primary mt-4 mb-8" onClick={handleSubmit}>
                Calculate or update recommendations
            </button>
            {results && <Results {...results} />}
        </div>
    );
}
