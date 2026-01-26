import React, { useState } from 'react';

interface LabeledInputProps {
    value: string;
    onBlur: () => void;
    hasError: boolean;
    type: string;
    label: string;
    placeholder?: string;
}

function LabeledInput({ value: initialValue, onBlur, hasError, type, label, placeholder = ''}: LabeledInputProps) {
    const [value, setValue] = useState(initialValue);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <label className="text-blue-950 text-xs font-semibold leading-[120%]">
                    {label}
                </label>
                {hasError && (
                    <span className="text-red-500 text-sm leading-[120%] tracking-wider">
                        This field is required
                    </span>
                )}
            </div>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
                placeholder={placeholder}
                className={`bg-white border rounded px-4 py-2 text-sm leading-[150%] placeholder:text-gray-500 placeholder:font-medium hover:cursor-pointer focus:outline-none focus:border-2 ${
                    hasError ? 'border-red-500' : 'border-purple-200 focus:border-purple-600'
                }`}
            />
        </div>
    );
}

export default LabeledInput;