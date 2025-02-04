const OffsetInput = ({value, onChange}: { value: number; onChange: (offset: number) => void }) => {
    return (
        <div className="form-control">
            <label className="label" htmlFor="offset">
                <span className="label-text text-xl">Enter level offset (-10 to +10)</span>
                <span className="label-text-alt text-xl font-bold">{value > 0 ? `+${value}` : value}</span>
            </label>
            <input
                id="offset"
                type="range"
                min="-10"
                max="10"
                value={value}
                className="range range-secondary"
                onChange={(e) => onChange(Number(e.target.value))}
            />
            <div className="w-full flex justify-between text-xs px-2">
                <span>-10</span>
                <span>0</span>
                <span>+10</span>
            </div>
        </div>
    );
};

export default OffsetInput;