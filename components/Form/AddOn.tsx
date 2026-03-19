import clsx from "clsx";
import Checkbox from "./Checkbox";

interface AddOnProps {
    isActive: boolean;
    title: string;
    description: string;
    price: string;
    isYearlyCharge: boolean;
    toggleState: () => void;
}

function AddOn({isActive, title, description, price, isYearlyCharge, toggleState}: AddOnProps) {
    return (
        <div 
            onClick={toggleState}
            className={clsx(
                "flex h-[3.875rem] w-[18.438rem] items-center py-3 px-4 border rounded-lg cursor-pointer transition-colors duration-300 md:h-[5.063rem] md:w-[21.75rem] md:py-[1.156rem] md:px-6 lg:w-full",
                isActive ? "bg-blue-50 border-purple-600" : "bg-white border-purple-200")}>
            <Checkbox isActive={isActive} />
            <div className="flex flex-col ml-4 md:ml-6 md:gap-2">
                <h3 className="font-medium text-sm leading-[150%] text-blue-950 md:text-base md:leading-[120%]">{title}</h3>
                <p className="text-xs leading-[120%] text-gray-500 md:text-sm">{description}</p>
            </div>
            <p className="ml-auto text-xs leading-[120%] text-purple-600 md:text-sm">+${price}/{isYearlyCharge ? "yr" : "mo"}</p>
        </div>
    )
}

export default AddOn;