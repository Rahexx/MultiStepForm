function PlanList({ children }: { children: React.ReactNode }) {
    return (
        <ul className="flex flex-col gap-2">
            {children}
        </ul>
    )
}

export default PlanList;