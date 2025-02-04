const StrategySelector = ({onSelect}: { onSelect: (strategy: string) => void }) => {
    const strategies = ['Exploit elemental vulnerability', 'Quickest weapon avoiding immunity'];

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text text-xl">Choose your strategy:</span>
            </label>
            <select
                className="select select-bordered text-xl bg-base-200"
                onChange={(e) => onSelect(e.target.value)}
            >
                {strategies.map((strategy) => (
                    <option key={strategy} value={strategy}>
                        {strategy}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StrategySelector;
