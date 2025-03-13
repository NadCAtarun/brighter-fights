import {CraftingRecommendations} from "@/model/strategist";
import EquipmentProperties from "@/components/equipment-properties";
import CraftingMaterials from "@/components/crafting-materials";
import ExternalLink from "@/components/external-link";

const Recommendations = (recs: CraftingRecommendations) => {
    return (
        <div className="p-10">
            <h2 className="text-2xl font-bold font-title mb-3">Recommendations</h2>

            {typeof recs.meleeWeapon === 'string' && (<p className="text-xl text-warning">{recs.meleeWeapon}</p>)}
            {typeof recs.meleeWeapon === 'object' && (
                <div className="text-xl">
                    Melee weapon to craft:
                    <ExternalLink url={recs.meleeWeapon.url} label={recs.meleeWeapon.name}/>
                    <EquipmentProperties categoryName={recs.meleeWeapon.category}/>
                    <CraftingMaterials {...recs.meleeWeapon}/>
                </div>
            )}

            {typeof recs.rangedWeapon === 'string' && (<p className="text-xl text-warning">{recs.rangedWeapon}</p>)}
            {typeof recs.rangedWeapon === 'object' && (
                <div className="text-xl">
                    Ranged weapon to craft:
                    <ExternalLink url={recs.rangedWeapon.url} label={recs.rangedWeapon.name}/>
                    <EquipmentProperties categoryName={recs.rangedWeapon.category}/>
                    <CraftingMaterials {...recs.rangedWeapon}/>
                </div>
            )}

            {typeof recs.shield === 'string' && (<p className="text-xl text-warning">{recs.shield}</p>)}
            {typeof recs.shield === 'object' && (
                <div className="text-xl">
                    Shield to craft:
                    <ExternalLink url={recs.shield.url} label={recs.shield.name}/>
                    <EquipmentProperties categoryName={recs.shield.category}/>
                    <CraftingMaterials {...recs.shield}/>
                </div>
            )}
        </div>
    );
};

export default Recommendations;
