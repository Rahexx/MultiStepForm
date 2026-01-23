import React from "react";

function FormLayout({ children }: { children: React.ReactNode }){
    return (
        <section className="absolute top-[4.6875rem] left-1/2 -translate-x-1/2 w-[21.438rem] py-8 px-6 flex flex-col gap-6 bg-white rounded-[0.625rem]">
            {children}
        </section>
    );
};

export default FormLayout;