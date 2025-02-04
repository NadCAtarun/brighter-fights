const OffsetInput = ({onChange}: { onChange: (offset: number) => void }) => {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">Pick a level offset:</span>
            </label>
            <input
                type="number"
                min="-10"
                max="10"
                className="input input-bordered"
                onChange={(e) => onChange(Number(e.target.value))}
            />
        </div>
    );
};

export default OffsetInput;
