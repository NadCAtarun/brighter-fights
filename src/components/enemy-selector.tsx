import {ChangeEvent, useEffect, useState} from 'react';
import {enemies, Enemy} from "@/model/enemy";
import indefinite from "indefinite";

const MAX_MATCHES = 4;

const EnemySelector = ({value, onSelect}: { value: Enemy | null, onSelect: (enemy: Enemy) => void }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEnemy, setSelectedEnemy] = useState<Enemy | null>(value);

    useEffect(() => {
        setSelectedEnemy(value);
        setSearchTerm(value ? value.name : '');
    }, [value]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        if (selectedEnemy) {
            setSelectedEnemy(null);
        }
    };

    const handleSelect = (enemy: Enemy) => {
        setSearchTerm(enemy.name);
        setSelectedEnemy(enemy);
        onSelect && onSelect(enemy);
    };

    const filteredEnemies = enemies.filter(enemy =>
        enemy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <input
                type="text"
                placeholder="Search enemy by name..."
                className="input input-bordered w-full mb-2"
                value={searchTerm}
                onChange={handleInputChange}
            />

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
                            {filteredEnemies.map(enemy => (
                                <li key={enemy.name}>
                                    <button onClick={() => handleSelect(enemy)} className="w-full text-left">
                                        {enemy.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}

            {selectedEnemy && (
                <div className="mt-4">
                    <h3 className="text-center mb-4">
                        You are fighting {indefinite(selectedEnemy.name, {articleOnly: true})} <span
                        className="font-bold text-primary">{selectedEnemy.name}</span>
                    </h3>
                </div>
            )}
        </div>
    );
};

export default EnemySelector;
