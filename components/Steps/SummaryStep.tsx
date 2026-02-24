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

    return (
        <div>
            <section>
                <div>
                    <div>
                        <h3>{activePlan} ({isYearlyCharge ? "Yearly" : "Monthly"})</h3>
                        <p>Change</p>
                    </div>
                    <p>$9/{isYearlyCharge ? "yr" : "mo"}</p>
                </div>
                <ul>
                    {filteredAddOns.map(addOn => (
                        <li key={addOn.id}>
                            <p>{addOn.title}</p>
                            <p>+${isYearlyCharge ? addOn.yearlyPrice : addOn.monthlyPrice}/{isYearlyCharge ? "yr" : "mo"}</p>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <p>Total (per {isYearlyCharge ? "year" : "month"})</p>
                <p>${total}/{isYearlyCharge ? "yr" : "mo"}</p>
            </section>
        </div>
    )
}

export default SummaryStep;