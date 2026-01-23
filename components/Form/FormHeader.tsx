import React from 'react';

interface FormHeaderProps {
    title: string;
    description: string;
}

function FormHeader({ title, description }: FormHeaderProps){
    return (
        <header className="flex flex-col gap-2">
            <h1 className="text-blue-950 font-bold leading-[1.2] text-2xl">
                {title}
            </h1>
            <p className="text-gray-500 text-base leading-[1.5]">
                {description}
            </p>
        </header>
    );
};

export default FormHeader;