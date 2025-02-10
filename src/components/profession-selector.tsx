import {Profession, professions} from "@/model/profession";
import {ChangeEvent, useCallback} from "react";

/**
 * ProfessionSelector is a functional component for selecting a profession
 * from a dropdown list. It allows the user to choose a profession and
 * executes a callback function whenever a selection is made.
 *
 * @param {Object} props - The props object.
 * @param {string} props.value - The currently selected profession value.
 * @param {(profession: string) => void} props.onSelect - Callback function
 * invoked when the selected profession value changes. The selected value
 * is passed as an argument.
 */
const ProfessionSelector =
    ({value, onSelect}: { value: string, onSelect: (profession: string) => void }) => {
        const handleSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
            onSelect(e.target.value);
        }, [onSelect]);

        return (
            <div className="form-control">
                <label className="label" htmlFor="profession">
                    <span className="label-text text-xl">Choose your profession:</span>
                </label>
                <select
                    id="profession"
                    className="select select-bordered text-xl bg-base-200"
                    value={value}
                    onChange={handleSelect}
                >
                    {professions.map((p: Profession) => (
                        <option key={p.name} value={p.name}>
                            {p.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

export default ProfessionSelector;
