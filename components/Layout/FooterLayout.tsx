function FooterLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-[4.5rem] flex items-center justify-center bg-white md:absolute md:bottom-8 md:right-[2.375rem] md:bg-transparent">
            <div className="w-[21.438rem] flex items-center justify-between md:w-[21.75rem]">
                {children}
            </div>
        </div>
    );
}

export default FooterLayout;