import {useCallback} from 'react';

const RaritySelector = ({value, onSelect}: {
    value: 'Rare' | 'Epic',
    onSelect: (strategy: 'Rare' | 'Epic') => void
}) => {
    const handleToogle = useCallback(() => {
        onSelect(value === 'Rare' ? 'Epic' : 'Rare');
    }, [value, onSelect]);

    return (
        <div className="w-full max-w-xs mx-auto flex items-center gap-2">
            <span className="text-base font-medium text-base-content">You want to craft</span>

            <div className="flex-1 cursor-pointer" onClick={handleToogle}>
                <div className="flex justify-between text-sm font-medium text-base-content mb-2">
                    <span className={value === 'Rare' ? 'text-purple-500' : 'text-base-content/50'}>Rare</span>
                    <span className={value === 'Epic' ? 'text-orange-500' : 'text-base-content/50'}>Epic</span>
                </div>
                <div className="relative bg-base-300 rounded-full h-2">
                    <div
                        className={`absolute h-2 rounded-full transition-all duration-300 pointer-events-none ${
                            value === 'Rare' ? 'bg-purple-500 w-1/2 left-0' : 'bg-orange-500 w-1/2 left-1/2'
                        }`}
                    />
                    <div
                        className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-base-100 shadow border-2 transition-all duration-300 pointer-events-none ${
                            value === 'Rare'
                                ? 'border-purple-500 left-0'
                                : 'border-orange-500 left-full -translate-x-full'
                        }`}
                    />
                </div>
            </div>

            <span className="text-base font-medium text-base-content">equipment</span>
        </div>
    );
}

export default RaritySelector;
