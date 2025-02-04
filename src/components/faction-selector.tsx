import {factions} from "@/model/faction";

const FactionSelector = ({onSelect}: { onSelect: (faction: string) => void }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">Choose your faction:</span>
            </label>
            <select
                className="select select-bordered"
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
