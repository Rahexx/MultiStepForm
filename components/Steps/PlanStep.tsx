import PlanList from "../Form/PlanList";
import PlanOption from "../Form/PlanOption";
import PlanLayout from "../Layout/PlanLayout";

function PlanStep() {
    return (
        <PlanLayout>
            <PlanList>
                <PlanOption 
                    icon="icon-arcade.svg" 
                    optionName="Arcade" 
                    isActive={false} 
                    isYearlyCharge={false} 
                    monthlyCharge={9} 
                    yearlyCharge={90} 
                />
                <PlanOption 
                    icon="icon-advanced.svg" 
                    optionName="Advanced" 
                    isActive={false} 
                    isYearlyCharge={false} 
                    monthlyCharge={12} 
                    yearlyCharge={120} 
                />
                <PlanOption 
                    icon="icon-pro.svg" 
                    optionName="Pro" 
                    isActive={false} 
                    isYearlyCharge={false} 
                    monthlyCharge={15} 
                    yearlyCharge={150} 
                />
            </PlanList>
        </PlanLayout>
    );
}

export default PlanStep;