import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { GroupProps } from "@react-three/fiber";
import { useStore } from "@/app/store";

type AvatarType = {
} & GroupProps

const Avatar = ({ ...props }: AvatarType) => {
    const groupRef = useRef<any>();
    const { scene, animations } = useGLTF('/models/avatar.glb')
    const { actions } = useAnimations(animations, scene)
    const { musicPlaying } = useStore()

    useEffect(() => {
        if (musicPlaying) {
            actions["Armature|mixamo.com|Layer0"]?.play()
        } else {
            actions["Armature|mixamo.com|Layer0"]?.stop()
        }
    }, [musicPlaying, actions])

    useEffect(() => {
        scene.traverse((object) => {
            object.raycast = () => { };
        });
    }, [scene])

    return (
        <group ref={groupRef} {...props}>
            <primitive object={scene} />
            <pointLight position={[-10, -10, -10]} />
        </group>
    );
}

export default Avatar;
