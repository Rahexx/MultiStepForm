function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-blue-100">
            {children}
        </div>
    );
}

export default MainLayout;