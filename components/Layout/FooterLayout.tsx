function FooterLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-[4.5rem] flex items-center justify-center bg-white md:absolute md:bottom-8 md:right-[2.375rem] md:bg-transparent lg:bottom-12 lg:right-[6.25rem]">
            <div className="w-[21.438rem] flex items-center justify-between md:w-[21.75rem] lg:w-[28.125rem]">
                {children}
            </div>
        </div>
    );
}

export default FooterLayout;