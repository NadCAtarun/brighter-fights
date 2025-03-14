import {ChangeEvent, useCallback} from "react";
import Image from "next/image";

/**
 * LevelInput is a React functional component used for adjusting and displaying
 * a numerical level associated with a specific profession. It provides both
 * a numerical input field and a range slider for adjusting the value.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.profession - The profession associated with the level input.
 * @param {number} props.max - The maximum allowable value for the level input.
 * @param {number} props.value - The current value of the level input.
 * @param {function} props.onChange - Callback function to handle changes to the input value.
 */
const LevelInput = (
    props: {
        profession: string,
        max: number,
        value: number,
        onChange: (e: ChangeEvent<HTMLInputElement>) => void
    }
) =>
    <>
        <div className="flex justify-center">
            <input
                id={`${props.profession}-level`}
                type="number"
                min={0}
                max={props.max}
                className="input input-bordered input-primary w-1/2 mb-2 text-center text-xl"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
        <input
            type="range"
            className="range range-primary"
            value={props.value}
            min={0}
            max={props.max}
            onChange={props.onChange}
        />
        <div className="flex justify-between text-xs px-1">
            <span>0</span>
            <span>{props.max}</span>
        </div>
    </>

/**
 * Renders a label component for displaying the level of a specific profession.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.profession - The name of the profession to be displayed.
 * @param {string} props.s - The identifier for the symbol or icon associated with the profession.
 */
const LevelLabel = (props: { profession: string, s: string }) =>
    <label
        className="label flex justify-center items-center pb-1"
        htmlFor={`${props.profession}-level`}
    >
                  <span className="label-text text-xl flex items-center">
                    <Image
                        src={`/symbols/${props.s}.png`}
                        alt={props.profession}
                        className="inline-block mr-1"
                        width={24}
                        height={24}
                    />
                    Your <strong className="mx-1">{props.profession}</strong>level
                  </span>
    </label>

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
                <LevelLabel profession={profession} s={profession.toLowerCase()}/>

                <LevelInput profession={profession} max={maxLevel} value={value} onChange={handleLevelChange}/>
            </div>
        </div>
    );
};

export default LevelSelector;
