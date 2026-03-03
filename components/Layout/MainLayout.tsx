function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relativeh-screen flex flex-col justify-between md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:h-[37.5rem] md:w-[45.75rem] md:bg-white md:rounded-2xl md:shadow-[9px_25px_40px_-20px_rgba(0,0,0,0.0951)] md:overflow-hidden md:p-3">
            {children}
        </div>
    );
}

export default MainLayout;