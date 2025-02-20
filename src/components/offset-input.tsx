import {CircleHelp} from "lucide-react";
import Link from "next/link";
import {ChangeEvent, useCallback} from "react";

/**
 * OffsetInput is a React functional component that renders a UI control for selecting a numeric offset value
 * within a predefined range (-10 to +10). The component includes a slider input, a label, and visual indicators
 * of the current value.
 *
 * @param {Object} props - Props for the OffsetInput component.
 * @param {number} props.value - The current value of the offset. It determines the position of the slider
 *                               and is displayed in the label.
 * @param {Function} props.onChange - Callback function invoked when the slider value changes. It receives
 *                                    the new offset value as a number.
 */
const OffsetInput = ({value, onChange}: { value: number; onChange: (offset: number) => void }) => {
    const handleOffsetChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.target.value));
    }, [onChange]);

    return (
        <div className="form-control">
            <label className="label" htmlFor="offset">
                <div className="label-text text-xl">Enter level offset (-10 to +10)
                    <Link href="/help/offset" className="link link-primary link-hover">
                        <CircleHelp className="inline mx-2"/>
                    </Link>
                </div>
                <span className="label-text-alt text-xl font-bold">{value > 0 ? `+${value}` : value}</span>
            </label>
            <input
                id="offset"
                type="range"
                min="-10"
                max="10"
                value={value}
                className="range range-secondary"
                onChange={handleOffsetChange}
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
