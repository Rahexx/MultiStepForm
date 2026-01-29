import { useState } from "react";
import { Toggle } from "./Toggle";
import clsx from "clsx";
import { useFormStore } from "@/store/useFormStore";

function SubscriptionOption() {
    const {isYearlyCharge, setIsYearlyCharge} = useFormStore();

    return (
        <section className="h-12 w-[18.438rem] flex justify-center items-center gap-6 bg-blue-50 rounded-lg">
            <span 
            className={clsx(
                "text-sm font-medium leading-[150%]",
                isYearlyCharge ? "text-gray-500" : "text-blue-950"
            )}>
                Monthly
            </span>
            <Toggle checked={isYearlyCharge} onChange={setIsYearlyCharge} />
            <span 
                className={clsx(
                "text-sm font-medium leading-[150%]",
                isYearlyCharge ? "text-blue-950" : "text-gray-500"
            )}>
                Yearly
            </span>
        </section>
    )
}

export default SubscriptionOption;