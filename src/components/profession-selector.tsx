const ProfessionSelector = ({onSelect}: { onSelect: (profession: string) => void }) => {
    const professions = ['Guard', 'Scout', 'Minefighter', 'Watchperson'];

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">Choose your profession:</span>
            </label>
            <select
                className="select select-bordered"
                onChange={(e) => onSelect(e.target.value)}
            >
                {professions.map((profession) => (
                    <option key={profession} value={profession}>
                        {profession}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ProfessionSelector;
