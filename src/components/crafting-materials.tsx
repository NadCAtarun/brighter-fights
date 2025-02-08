import {Equipment} from "@/model/equipment";

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
