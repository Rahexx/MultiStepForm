function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-screen flex flex-col justify-between bg-blue-100">
            {children}
        </div>
    );
}

export default MainLayout;