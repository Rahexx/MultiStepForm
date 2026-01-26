import React from 'react';

function PersonalLayout({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col gap-4">
            {children}
        </div>
    );
}

export default PersonalLayout;