const LevelInput = ({onChange}: { onChange: (level: number) => void }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">Enter your current level:</span>
            </label>
            <input
                type="number"
                min="0"
                max="500"
                className="input input-bordered"
                onChange={(e) => onChange(Number(e.target.value))}
            />
        </div>
    );
};

export default LevelInput;
