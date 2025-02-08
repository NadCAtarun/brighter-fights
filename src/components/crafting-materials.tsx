import {Equipment} from "@/model/equipment";

/**
 * A functional component that calculates and displays the crafting materials
 * required for a given piece of equipment, as well as ideal quantities for
 * full utilization of backpack's capacity.
 *
 * @param {Equipment} equipment - The equipment object containing a list of materials with
 *                                their quantities and corresponding material names.
 */
const CraftingMaterials = (equipment: Equipment) => {
    const materialsCount = equipment.materials
        .reduce((acc, {quantity}) => acc + quantity, 0);
    const maxItems = Math.floor(24 / materialsCount);

    return (
        <div className="flex flex-col ml-10 text-secondary">
            {equipment.materials.map(({quantity, material}) => (
                <div key={material}>
                    <span className="tooltip mr-2 text-primary"
                          data-tip="Ideal quantity for full backpack">
                        [{(maxItems * quantity).toString().padStart(2, '0')}]
                    </span>
                    <span className="tooltip mr-2" data-tip="Quantity to craft 1 item">
                        {quantity}
                    </span>
                    x {material}
                </div>
            ))}
        </div>
    );
};

export default CraftingMaterials;
