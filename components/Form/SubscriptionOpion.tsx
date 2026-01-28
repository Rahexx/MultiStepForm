import { useState } from "react";
import { Toggle } from "./Toggle";
import clsx from "clsx";

function SubscriptionOption() {
    const [enabled, setEnabled] = useState(false);

    return (
        <section className="h-12 w-[18.438rem] flex justify-center items-center gap-6 bg-blue-50 rounded-lg">
            <span 
            className={clsx(
                "text-sm font-medium leading-[150%]",
                enabled ? "text-gray-500" : "text-blue-950"
            )}>
                Monthly
            </span>
            <Toggle checked={enabled} onChange={setEnabled} />
            <span 
                className={clsx(
                "text-sm font-medium leading-[150%]",
                enabled ? "text-blue-950" : "text-gray-500"
            )}>
                Yearly
            </span>
        </section>
    )
}

export default SubscriptionOption;