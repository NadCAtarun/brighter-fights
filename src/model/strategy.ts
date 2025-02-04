export interface Strategy {
    name: string;
    description: string;
}

export const strategies = [
    {name: 'vulnerability', description: 'Exploit elemental vulnerability'},
    {name: 'quickest', description: 'Quickest weapon avoiding immunity'},
];
