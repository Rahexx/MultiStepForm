import {create} from 'zustand';

interface StepsState {
    step: number;
    nextStep: () => void;
    prevStep: () => void;
    setStep: (step: number) => void;
}

export const useStepsStore = create<StepsState>((set) => ({
    step: 1,
    nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 4) })),
    prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
    setStep: (step: number) => set(() => ({ step })),
}));