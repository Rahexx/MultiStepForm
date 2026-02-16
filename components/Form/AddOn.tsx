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
                "flex h-[3.875rem] w-[18.438rem] items-center py-3 px-4 border rounded-lg cursor-pointer transition-colors duration-300",
                isActive ? "bg-blue-50 border-purple-600" : "bg-white border-purple-200")}>
            <Checkbox isActive={isActive} />
            <div className="flex flex-col ml-4">
                <h3 className="font-medium text-sm leading-[150%] text-blue-950">{title}</h3>
                <p className="text-xs leading-[120%] text-gray-500">{description}</p>
            </div>
            <p className="ml-auto text-xs leading-[120%] text-purple-600">+${price}/{isYearlyCharge ? "yr" : "mo"}</p>
        </div>
    )
}

export default AddOn;