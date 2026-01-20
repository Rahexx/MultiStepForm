function FooterLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-[4.5rem] flex items-center justify-center bg-white">
            <div className="w-[21.438rem] flex items-center justify-between">
                {children}
            </div>
        </div>
    );
}

export default FooterLayout;