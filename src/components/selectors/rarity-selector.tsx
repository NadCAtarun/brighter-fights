import {useCallback} from "react";

/**
 * RaritySelector is a React component that allows the user to toggle between two available rarity options, "rare" and "epic".
 * The component visually represents the current selection and invokes a callback function when the selection is changed.
 */
const RaritySelector = (
    {value, onSelect}: { value: 'rare' | 'epic', onSelect: (rarity: 'rare' | 'epic') => void }
) => {
    const handleToggle = useCallback(() => {
        onSelect(value === 'rare' ? 'epic' : 'rare');
    }, [value, onSelect]);

    return (
        <div className="w-full max-w-xs mx-auto flex items-center gap-2">
            <span className="text-base font-medium text-base-content">You want to craft</span>

            <button className="flex-1 cursor-pointer" onClick={handleToggle}>
                <div className="flex justify-between text-sm font-medium text-base-content mb-2">
                    <span className={value === 'rare' ? 'text-purple-500' : 'text-base-content/50'}>Rare</span>
                    <span className={value === 'epic' ? 'text-orange-500' : 'text-base-content/50'}>Epic</span>
                </div>
                <div className="relative bg-base-300 rounded-full h-2">
                    <div
                        className={`absolute h-2 rounded-full transition-all duration-300 pointer-events-none ${
                            value === 'rare' ? 'bg-purple-500 w-1/2 left-0' : 'bg-orange-500 w-1/2 left-1/2'
                        }`}
                    />
                    <div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-base-100 shadow border-2 transition-all duration-300 pointer-events-none ${
                            value === 'rare'
                                ? 'border-purple-500 left-0'
                                : 'border-orange-500 left-full -translate-x-full'
                        }`}
                    />
                </div>
            </button>
        </div>
    );
};

export default RaritySelector;
