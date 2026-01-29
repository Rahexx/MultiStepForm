import Image from 'next/image';
import clsx from 'clsx';

interface PlanOptionProps {
    icon: string;
    optionName: string;
    monthlyCharge: number;
    yearlyCharge: number;
    isYearlyCharge: boolean;
    isActive: boolean;
    onChange: () => void;
}

export default function PlanOption({icon, optionName, monthlyCharge, yearlyCharge, isYearlyCharge,isActive, onChange}: PlanOptionProps) {
    return (
        <li 
        onClick={onChange}
        className={
            clsx('h-20 w-[18.438rem] p-4 rounded-lg flex items-center gap-4 border pointer', 
            isActive ? 'bg-blue-50 border-purple-500' : 'bg-white border-purple-200'
            )}>
            <Image
                src={`/images/${icon}`}
                alt={optionName}
                width={40}
                height={40}
            />
            <div className='flex flex-col gap-1'>
                <p className="font-medium text-base leading-[120%] text-blue-950 m-0">
                    {optionName}
                </p>
                <p className="text-sm leading-[120%] text-gray-400 m-0">
                    {isYearlyCharge
                        ? `$${yearlyCharge}/yr`
                        : `$${monthlyCharge}/mo`}
                </p>
                {isYearlyCharge && (
                    <p className="text-xs leading-[120%] text-blue-950 m-0">
                        2 months free
                    </p>
                )}
            </div>
        </li>
    );
}