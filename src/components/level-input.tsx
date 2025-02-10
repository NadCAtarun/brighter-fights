import Image from "next/image";

const LevelInput = ({value, onChange, targetProfession}:
                    { value: number; onChange: (level: number) => void, targetProfession: string }) => {
    return (
        <div className="form-control">
            <label className="label" htmlFor={`${targetProfession}-level`}>
                <span className="label-text text-xl">
                    <Image
                        src={`/symbols/${targetProfession.toLowerCase()}.png`}
                        alt={targetProfession}
                        className={"inline-block mr-1"}
                        width={24}
                        height={24}
                    />
                    <strong>{targetProfession}</strong> level:
                </span>
                <input
                    type="number"
                    value={value}
                    className="input input-bordered input-primary w-20 text-xl font-bold"
                    onChange={(e) => onChange(Number(e.target.value))}
                />
            </label>
            <input
                id={`${targetProfession}-level`}
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
