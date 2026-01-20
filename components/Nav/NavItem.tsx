function NavItem({stepNumber}: {stepNumber: number}) {
    return (
        <li className="h-[2.0625rem] w-[2.0625rem] flex items-center justify-center border border-white text-white rounded-full hover:cursor-pointer">
            {stepNumber}
        </li>
    )
}

export default NavItem;