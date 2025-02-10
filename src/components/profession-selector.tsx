import {Profession, professions} from "@/model/profession";
import {useCallback} from "react";

const ProfessionSelector =
    ({value, onSelect}: { value: string, onSelect: (profession: string) => void }) => {
        const handleSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
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
