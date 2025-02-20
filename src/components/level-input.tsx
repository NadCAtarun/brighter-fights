import Image from "next/image";
import {ChangeEvent, useCallback} from "react";

/**
 * A functional component that renders an input field for selecting a level,
 * along with an accompanying range slider, label, and profession-specific icon.
 *
 * @param {Object} props - The props for the LevelInput component.
 * @param {number} props.value - The current value of the level input and range slider.
 * @param {function} props.onChange - A callback function that is triggered when the level input or range value changes.
 * @param {string} props.targetProfession - The name of the profession that the level input is associated with.
 *                                          This is used for labeling and displaying a corresponding icon.
 */
const LevelInput = ({value, onChange, targetProfession}:
                    { value: number; onChange: (level: number) => void, targetProfession: string }) => {
    const handleLevelChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.target.value))
    }, [onChange]);

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
                    onChange={handleLevelChange}
                />
            </label>
            <input
                id={`${targetProfession}-level`}
                type="range"
                min="0"
                max="500"
                value={value}
                className="range range-primary"
                onChange={handleLevelChange}
            />
            <div className="w-full flex justify-between text-xs px-2">
                <span>0</span>
                <span>500</span>
            </div>
        </div>
    );
};

export default LevelInput;
