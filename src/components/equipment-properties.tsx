import {categoryByName} from "@/model/equipment";
import Image from "next/image";

/**
 * EquipmentProperties is a functional component that renders equipment-related information
 * based on the provided category. It dynamically fetches equipment details by the category name
 * and displays relevant icons and tooltips.
 *
 * @param {string} category - The name of the equipment category used to retrieve associated data.
 */
const EquipmentProperties = ({categoryName}: { categoryName: string }) => {
    const category = categoryByName(categoryName);
    if (!category) return null;

    return (
        <>
            <div className="tooltip tooltip-secondary" data-tip={category.element.name}>
                <Image
                    src={`/symbols/${category.element.name.toLowerCase()}.png`}
                    alt={category.element.name}
                    className="inline-block mx-1"
                    width={20}
                    height={20}
                />
            </div>
            <div className="tooltip tooltip-secondary" data-tip={`${category.hands}-handed`}>
                <Image
                    src={`/symbols/${category.hands}hand.png`}
                    alt={`${category.hands} hand(s)`}
                    className="inline-block"
                    width={20}
                    height={20}
                />
            </div>
        </>
    );
};

export default EquipmentProperties;
