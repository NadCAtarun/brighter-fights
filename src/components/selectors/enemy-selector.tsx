import {ChangeEvent, useEffect, useMemo, useState} from 'react';
import {enemies, Enemy} from '@/model/enemy';
import indefinite from 'indefinite';
import {MdClear} from 'react-icons/md';
import ExternalLink from '@/components/external-link';
import EnemyProperties from '@/components/enemy-properties';
import {Faction} from '@/model/faction';

const MAX_MATCHES = 4;

/**
 * Represents a selector component for choosing an enemy from a list based on user input.
 *
 * @param {Object} props - The props object for the EnemySelector component.
 * @param {Enemy | null} props.value - The currently selected enemy, or null if none is selected.
 * @param {Function} props.onSelect - A callback function invoked when an enemy is selected or cleared.
 * @param {Faction | null} props.faction - The faction associated with the selected enemy or the filtering process.
 */
const EnemySelector = (
    {value, onSelect, faction}: {
        value: Enemy | null;
        onSelect: (enemy: Enemy | null) => void;
        faction: Faction | null;
    }
) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(value);

    useEffect(() => {
        setSelectedEnemy(value);
        setSearchTerm(value ? value.name : '');
    }, [value]);

    /**
     * Handles the change event of an input element and updates the corresponding state variables.
     *
     * @param {ChangeEvent<HTMLInputElement>} e - The input change event.
     * Sets the value of the input field to the local state variable `searchTerm` and resets
     * the `selectedEnemy` state variable to null if a selection exists.
     */
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        if (selectedEnemy) {
            setSelectedEnemy(null);
        }
    };

    /**
     * Handles the selection of an enemy item.
     * Updates the search term, sets the selected enemy,
     * and triggers the provided selection callback.
     *
     * @param {Enemy} enemy - The enemy object being selected.
     */
    const handleSelect = (enemy: Enemy) => {
        setSearchTerm(enemy.name);
        setSelectedEnemy(enemy);
        onSelect(enemy);
    };

    /**
     * Clears the current selection and resets relevant states.
     */
    const handleClearSelection = () => {
        setSearchTerm('');
        setSelectedEnemy(null);
        onSelect(null);
    };

    const filteredEnemies = useMemo(
        () =>
            enemies.filter((enemy) =>
                enemy.name.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        [searchTerm]
    );

    // Pre-create handlers for each enemy to avoid inline functions
    const enemyHandlers = useMemo(() => {
        const handlers: Record<string, () => void> = {};
        filteredEnemies.forEach((enemy) => {
            handlers[enemy.name] = () => handleSelect(enemy);
        });
        return handlers;
    }, [filteredEnemies]);

    return (
        <div className="w-full max-w-md mx-auto p-4">
            {!selectedEnemy && (
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search enemy by name..."
                        className="input input-bordered w-full mb-2"
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                </div>
            )}

            {!selectedEnemy && searchTerm && (
                <div>
                    {filteredEnemies.length === 0 && (
                        <p className="text-red-500">No enemy found by that name 🥺</p>
                    )}

                    {filteredEnemies.length > MAX_MATCHES && (
                        <p>{filteredEnemies.length} possible matches</p>
                    )}

                    {filteredEnemies.length > 0 && filteredEnemies.length <= MAX_MATCHES && (
                        <ul className="menu bg-base-100 rounded-box p-2">
                            {filteredEnemies.map((enemy) => (
                                <li key={enemy.name}>
                                    <button onClick={enemyHandlers[enemy.name]} className="w-full text-left">
                                        {enemy.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {selectedEnemy && (
                <div className="mt-4 flex justify-center items-center gap-4">
                    <div className="inline-flex items-center">
            <span>
              You are fighting{' '}
                {indefinite(selectedEnemy.name, {articleOnly: true})}{' '}
            </span>
                        <ExternalLink url={selectedEnemy.url} label={selectedEnemy.name}/>
                    </div>
                    <button
                        className="btn btn-outline btn-sm"
                        onClick={handleClearSelection}
                    >
                        <MdClear/>
                        Pick another
                    </button>
                </div>
            )}

            {selectedEnemy && EnemyProperties(selectedEnemy, faction)}
        </div>
    );
};

export default EnemySelector;
