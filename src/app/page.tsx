"use client";

import {useState} from "react";
import FactionSelector from "@/components/faction-selector";
import ProfessionSelector from "@/components/profession-selector";
import LevelInput from "@/components/level-input";
import OffsetInput from "@/components/offset-input";
import StrategySelector from "@/components/strategy-selector";
import Results from "@/components/results";

export default function Home() {
    const [faction, setFaction] = useState('');
    const [profession, setProfession] = useState('');
    const [level, setLevel] = useState(0);
    const [offset, setOffset] = useState(0);
    const [strategy, setStrategy] = useState('');
    const [results, setResults] = useState<{
        enemy: string;
        location: string;
        meleeWeapon: string;
        rangedWeapon: string;
        shield: string;
    } | null>(null);

    const handleSubmit = () => {
        //TODO: replace by actual logic
        const calculatedResults = {
            enemy: 'Sample Enemy',
            location: 'Sample Location',
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

            <FactionSelector onSelect={setFaction}/>
            <ProfessionSelector onSelect={setProfession}/>
            <LevelInput onChange={setLevel}/>
            <OffsetInput onChange={setOffset}/>
            <StrategySelector onSelect={setStrategy}/>
            <button className="btn btn-primary mt-4" onClick={handleSubmit}>
                Calculate
            </button>
            {results && <Results {...results} />}
        </div>
    );
}
