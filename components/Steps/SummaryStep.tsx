"use client"

import { ADD_ONS } from "@/config/addOns.config";
import { PLANS } from "@/config/plans.config";
import { useFormStore } from "@/store/useFormStore";

function SummaryStep() {
    const {isYearlyCharge, activePlan, activeAddOns} = useFormStore();
    const filteredAddOns = ADD_ONS.filter(addOn => activeAddOns.includes(addOn.id));
    const addOnsTotal = filteredAddOns.reduce((total, addOn) => total + (isYearlyCharge ? addOn.yearlyPrice : addOn.monthlyPrice), 0);
    const planCharge = PLANS.find(plan => plan.optionName === activePlan)?.[isYearlyCharge ? "yearlyCharge" : "monthlyCharge"] || 0;
    const total = planCharge + addOnsTotal;
    const text = "text-sm leading-[120%]";

    return (
        <div className="flex flex-col gap-y-6">
            <section className="flex flex-col p-4 bg-blue-50 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col">
                        <h3 className="text-blue-950 text-sm font-medium leading-normal">{activePlan} ({isYearlyCharge ? "Yearly" : "Monthly"})</h3>
                        <p className={`${text} text-gray-500 hover:cursor-pointer`}>Change</p>
                    </div>
                    <p className={`${text} text-blue-950 font-bold tracking-[0.063rem]`}>$9/{isYearlyCharge ? "yr" : "mo"}</p>
                </div>
                <span className="block h-px w-full bg-gray-500 opacity-20"></span>
                <ul className="flex flex-col gap-y-4 mt-4">
                    {filteredAddOns.map(addOn => (
                        <li className="flex justify-between items-center" key={addOn.id}>
                            <p className={`${text} text-gray-500`}>{addOn.title}</p>
                            <p className={`${text} text-blue-950`}>+${isYearlyCharge ? addOn.yearlyPrice : addOn.monthlyPrice}/{isYearlyCharge ? "yr" : "mo"}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="flex justify-between items-center mx-6">
                <p className={`${text} text-gray-500`}>Total (per {isYearlyCharge ? "year" : "month"})</p>
                <p className="text-base text-purple-600 font-bold leading-tight">${total}/{isYearlyCharge ? "yr" : "mo"}</p>
            </section>
        </div>
    )
}

export default SummaryStep;