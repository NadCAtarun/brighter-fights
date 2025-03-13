import {Equipment} from "@/model/equipment";

/**
 * Generates a React component to display a list of crafting materials
 * with calculated quantities for crafting purposes.
 *
 * The component takes equipment data and computes the total material count,
 * then derives the maximum number of items that can fit in a standard backpack
 * based on this count. Each material is displayed along with its corresponding
 * quantity and ideal backpack quantity.
 *
 * @param {Equipment} equipment - An object representing equipment details,
 * including a list of materials and their respective quantities.
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
