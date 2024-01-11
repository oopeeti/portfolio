import { create } from 'zustand'

type StoreState = {
    experienceEnabled: boolean;
    setExperienceEnabled: (enabled: boolean) => void;
}

// Creating the Zustand store
export const useStore = create<StoreState>((set, get) => ({
    experienceEnabled: false,
    setExperienceEnabled: (enabled: boolean) => set({ experienceEnabled: enabled }),
}));
