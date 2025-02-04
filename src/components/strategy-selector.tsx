import {strategies} from "@/model/strategy";

const StrategySelector = ({value, onSelect}: { value: string, onSelect: (strategy: string) => void }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text text-xl">Choose your strategy:</span>
            </label>
            <select
                className="select select-bordered text-xl bg-base-200"
                value={value}
                onChange={(e) => onSelect(e.target.value)}
            >
                {strategies.map((strategy) => (
                    <option key={strategy.name} value={strategy.name}>
                        {strategy.description}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StrategySelector;
