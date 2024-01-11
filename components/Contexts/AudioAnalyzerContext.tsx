import React, { createContext, useState, useEffect, useRef, FC } from 'react';

interface AudioAnalyzerContextType {
    dataArray: Uint8Array | null;
    scaleValue: number;
    updateDataArray: () => void;
    connectAudioSource: (audioSource: HTMLAudioElement) => void,
    initAudioContext: () => void,
}

export const AudioAnalyzerContext = createContext<AudioAnalyzerContextType>({
    dataArray: null,
    scaleValue: 0,
    updateDataArray: () => { },
    connectAudioSource: (audioSource: HTMLAudioElement) => { },
    initAudioContext: () => { },
});

export const AudioAnalyzerProvider = ({ children }: { children: React.ReactNode }) => {
    const [dataArray, setDataArray] = useState<Uint8Array | null>(null);
    const audioContext = useRef<AudioContext | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const audioSourceRef = useRef<MediaElementAudioSourceNode | null>(null);
    const [scaleValue, setScaleValue] = useState<number>(0); // New state for scale value


    const initAudioContext = () => {
        if (!audioContext.current) {
            const newAudioContext = new AudioContext();
            audioContext.current = newAudioContext;

            // Create an AnalyserNode
            const analyser = newAudioContext.createAnalyser();
            analyser.fftSize = 32;
            analyserRef.current = analyser;
        }
    };

    const connectAudioSource = (audioElement: HTMLAudioElement) => {
        if (audioContext.current && !audioSourceRef.current) {
            audioSourceRef.current = audioContext.current.createMediaElementSource(audioElement);
        }
        if (audioSourceRef.current && analyserRef.current) {
            audioSourceRef.current.connect(analyserRef.current);
            if (audioContext.current) analyserRef.current.connect(audioContext.current.destination);
        }
    };

    const lastUpdateTime = useRef<number>(performance.now()); // Track the last update time

    const updateDataArray = () => {
        const currentTime = performance.now();
        const timeElapsed = currentTime - lastUpdateTime.current; // Time elapsed in milliseconds

        if (analyserRef.current) {
            const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
            analyserRef.current.getByteFrequencyData(dataArray);
            setDataArray(dataArray);

            // Normalize the scale value calculation
            const averageFrequency = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
            const newScaleValue = (averageFrequency / 16) * (timeElapsed / 1000); // Normalize based on time elapsed
            setScaleValue(newScaleValue);

            lastUpdateTime.current = currentTime; // Update the last update time
        }
    };

    return (
        <AudioAnalyzerContext.Provider value={{ dataArray, updateDataArray, connectAudioSource, initAudioContext, scaleValue }}>
            {children}
        </AudioAnalyzerContext.Provider>
    );
};
