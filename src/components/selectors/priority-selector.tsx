import {useCallback} from "react";

const PrioritySelector = (
    {value, onSelect}: {
        value: 'speed' | 'strength', onSelect: (strategy: 'speed' | 'strength') => void
    }) => {
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
