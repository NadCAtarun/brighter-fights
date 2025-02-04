"use client";

import {useState} from "react";
import FactionSelector from "@/components/faction-selector";
import ProfessionSelector from "@/components/profession-selector";

export default function Home() {
    const [faction, setFaction] = useState('');
    const [profession, setProfession] = useState('');

    return (
        <div className="container mx-auto p-4 font-text">
            <h1 className="text-4xl font-bold font-title mb-8">Brighter Fights</h1>
            <h2 className="text-2xl font-bold font-title mb-8">Combat companion app for Brighter Shores</h2>
            <FactionSelector onSelect={setFaction}/>
            {faction && <p>Selected faction: {faction}</p>}
            <ProfessionSelector onSelect={setProfession}/>
            {profession && <p>Selected profession: {profession}</p>}
        </div>
    );
}
