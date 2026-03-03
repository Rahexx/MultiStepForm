import { useStepsStore } from "@/store/useStepsStore";
import clsx from "clsx";
import { STEPS } from "@/config/steps.config";

function NavItem({stepNumber}: {stepNumber: number}) {
    const {step} = useStepsStore();
    const stepData = STEPS.find(s => s.id === stepNumber);

    return (
        <li className="flex items-center gap-4">
            <div
                className={clsx(
                    "h-[2.0625rem] w-[2.0625rem] flex items-center justify-center border rounded-full text-sm font-bold tracking-[0.063rem] hover:cursor-pointer",
                    {
                        "bg-blue-200 border-blue-200 text-black": stepNumber === step,
                        "border-white text-white": stepNumber !== step
                    }
                )}
            >
                {stepNumber}
            </div>

            {stepData && (
                <p className="hidden md:flex flex-col">
                    <span className="text-xs uppercase text-blue-300 leading-[120%]">
                        Step {stepNumber}
                    </span>
                    <span className="text-sm font-bold text-white leading-[120%] tracking-[1px]">
                        {stepData.shortTitle}
                    </span>
                </p>
            )}
        </li>
    )
}

export default NavItem;