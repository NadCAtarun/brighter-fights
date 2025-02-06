import {categoryByName} from "@/model/equipment";

const EquipmentProperties = ({category}: { category: string }) => {
    const c = categoryByName(category)
    return (
        <>
            {c?.element.symbol || ''}
        </>
    );
};

export default EquipmentProperties;
