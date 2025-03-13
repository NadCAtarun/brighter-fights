import {useCallback} from "react";

/**
 * PrioritySelector is a React component that allows the user to toggle between two available priority options, "speed" and "strength".
 * The component visually represents the current selection and invokes a callback function when the selection is changed.
 *
 * @param {Object} props - The properties object that configures the component's functionality.
 * @param {'speed' | 'strength'} props.value - The currently selected priority option, either "speed" or "strength".
 * @param {function} props.onSelect - A callback function called with the new strategy ("speed" or "strength") when the toggle is clicked.
 */
const PrioritySelector = (
    {value, onSelect}: { value: 'speed' | 'strength', onSelect: (strategy: 'speed' | 'strength') => void }
) => {
    const handleToggle = useCallback(() => {
        onSelect(value === 'speed' ? 'strength' : 'speed');
    }, [value, onSelect]);

    return (
        <div className="w-full max-w-xs mx-auto flex items-center gap-2">
            <span className="text-base font-medium text-base-content">You want to prioritize</span>

            <button className="flex-1 cursor-pointer" onClick={handleToggle}>
                <div className="flex justify-between text-sm font-medium text-base-content mb-2">
                    <span className={value === 'speed' ? 'text-blue-500' : 'text-base-content/50'}>Speed</span>
                    <span className={value === 'strength' ? 'text-red-500' : 'text-base-content/50'}>Strength</span>
                </div>
                <div className="relative bg-base-300 rounded-full h-2">
                    <div
                        className={`absolute h-2 rounded-full transition-all duration-300 pointer-events-none ${
                            value === 'speed' ? 'bg-blue-500 w-1/2 left-0' : 'bg-red-500 w-1/2 left-1/2'
                        }`}
                    />
                    <div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-base-100 shadow border-2 transition-all duration-300 pointer-events-none ${
                            value === 'speed'
                                ? 'border-blue-500 left-0'
                                : 'border-red-500 left-full -translate-x-full'
                        }`}
                    />
                </div>
            </button>
        </div>
    );

};

export default PrioritySelector;
