const LevelInput = ({value, onChange, targetProfession}:
                    { value: number; onChange: (level: number) => void, targetProfession: string }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text text-xl">Your <strong>{targetProfession}</strong> level:</span>
                <span className="label-text-alt font-bold text-xl">{value}</span>
            </label>
            <input
                type="range"
                min="0"
                max="500"
                value={value}
                className="range range-primary"
                onChange={(e) => onChange(Number(e.target.value))}
            />
            <div className="w-full flex justify-between text-xs px-2">
                <span>0</span>
                <span>500</span>
            </div>
        </div>
    );
};

export default LevelInput;