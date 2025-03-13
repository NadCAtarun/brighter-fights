import {categoryByName} from "@/model/equipment";
import Image from "next/image";

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
