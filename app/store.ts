import { ScrollControlsState } from '@react-three/drei';
import { PositionalAudio } from 'three';
import { create } from 'zustand'

type StoreState = {
    experienceEnabled: boolean;
    setExperienceEnabled: (enabled: boolean) => void;

    musicPlaying: boolean
    setMusicPlaying: (state: boolean) => void;

    scrollState: ScrollControlsState | null;
    setScrollState: (scroll: ScrollControlsState) => void;

    scrollValue: number;
    setScrollValue: (value: number) => void;
}

// Creating the Zustand store
export const useStore = create<StoreState>((set, get) => ({
    experienceEnabled: false,
    setExperienceEnabled: (enabled: boolean) => set({ experienceEnabled: enabled }),

    scrollState: null,
    setScrollState: (scroll: ScrollControlsState) => set({ scrollState: scroll }),

    musicPlaying: false,
    setMusicPlaying: (state: boolean) => set({ musicPlaying: state }),

    scrollValue: 0,
    setScrollValue: (value: number) => set({ scrollValue: value }),
}));
