import { PerspectiveCamera, RenderTexture, useGLTF, Text, Sphere, Cylinder, Merged } from "@react-three/drei"
import { useEffect, useMemo, useRef, useState } from "react"
import { MeshPhysicalMaterial } from "three"
import { GroupProps, context, useFrame, useThree } from "@react-three/fiber"
import gsap from "gsap"
import { useStore } from "@/app/store"
import { SpinningObject } from "./SpinningObject"

export function Computers({ ...props }: GroupProps) {
    const { setExperienceEnabled, experienceEnabled } = useStore()
    return (
        <group {...props}>
            <InteractiveComputer frame="Object_206" panel="Object_207" />
            {/* <TextComputer text={"Hello World"} frame="Object_212" panel="Object_213" x={-5} y={5} position={[-2.73, 2, 1]} rotation={[-0.1, 1.09, 0]} textRotation={[0, 0, 0]} /> */}
            <Keyboard position={[3, -2, -0.52]} rotation={[-0.1, 1.09, 0]} scale={0.5} />
            {!experienceEnabled && <Start onStart={() => setExperienceEnabled(true)} scale={0.4} position={[0, 0.61, 0]} />}
        </group>
    )
}

type ComputerProps = {
    frame: string
    panel: string
} & JSX.IntrinsicElements['group']

const InteractiveComputer = ({ frame, panel }: ComputerProps) => {
    const [power, setPower] = useState(false)
    const clickSound = useRef(new Audio('/sounds/button-click.mp3'));
    const { setMusicPlaying, experienceEnabled } = useStore()
    clickSound.current.volume = 0.2;

    useEffect(() => {
        if (experienceEnabled) {
            setPower(true)
        }
    }, [experienceEnabled])

    function onPowerButtonPressed() {
        clickSound.current.play()
        setPower(!power)
        setMusicPlaying(!power)
    }

    function toggleAudio(state: boolean) {
        clickSound.current.play()
        setMusicPlaying(state)
    }

    return (
        <group>
            <Screen frame={frame} panel={panel}>
                <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
                <color attach="background" args={[power ? '#111111' : 'black']} />
                {power &&
                    <group>
                        <ambientLight intensity={0.2} />
                        <pointLight position={[10, 10, 10]} intensity={0.75} />
                        <pointLight position={[-10, -10, -10]} />
                        <SpinningObject position={[-3.15, 0.75, 0]} scale={0.3} />
                        <group>
                            <Text fontSize={0.1} position={[-3.9, 1.35, -0]} onClick={() => toggleAudio(true)}>Play</Text>
                            <Text fontSize={0.1} position={[-2.45, 1.35, 0]} onClick={() => toggleAudio(false)}>Pause</Text>
                        </group>
                    </group>
                }
            </Screen>
            <Led power={power} position={[-0.4, 0.08, 0.21]} />
            <PowerButton onPressed={onPowerButtonPressed} position={[0.45, 0.08, 0.21]} />
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

type ScreenTextProps = {
    frame: string
    panel: string
    text: string
    x?: number
    y?: number
    textRotation?: number[]
} & JSX.IntrinsicElements['group']

function TextComputer({ x = 0, frame, panel, textRotation = [0, 0, 0], text, y = 1.2, ...props }: ScreenTextProps) {
    const [power, setPower] = useState(false)
    const clickSound = useRef(new Audio('/sounds/button-click.mp3'));
    clickSound.current.volume = 0.2;
    const { camera } = useThree()
    const computerRef = useRef<any>()
    const { experienceEnabled } = useStore()
    const [textColor, setTextColor] = useState<string>("#35c19f")
    const rand = Math.random() * 10000
    const textRef = useRef<any>()

    useEffect(() => {
        setPower(experienceEnabled)
    }, [experienceEnabled])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (computerRef.current) {
            computerRef.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
            computerRef.current.position.y = (5 + Math.cos(t / 2)) / 7

        }
    })

    function onPowerButtonPressed() {
        clickSound.current.play()
        setPower(!power)
    }

    function screenClicked() {
        setTextColor("#" + Math.floor(Math.random() * 16777215).toString(16))
        clickSound.current.play()
    }


    return (
        <group>
            <group ref={computerRef} {...props}>
                <Screen frame={frame} panel={panel} onClick={screenClicked} >
                    <group>
                        <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 15]} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} />
                        <Text position={[-5, 5, 0]} ref={textRef} fontSize={0.3} rotation={[textRotation[0], textRotation[1], textRotation[2]]} letterSpacing={-0.1} color={textColor}>
                            {text}
                        </Text>
                    </group>
                </Screen>
                <Led power={power} position={[-0.4, 0.08, 0.21]} />
                <PowerButton onPressed={onPowerButtonPressed} position={[0.45, 0.08, 0.21]} />
            </group>

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

function Keyboard({ ...props }: GroupProps) {
    const { nodes, materials } = useGLTF('/models/computers_1-transformed.glb') as any
    const computerRef = useRef<any>()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (computerRef.current) {
            computerRef.current.rotation.set(Math.cos(t / 4) / 3, Math.sin(t / 3) / 2, 0.15 + Math.sin(t / 2) / 4)
            computerRef.current.position.z = (5 + Math.cos(t / 2)) / 7

        }
    })

    return (
        <group {...props} ref={computerRef}>
            <mesh castShadow receiveShadow geometry={nodes["Object_4"].geometry} material={materials.Texture} />
        </group>
    )
}