import {factions} from "@/model/faction";

const FactionSelector = ({value, onSelect}: { value: string, onSelect: (faction: string) => void }) => {
    return (
        <div className="form-control">
            <label className="label" htmlFor="faction">
                <span className="label-text text-xl">Choose your faction:</span>
            </label>
            <select
                id="faction"
                className="select select-bordered text-xl bg-base-200"
                value={value}
                onChange={(e) => onSelect(e.target.value)}
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
