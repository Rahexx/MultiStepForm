import React from "react";

function FormLayout({ children }: { children: React.ReactNode }){
    return (
        <section className="absolute top-[4.6875rem] left-1/2 -translate-x-1/2 w-[21.438rem] py-8 px-6 flex flex-col gap-6 bg-white rounded-[0.625rem] md:relative md:w-[21.75rem] md:top-0 md:left-0 md:translate-x-0 md:bg-transparent md:p-0 md:pt-[1.938rem] lg:w-[33.625rem] lg:pr-[5.5rem] lg:gap-10">
            {children}
        </section>
    );
};

export default FormLayout;