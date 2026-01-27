import { create } from 'zustand';

interface FormState {
    name: string;
    email: string;
    phoneNumber: string;
    errors: { [key: string]: boolean };
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPhoneNumber: (phoneNumber: string) => void;
    setErrors: (errors: { [key: string]: boolean }) => void;
}

export const useFormStore = create<FormState>((set) => ({
    name: '',
    email: '',
    phoneNumber: '',
    errors: {},
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
    setErrors: (errors) => set({ errors }),
}));