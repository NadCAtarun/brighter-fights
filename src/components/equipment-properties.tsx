import {categoryByName} from "@/model/equipment";
import Image from "next/image";

const EquipmentProperties = ({category}: { category: string }) => {
    const c = categoryByName(category);
    if (!c) return (<></>);

    return (
        <>
            <Image
                src={`/symbols/${c.element.name.toLowerCase()}.png`}
                alt={c.element.name}
                className="inline-block mx-1"
                width={20}
                height={20}
            />
            <Image
                src={`/symbols/${c.hands}hand.png`}
                alt={`${c.hands} hand(s)`}
                className="inline-block"
                width={20}
                height={20}
            />
        </>
    );
};

export default EquipmentProperties;
