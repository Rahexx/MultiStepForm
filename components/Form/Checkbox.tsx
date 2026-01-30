import clsx from "clsx"
import Image from "next/image"

function Checkbox({isActive}: {isActive: boolean}) {
    return (
        <div className={clsx("flex justify-center items-center h-5 w-5 border rounded-sm transition-colors duration-300",
            isActive ? "bg-purple-600 border-purple-600" : "border-purple-200 bg-white",
        )}>
            {isActive && (
                <Image 
                    src="/images/icon-checkmark.svg"
                    width={12}
                    height={10}
                    alt="check icon"
                />
            )}
        </div>
    )
}

export default Checkbox