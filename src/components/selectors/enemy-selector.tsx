import {ChangeEvent, useEffect, useMemo, useState, useCallback} from 'react';
import {enemies, Enemy} from '@/model/enemy';
import indefinite from 'indefinite';
import {MdClear} from 'react-icons/md';
import ExternalLink from '@/components/external-link';
import EnemyProperties from '@/components/enemy-properties';
import {Faction} from '@/model/faction';

const MAX_MATCHES = 4;

/**
 * A functional component that allows the selection of an enemy from a filtered list based on user input.
 * The component handles searching, selecting, and clearing an enemy selection, as well as displaying
 * additional properties associated with the selected enemy.
 *
 * @param {object} props The input properties for the EnemySelector component.
 * @param {Enemy|null} props.value The current selected enemy. Can be null if no enemy is selected.
 * @param {function} props.onSelect A callback function triggered when an enemy is selected or when the selection is cleared.
 * @param {Faction|null} props.faction The current faction, used to display faction-specific properties of the enemy.
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

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        if (selectedEnemy) setSelectedEnemy(null);
    }, [selectedEnemy]);

    const handleSelect = useCallback((enemy: Enemy) => {
        setSearchTerm(enemy.name);
        setSelectedEnemy(enemy);
        onSelect(enemy);
    }, [onSelect]);

    const handleClearSelection = useCallback(() => {
        setSearchTerm('');
        setSelectedEnemy(null);
        onSelect(null);
    }, [onSelect]);

    const filteredEnemies = useMemo(() => {
        return enemies.filter((enemy) =>
            enemy.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const enemyHandlers = useMemo(() => {
        const handlers: Record<string, () => void> = {};
        filteredEnemies.forEach((enemy) => {
            handlers[enemy.name] = () => handleSelect(enemy);
        });
        return handlers;
    }, [filteredEnemies, handleSelect]);

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

                    {filteredEnemies.length > 0 &&
                        filteredEnemies.length <= MAX_MATCHES && (
                            <ul className="menu bg-base-100 rounded-box p-2">
                                {filteredEnemies.map((enemy) => (
                                    <li key={enemy.name}>
                                        <button
                                            onClick={enemyHandlers[enemy.name]}
                                            className="w-full text-left"
                                        >
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
