const FactionSelector = ({onSelect}: { onSelect: (faction: string) => void }) => {
    const factions = ['Guardian', 'Cryoknight', 'Hammermage'];

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
                    <option key={faction} value={faction}>
                        {faction}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default FactionSelector
