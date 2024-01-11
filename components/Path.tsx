import { GroupProps, useFrame, useLoader } from "@react-three/fiber";
import { useContext, useRef } from "react";
import { MeshPhysicalMaterial, PlaneGeometry, TextureLoader } from "three";
import { AudioAnalyzerContext } from "./Contexts/AudioAnalyzerContext";


const TEXTURE_PATH = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657168/blog/vaporwave-threejs-textures/grid.png";
const DISPLACEMENT_PATH = "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657200/blog/vaporwave-threejs-textures/displacement.png";

const Path = ({ ...props }: GroupProps) => {
    const [gridTexture, terrainTexture] = useLoader(TextureLoader, [TEXTURE_PATH, DISPLACEMENT_PATH]);
    const planeRef = useRef<any>(null);
    const { scaleValue } = useContext(AudioAnalyzerContext);

    const targetDisplacementScale = useRef(0.3); // Initial target value

    return (
        <group {...props}>
            <mesh
                ref={planeRef}
                rotation-x={-Math.PI * 0.5}
                geometry={new PlaneGeometry(1, 2, 24, 24)}
                material={new MeshPhysicalMaterial({
                    color: "yellow",
                    map: gridTexture,
                    displacementMap: terrainTexture,
                    displacementScale: 0.3,
                })}
            />
            {/* <Timeline /> */}
        </group>

    );
};

export default Path;
