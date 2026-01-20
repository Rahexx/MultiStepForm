import Image from 'next/image'

function StepsLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative h-[10.75rem]">
            <Image
                src="/images/bg-sidebar-mobile.svg"
                alt="Sidebar Background"
                className="md:hidden"
                fill
            />
            <Image
                src="/images/bg-sidebar-desktop.svg"
                alt="Sidebar Background"
                className="max-md:hidden"
                fill
            />
            {children}
        </main>
    );
}

export default StepsLayout;