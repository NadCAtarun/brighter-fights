import {factions} from "@/model/faction";
import {ChangeEvent, useCallback} from "react";

/**
 * FactionSelector is a functional component that renders a dropdown selector
 * for choosing a faction. It allows users to select a faction from a list of
 * options and triggers a callback function when a selection is made.
 *
 * @param {Object} props - The properties object for the component.
 * @param {string} props.value - The current selected faction value.
 * @param {function} props.onSelect - The callback function triggered when a faction is selected.
 *                                    It receives the selected faction's name as an argument.
 */
const FactionSelector = ({value, onSelect}: { value: string, onSelect: (faction: string) => void }) => {
    const handleFactionChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        onSelect(e.target.value);
    }, [onSelect]);

    return (
        <div className="form-control">
            <label className="label" htmlFor="faction">
                <span className="label-text text-xl">Choose your faction:</span>
            </label>
            <select
                id="faction"
                className="select select-bordered text-xl bg-base-200"
                value={value}
                onChange={handleFactionChange}
            >
                {factions.map((faction) => (
                    <option key={faction.name} value={faction.name}>
                        {faction.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FactionSelector
