import {categoryByName} from "@/model/equipment";

const EquipmentProperties = ({category}: { category: string }) => {
    const c = categoryByName(category)
    return (
        <>
            {c?.element.symbol || ''}
            {c?.hands === 1 ? '🖐' : c?.hands === 2 ? '👐' : ''}
        </>
    );
};

export default EquipmentProperties;
