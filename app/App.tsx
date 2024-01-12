"use client"

import { Loader, PerformanceMonitor, PositionalAudio, Preload, Scroll, ScrollControls, useHelper, useScroll } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Computers } from "@/components/Computers"
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import Path from "@/components/Path"
import Stars from "@/components/Stars"
import { PointLightHelper } from "three"
import { Suspense, useEffect, useRef, useState } from "react"
import { useSpring, animated } from '@react-spring/three'
import Hero from "@/components/Pages/Hero"
import Links from "@/components/Html/Links"
import ExperienceCarousel from "@/components/Carousels/ExperienceCarousel"
import ProjectsCarousel from "@/components/Carousels/ProjectsCarousel"
import { useStore } from "./store"
import Avatar from "@/components/Avatar"
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"

type SceneProps = {
    onScrollChange: (value: number) => void
}

const Scene = ({ onScrollChange }: SceneProps) => {
    const scroll = useScroll();
    const cameraLightRef = useRef<any>()
    const screenLightRef = useRef<any>()
    const { camera } = useThree()
    const { setScrollState, experienceEnabled, musicPlaying, setMusicPlaying, setScrollValue } = useStore()
    const positionalAudioRef = useRef<any>();
    const volume = 0.01;

    useEffect(() => {
        if (!positionalAudioRef.current) return;
        console.log("[Music by Music Unlimited Pixabay]");
        setVolume(volume)
    }, [positionalAudioRef])

    useEffect(() => {
        if (!positionalAudioRef.current) return;
        if (musicPlaying) {
            positionalAudioRef.current.play();
        } else {
            positionalAudioRef.current.pause();
        }
    }, [musicPlaying])

    useEffect(() => {
        if (!experienceEnabled) return;
        positionalAudioRef.current.play();
        setMusicPlaying(true)
    }, [experienceEnabled, setMusicPlaying])

    function setVolume(volume: number) {
        if (!positionalAudioRef.current) return;
        positionalAudioRef.current.setVolume(volume);
        console.log("Volume set to: ", volume);
    }

    const cameraSpring = useSpring({
        y: scroll.offset > 0.9 ? 0.05 : 0,
        config: { tension: 170, friction: 26 },
    });

    useEffect(() => {
        setScrollState(scroll)
    }, [scroll, setScrollState])

    // useHelper(directionalLightRef, DirectionalLightHelper, 0.1)
    useHelper(cameraLightRef, PointLightHelper, 0.05)
    // useHelper(screenLightRef, PointLightHelper, 0.1)

    useFrame((state) => {
        state.camera.position.z = 1.1 - scroll.offset * 1.4;
        state.camera.lookAt(0, 0.25 * scroll.offset, -0.9)
        onScrollChange(scroll.offset)
        if (!cameraLightRef.current) return
        cameraLightRef.current.position.z = 1.2 - scroll.offset * 1.25
    })


    return (
        <group>
            <ambientLight intensity={0.15} />
            <pointLight position={[0, 0.2, 0]} intensity={0.01} castShadow ref={cameraLightRef} />
            <animated.group>
                <primitive object={camera} {...cameraSpring} />
            </animated.group>
            <Stars />
            <EffectComposer>
                <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={1} intensity={0.2} />
                {/* <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} /> */}
                <Noise opacity={0.1} />
            </EffectComposer>
            <group>
                <PositionalAudio
                    url="/music/retrobg.mp3"
                    distance={1}
                    loop
                    ref={positionalAudioRef}
                />
                <Path scale={1} />
                <Computers position={[0, 0.005, -0.9]} scale={0.4} />
                <Avatar position={[0, -0.5, -2]} scale={0.9} />
                <pointLight ref={screenLightRef} position={[0, 0.24, -0.55]} intensity={0.2} />
            </group>
        </group>
    )
}

const App = () => {
    const { experienceEnabled, setMusicPlaying, scrollState, scrollValue } = useStore()
    const [dpr, setDpr] = useState<number>(1)
    const [showScrollDownGuide, setShowScrollDownGuide] = useState<boolean>(true)

    function onScrollChanged(value: number) {
        if (value < 0.05) {
            setShowScrollDownGuide(true)
        } else {
            setShowScrollDownGuide(false)
        }
    }

    useEffect(() => {
        if (!experienceEnabled) return;
        setMusicPlaying(true)
    }, [experienceEnabled])

    useEffect(() => {
        const handleVisibilityChange = () => {
            setMusicPlaying(!document.hidden)
        }

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    })

    const ScrollDownGuide = () => {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
                className="absolute bottom-10 lg:bottom-24 left-1/2 -translate-x-1/2 ">
                <ChevronDoubleDownIcon className="animate-bounce w-10 h-10 text-white" />
            </motion.div>
        )
    }

    return (
        <Suspense fallback={null}>
            <div className="w-screen h-screen">
                <Canvas shadows flat dpr={dpr} camera={{ position: [0, 0.1, 1], fov: 60, near: 0.001, far: 100 }}>
                    <ScrollControls damping={0.1} pages={4.25} distance={1} enabled={experienceEnabled} >
                        <Suspense fallback={null}>
                            <Scene onScrollChange={onScrollChanged} />
                        </Suspense>
                        <Scroll html>
                            <div className="w-screen h-screen flex items-center justify-center pt-40">
                                {experienceEnabled && <Hero />}
                            </div>
                            <div className="flex flex-col h-full gap-36">
                                <div className="w-screen flex items-center justify-center">
                                    <ExperienceCarousel showNavigation={true} />
                                </div >
                                <div className="w-screen flex items-center justify-center">
                                    <ProjectsCarousel showNavigation={true} />
                                </div>
                            </div>

                        </Scroll>
                    </ScrollControls>
                    {/* <CameraControls /> */}
                    <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)} />
                    <Preload all />
                </Canvas >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white flex flex-row justify-center items-center gap-5 px-3 rounded-full mt-5">
                    <Links />
                </div>
                {experienceEnabled && showScrollDownGuide && <ScrollDownGuide />}

            </div >
            <Loader />
        </Suspense>
    )
}

export default App
