import {Profession, professions} from "@/model/profession";

const ProfessionSelector = ({onSelect}: { onSelect: (profession: string) => void }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text text-xl">Choose your profession:</span>
            </label>
            <select
                className="select select-bordered text-xl bg-base-200"
                onChange={(e) => onSelect(e.target.value)}
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
