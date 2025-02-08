import {Equipment} from "@/model/equipment";

const CraftingMaterials = (equipment: Equipment) => {
    return (
        <div className="flex flex-col ml-10 text-secondary">
            {equipment.materials.map(({quantity, material}) => (
                <div key={material}>
                    {quantity} x {material}
                </div>
            ))}
        </div>
    );
};

export default CraftingMaterials;
