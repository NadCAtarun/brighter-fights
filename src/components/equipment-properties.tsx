import {categoryByName} from "@/model/equipment";
import Image from "next/image";

const EquipmentProperties = ({category}: { category: string }) => {
    const c = categoryByName(category);
    if (!c) return (<></>);

    return (
        <>
            <div className="tooltip tooltip-secondary" data-tip={c.element.name}>
                <Image
                    src={`/symbols/${c.element.name.toLowerCase()}.png`}
                    alt={c.element.name}
                    className="inline-block mx-1"
                    width={20}
                    height={20}
                />
            </div>
            <div className="tooltip tooltip-secondary" data-tip={`${c.hands}-handed`}>
                <Image
                    src={`/symbols/${c.hands}hand.png`}
                    alt={`${c.hands} hand(s)`}
                    className="inline-block"
                    width={20}
                    height={20}
                />
            </div>
        </>
    );
};

export default EquipmentProperties;

/*
<div className="tooltip" data-tip="hello">
  <button className="btn">Hover me</button>
</div>
 */