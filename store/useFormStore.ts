import { create } from 'zustand';

interface FormState {
    name: string;
    email: string;
    phoneNumber: string;
    errors: { [key: string]: boolean };
    activePlan: string;
    isYearlyCharge: boolean;
    activeAddOns: number[];
    isConfirmed: boolean;
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPhoneNumber: (phoneNumber: string) => void;
    setErrors: (errors: { [key: string]: boolean }) => void;
    setActivePlan: (activePlan: string) => void;
    setIsYearlyCharge: (isYearlyCharge: boolean) => void;
    setActiveAddOns: (activeAddOns: number[]) => void;
    toggleAddOn: (addOnId: number) => void;
    setIsConfirmed: (isConfirmed: boolean) => void;
}

export const useFormStore = create<FormState>((set) => ({
    name: '',
    email: '',
    phoneNumber: '',
    errors: {},
    activePlan: 'Arcade',
    isYearlyCharge: false,
    activeAddOns: [],
    isConfirmed: false,
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
    setErrors: (errors) => set({ errors }),
    setActivePlan: (activePlan) => set({ activePlan}),
    setIsYearlyCharge: (isYearlyCharge) => set({ isYearlyCharge }),
    setActiveAddOns: (activeAddOns) => set({ activeAddOns }),
    setIsConfirmed: (isConfirmed) => set({ isConfirmed }),
    toggleAddOn: (addOnId) => set((state) => {
        if (state.activeAddOns.includes(addOnId)) {
            return { activeAddOns: state.activeAddOns.filter(id => id !== addOnId) };
        } else {
            return { activeAddOns: [...state.activeAddOns, addOnId] };
        }
    }),
}));