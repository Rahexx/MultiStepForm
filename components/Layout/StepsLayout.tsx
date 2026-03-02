import Image from 'next/image'
import Nav from "@/components/Nav/Nav";

function StepsLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative md:flex md:justify-between md:h-full md:w-full">
            <section className="relative h-[10.75rem] md:h-full md:w-[17.375rem]">
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
                <Nav />
            </section>
            {children}
        </main>
    );
}

export default StepsLayout;