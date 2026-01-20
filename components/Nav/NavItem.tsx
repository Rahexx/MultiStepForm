import clsx from "clsx";

function NavItem({stepNumber}: {stepNumber: number}) {
    return (
        <li className={clsx(
            "h-[2.0625rem] w-[2.0625rem] flex items-center justify-center border rounded-full text-sm font-bold tracking-[0.063rem] hover:cursor-pointer",
            {
                "bg-blue-200 border-blue-200 text-black": stepNumber === 1,
                "border-white text-white": stepNumber !== 1
            }
        )}>
            {stepNumber}
        </li>
    )
}

export default NavItem;