import { useStepsStore } from "@/store/useStepsStore";
import clsx from "clsx";

function NavItem({stepNumber}: {stepNumber: number}) {
    const {step} = useStepsStore();
    
    return (
        <li className={clsx(
            "h-[2.0625rem] w-[2.0625rem] flex items-center justify-center border rounded-full text-sm font-bold tracking-[0.063rem] hover:cursor-pointer",
            {
                "bg-blue-200 border-blue-200 text-black": stepNumber === step,
                "border-white text-white": stepNumber !== step
            }
        )}>
            {stepNumber}
        </li>
    )
}

export default NavItem;