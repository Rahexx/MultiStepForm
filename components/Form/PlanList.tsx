function PlanList({ children }: { children: React.ReactNode }) {
    return (
        <ul className="flex flex-col gap-2 lg:flex-row lg:gap-3.5">
            {children}
        </ul>
    )
}

export default PlanList;