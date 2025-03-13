import {ChangeEvent, useCallback} from "react";
import Image from "next/image";

/**
 * LevelSelector is a React functional component designed to allow users to input or adjust a numerical "level" value.
 * It displays both a number input field and a range slider for setting the level, with appropriate constraints based
 * on the provided properties. The component dynamically updates based on changes and invokes the callback function
 * when the value changes.
 *
 * @param {object} props - The properties passed to the component.
 * @param {number} props.value - The current level value to display in the input and slider.
 * @param {function} props.onChange - Callback function triggered when the level value changes, takes the updated value as a parameter.
 * @param {string} props.profession - The profession name to be displayed, which also determines the corresponding icon.
 * @param {number} [props.maxLevel=500] - The maximum achievable level value (default is 500).
 */
const LevelSelector = (
    {value, onChange, profession, maxLevel = 500}:
    { value: number; onChange: (level: number) => void; profession: string; maxLevel: number; }
) => {
    const handleLevelChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onChange(Math.min(Math.max(Number(e.target.value), 0), maxLevel));
        },
        [maxLevel, onChange]
    );

    return (
        <div className="flex flex-col items-center max-w-[300px] mx-auto py-3">
            <div className="form-control w-full">
                <label
                    className="label flex justify-center items-center pb-1"
                    htmlFor={`${profession}-level`}
                >
                  <span className="label-text text-xl flex items-center">
                    <Image
                        src={`/symbols/${profession.toLowerCase()}.png`}
                        alt={profession}
                        className="inline-block mr-1"
                        width={24}
                        height={24}
                    />
                    Your <strong className="mx-1">{profession}</strong>level
                  </span>
                </label>

                <div className="px-2">
                    <input
                        id={`${profession}-level`}
                        type="number"
                        min={0}
                        max={maxLevel}
                        className="input input-bordered input-primary w-full mb-2"
                        value={value}
                        onChange={handleLevelChange}
                    />
                    <input
                        type="range"
                        className="range range-primary w-full"
                        value={value}
                        min={0}
                        max={maxLevel}
                        onChange={handleLevelChange}
                    />
                    <div className="flex justify-between text-xs px-1">
                        <span>0</span>
                        <span>{maxLevel}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LevelSelector;
