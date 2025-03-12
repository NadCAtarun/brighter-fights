import {useCallback} from "react";
import {factions} from "@/model/faction";
import Image from "next/image";

const FactionSelector = ({value, onSelect}: { value: string; onSelect: (faction: string) => void }) => {
    const handleSelect = useCallback((factionName: string) => {
        onSelect(value === factionName ? '' : factionName);
    }, [onSelect, value]);

    return (
        <div className="pt-2">
            <p className="text-center mb-4">
                {value ? (
                    <>You are a <span className="font-bold text-primary">{value}</span></>
                ) : (
                    <>Please pick a faction:</>
                )}
            </p>
            <div className="flex space-x-4 justify-center">
                {factions.map((faction) => (
                    <button
                        key={faction.name}
                        onClick={handleSelect.bind(null, faction.name)}
                        className={`btn tooltip tooltip-bottom w-20 h-20 p-0 border-4 border-transparent ${
                            value === faction.name
                                ? "border-primary ring-2 ring-primary ring-offset-2"
                                : ""
                        }`}
                        data-tip={faction.name}
                    >
                        <Image
                            src={`/symbols/${faction.name.toLowerCase()}.png`}
                            alt={faction.name}
                            className="w-20 h-20"
                            width={256}
                            height={256}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FactionSelector;
