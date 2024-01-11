"use client"

import { Box, Html, Loader, PerformanceMonitor, Preload, Scroll, ScrollControls, useHelper, useScroll } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { ComputerInteractive } from "@/components/Computers"
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'
import Path from "@/components/Path"
import Stars from "@/components/Stars"
import { PointLightHelper } from "three"
import { Suspense, useContext, useRef, useState } from "react"
import { useSpring, animated } from '@react-spring/three'
import Hero from "@/components/Pages/Hero"
import Links from "@/components/Html/Links"
import ExperienceCarousel from "@/components/Carousels/ExperienceCarousel"
import ProjectsCarousel from "@/components/Carousels/ProjectsCarousel"
import { useStore } from "./store"
import { AudioAnalyzerProvider } from "@/components/Contexts/AudioAnalyzerContext"
import { SpinningBox } from "@/components/SpinningBox"

const Scene = () => {
    const scroll = useScroll();
    const directionalLightRef = useRef<any>()
    const cameraLightRef = useRef<any>()
    const screenLightRef = useRef<any>()
    const { camera } = useThree()

    const cameraSpring = useSpring({
        y: scroll.offset > 0.9 ? 0.05 : 0,
        config: { tension: 170, friction: 26 },
    });

    // useHelper(directionalLightRef, DirectionalLightHelper, 0.1)
    useHelper(cameraLightRef, PointLightHelper, 0.05)
    // useHelper(screenLightRef, PointLightHelper, 0.1)

    useFrame((state) => {
        state.camera.position.z = 1.1 - scroll.offset * 1.4;
        state.camera.lookAt(0, 0.25 * scroll.offset, -0.9)

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
                <Path scale={1} />
                <ComputerInteractive position={[0, 0.005, -0.9]} scale={0.4} />
                <pointLight ref={screenLightRef} position={[0, 0.24, -0.55]} intensity={0.2} />
            </group>
        </group>
    )
}

const App = () => {
    const { experienceEnabled } = useStore()
    const [dpr, setDpr] = useState<number>(1.5)
    return (
        <>
            <div className="w-screen h-screen">
                <AudioAnalyzerProvider>
                    <Canvas shadows flat dpr={dpr} camera={{ position: [0, 0.1, 1], fov: 60, near: 0.001, far: 100 }}>
                        <ScrollControls damping={0.5} pages={4} distance={1} enabled={experienceEnabled} >
                            <Suspense fallback={null}>
                                <Scene />
                            </Suspense>
                            <Scroll html>
                                <div className="w-screen h-screen flex items-center justify-center pt-64">
                                    {experienceEnabled && <Hero />}
                                </div>
                                <div className="flex flex-col h-full gap-40">
                                    <div className="w-screen h-screen flex items-center justify-center">
                                        <ExperienceCarousel showNavigation={false} />
                                    </div >
                                    <div className="w-screen h-screen flex items-center justify-center">
                                        <ProjectsCarousel showNavigation={false} />
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
                </AudioAnalyzerProvider >
            </div >
            <Loader />
        </>
    )
}

export default App
