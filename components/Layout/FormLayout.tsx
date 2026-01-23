import React from "react";

function FormLayout({ children }: { children: React.ReactNode }){
    return (
        <section className="w-[21.4375rem] py-8 px-6 flex flex-col gap-6 bg-white rounded-[0.625rem]">
            {children}
        </section>
    );
};

export default FormLayout;