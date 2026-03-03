import React from 'react';

function PersonalLayout({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col gap-4 md:gap-6">
            {children}
        </div>
    );
}

export default PersonalLayout;