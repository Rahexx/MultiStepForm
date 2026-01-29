import { useFormStore } from "@/store/useFormStore";
import PlanList from "../Form/PlanList";
import PlanOption from "../Form/PlanOption";
import SubscriptionOption from "../Form/SubscriptionOpion";
import PlanLayout from "../Layout/PlanLayout";
import {PLANS} from "@/config/plans.config";

function PlanStep() {
    const { activePlan, isYearlyCharge, setActivePlan } = useFormStore();

    return (
        <PlanLayout>
            <PlanList>
                {PLANS.map(plan => (
                    <PlanOption 
                        key={plan.id}
                        icon={plan.icon}
                        optionName={plan.optionName}
                        isActive={activePlan === plan.optionName}
                        isYearlyCharge={isYearlyCharge}
                        monthlyCharge={plan.monthlyCharge}
                        yearlyCharge={plan.yearlyCharge}
                        onChange={() => setActivePlan(plan.optionName)}
                    />
                ))}
            </PlanList>
            <SubscriptionOption />
        </PlanLayout>
    );
}

export default PlanStep;