'use client';

import { ADD_ONS } from "@/config/addOns.config";
import { useFormStore } from "@/store/useFormStore";
import AddOn from "../Form/AddOn";

function AddOnsStep() {
    const {activeAddOns, isYearlyCharge, toggleAddOn} = useFormStore((state) => state);

    const handleAddOnClick = (addOnId: number) => {
        toggleAddOn(addOnId);
    };

    return (
        <div className="flex flex-col gap-2">
            {ADD_ONS.map((addOn) => (
                <AddOn 
                    key={addOn.id}
                    toggleState={() => handleAddOnClick(addOn.id)}
                    isActive={activeAddOns.includes(addOn.id)}
                    title={addOn.title}
                    description={addOn.description}
                    price={(isYearlyCharge ? addOn.yearlyPrice : addOn.monthlyPrice).toString()}
                    isYearlyCharge={isYearlyCharge}
                />
            ))}
        </div>
    )
}

export default AddOnsStep;