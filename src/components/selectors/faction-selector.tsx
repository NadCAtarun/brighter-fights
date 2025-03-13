import {useCallback, useMemo} from "react";
import {factions} from "@/model/faction";
import Image from "next/image";

/**
 * A component that allows the user to select a faction from a list of options.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.value - The currently selected faction.
 * @param {function} props.onSelect - A callback function triggered when a faction is selected. It receives the name of the selected faction as an argument.
 */
const FactionSelector = (
    {value, onSelect}: { value: string; onSelect: (faction: string) => void; }
) => {
    const handleSelect = useCallback(
        (factionName: string) => {
            onSelect(value === factionName ? "" : factionName);
        },
        [onSelect, value]
    );

    const factionHandlers = useMemo(() => {
        const handlers: Record<string, () => void> = {};
        factions.forEach((faction) => {
            handlers[faction.name] = () => handleSelect(faction.name);
        });
        return handlers;
    }, [handleSelect]);

    return (
        <div className="pt-2">
            <div className="flex space-x-4 justify-center">
                {factions.map((faction) => (
                    <button
                        key={faction.name}
                        onClick={factionHandlers[faction.name]}
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
            <div className="text-center mt-4">
                {value ? (
                    <>
                        You are a{" "}
                        <span className="font-bold text-primary">{value}</span>
                    </>
                ) : (
                    <span className="text-warning">Please pick a faction</span>
                )}
            </div>
        </div>
    );
};

export default FactionSelector;
