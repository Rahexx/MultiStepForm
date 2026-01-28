import PlanList from "../Form/PlanList";
import PlanOption from "../Form/PlanOption";
import SubscriptionOption from "../Form/SubscriptionOpion";
import PlanLayout from "../Layout/PlanLayout";
import {PLANS} from "@/config/plans.config";

function PlanStep() {
    return (
        <PlanLayout>
            <PlanList>
                {PLANS.map(plan => (
                    <PlanOption 
                        key={plan.id}
                        icon={plan.icon}
                        optionName={plan.optionName}
                        isActive={false}
                        isYearlyCharge={false}
                        monthlyCharge={plan.monthlyCharge}
                        yearlyCharge={plan.yearlyCharge}
                    />
                ))}
            </PlanList>
            <SubscriptionOption />
        </PlanLayout>
    );
}

export default PlanStep;