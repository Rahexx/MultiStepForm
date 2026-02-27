function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex flex-col justify-between md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:h-[37.5rem] md:w-[42.875rem] md:bg-white md:rounded-2xl md:shadow-[9px_25px_40px_-20px_rgba(0,0,0,0.0951)] md:overflow-hidden">
            {children}
        </div>
    );
}

export default MainLayout;