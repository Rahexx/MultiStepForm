import { ADD_ONS } from "@/config/addOns.config";
import AddOn from "../Form/AddOn";

function AddOnsStep() {
    return (
        <div className="flex flex-col gap-2">
            {ADD_ONS.map((addOn) => (
                <AddOn 
                    key={addOn.id}
                    isActive={false}
                    title={addOn.title}
                    description={addOn.description}
                    price={addOn.monthlyPrice.toString()}
                    isYearlyCharge={false}
                />
            ))}
        </div>
    )
}

export default AddOnsStep;