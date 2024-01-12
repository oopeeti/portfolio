import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor } from '@react-three/drei'

type SpinningObjectProps = {
    scale: number
} & JSX.IntrinsicElements['mesh']

export function SpinningObject({ scale, ...props }: SpinningObjectProps) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<any>()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    useCursor(hovered)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={0.4}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <torusGeometry />
            {clicked ? <meshNormalMaterial wireframe /> : <meshNormalMaterial />}
        </mesh>
    )
}
