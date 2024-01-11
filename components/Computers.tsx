import { PerspectiveCamera, RenderTexture, useGLTF, Text, Sphere, Cylinder } from "@react-three/drei"
import { use, useContext, useEffect, useMemo, useRef, useState } from "react"
import { MeshBasicMaterial, MeshPhysicalMaterial, Vector3 } from "three"
import { GroupProps, useFrame } from "@react-three/fiber"
import gsap from "gsap"
import { AudioAnalyzerContext } from "./Contexts/AudioAnalyzerContext"
import { useStore } from "@/app/store"
import { SpinningBox } from "./SpinningBox"

export function ComputerInteractive({ ...props }: GroupProps) {
    const [power, setPower] = useState(false)
    const audioRef = useRef<any>(new Audio('/music/retrobg.mp3'));
    const clickSound = useRef(new Audio('/sounds/button-click.mp3'));
    const { connectAudioSource, initAudioContext, scaleValue } = useContext(AudioAnalyzerContext);
    const { setExperienceEnabled, experienceEnabled } = useStore()
    const [lastExecuted, setLastExecuted] = useState(Date.now());

    const objectRef = useRef<any>(null);
    const objectInitialScale = 0.03;
    const musicVolume = 0.00175


    useEffect(() => {
        audioRef.current.volume = musicVolume;
        audioRef.current.loop = true;
        connectAudioSource(audioRef.current);
    }, [connectAudioSource]);


    useEffect(() => {
        if (objectRef.current) {
            objectRef.current.scale.set(scaleValue, scaleValue, scaleValue,)
        }
    }, [scaleValue])

    function onToggleAudio(state: boolean) {
        clickSound.current.play()
        initAudioContext();
        if (state) {
            audioRef.current.volume = musicVolume;
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                audioRef.current.pause();
            } else {
                audioRef.current.volume = musicVolume;
                audioRef.current.play();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    useEffect(() => {
        if (!audioRef) return
        clickSound.current.volume = 0.25
    }, [audioRef])

    function onPowerButtonPressed() {
        if (!experienceEnabled) return
        audioRef.current.volume = musicVolume;
        clickSound.current.play()
        audioRef.current.pause()
        setPower(!power)
    }

    function startExperience() {
        console.log("[Music by Music Unlimited Pixabay]");
        setPower(true)
        onToggleAudio(true)
        setExperienceEnabled(true)
    }

    return (
        <group {...props}>
            <Screen frame={"Object_206"} panel={"Object_207"}>
                <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
                <color attach="background" args={[power ? '#111111' : 'black']} />
                {power &&
                    <group>
                        <ambientLight intensity={0.2} />
                        <pointLight position={[10, 10, 10]} intensity={0.75} />
                        <pointLight position={[-10, -10, -10]} />
                        <SpinningBox position={[-3.15, 0.75, 0]} scale={0.3} />
                        <group>
                            <Text fontSize={0.1} position={[-3.9, 1.35, -0]} onClick={() => onToggleAudio(true)}>Play</Text>
                            <Text fontSize={0.1} position={[-2.45, 1.35, 0]} onClick={() => onToggleAudio(false)}>Pause</Text>
                        </group>
                    </group>
                }
            </Screen>
            <Led power={power} position={[-0.4, 0.08, 0.21]} />
            <PowerButton onPressed={onPowerButtonPressed} position={[0.45, 0.08, 0.21]} />
            {!experienceEnabled && <Start onStart={startExperience} scale={0.4} position={[0, 0.61, 0]} />}
        </group>
    )
}

type ScreenProps = {
    frame: string
    panel: string
    children: React.ReactNode
} & JSX.IntrinsicElements['group']

function Screen({ frame, panel, children, ...props }: ScreenProps) {
    const { nodes, materials } = useGLTF('/models/computers_1-transformed.glb') as any

    return (
        <group {...props}>
            <mesh castShadow receiveShadow geometry={nodes[frame].geometry} material={new MeshPhysicalMaterial({ color: "white", roughness: 0.8, clearcoat: 0.1 })} />
            <mesh geometry={nodes[panel].geometry}>
                <meshBasicMaterial toneMapped={false}>
                    <RenderTexture width={1024 * 2} height={1024 * 2} attach="map" anisotropy={16}>
                        {children}
                    </RenderTexture>
                </meshBasicMaterial>
            </mesh>
        </group>
    )
}

type LedProps = {
    power: boolean
} & JSX.IntrinsicElements['group']

function Led({ power, ...props }: LedProps) {
    const ledRef = useRef<any>()
    const { nodes } = useGLTF('/models/computers_1-transformed.glb') as any

    useFrame((state) => {
        if (!ledRef) return

        // When power is off the led is blinking reddish and when on it's blinking greenish
        if (!power) {
            ledRef.current.material.color.setRGB(0, 0, 0)
        } else {
            const rand = Math.abs(2 + ledRef.current.position.x)
            const t = Math.round((1 + Math.sin(rand * 10000 + state.clock.elapsedTime * rand)) / 2)
            ledRef.current.material.color.setRGB(0, t * 5, t)
        }
    })
    return (
        <group {...props}>
            <Sphere ref={ledRef} scale={0.01} />
        </group>
    )
}

type ButtonProps = {
    onPressed: () => void
} & JSX.IntrinsicElements['group']

function PowerButton({ onPressed, ...props }: ButtonProps) {
    const ledRef = useRef<any>()
    const { nodes } = useGLTF('/models/computers_1-transformed.glb') as any


    function onPowerButtonPressed() {

        gsap.to(ledRef.current.position, {
            duration: 0.1,
            z: '-=0.01', // Adjust the y position relatively
            yoyo: true,
            repeat: 1
        });
        onPressed();
    }

    return (
        <group {...props}>
            <Cylinder ref={ledRef} rotation={[Math.PI / 2, 0, 0]} onClick={onPowerButtonPressed} material={new MeshPhysicalMaterial({ color: "gray" })} scale={0.04} />
        </group>
    )
}

type StartProps = {
    onStart: () => void
} & JSX.IntrinsicElements['group']

function Start({ onStart, ...props }: StartProps) {
    const ledRef = useRef<any>()
    const { nodes } = useGLTF('/models/computers_1-transformed.glb') as any
    const [visible, setVisible] = useState(true)

    function onStartPressed() {
        onStart && onStart()
        setVisible(false)
    }

    useFrame((state) => {
        if (!ledRef) return
        const rand = Math.abs(2 + ledRef.current.position.x)
        const t = Math.round((1 + Math.sin(rand * 10000 + state.clock.elapsedTime * rand)) / 2)
        ledRef.current.material.color.setRGB(t, t, t)
    })
    return (
        <group {...props} onClick={onStartPressed} visible={visible}>
            {/* <Sphere ref={ledRef} scale={1} /> */}
            <Text ref={ledRef} color={"black"} position={[0, -0.05, 1]} fontSize={0.5} anchorX={"center"} anchorY={"middle"}>START</Text>
        </group>
    )
}
