import { ClampToEdgeWrapping, FrontSide, MeshBasicMaterial, MeshPhysicalMaterial, RepeatWrapping, TextureLoader, Vector2, VideoTexture } from 'three';
import { useVideoTexture } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useEffect } from 'react';

interface VideoMaterialProps {
    src: string;
    meshWidth: number;
    meshHeight: number;
    opacity?: number;
    zoom?: number;
    offsetX?: number;
    offsetY?: number;
    rotation?: number;
}

export function useVideoMaterial({
    src,
    meshWidth,
    meshHeight,
    opacity = 1,
    zoom = 1,
    offsetX = 0,
    offsetY = 0,
    rotation = Math.PI
}: VideoMaterialProps): MeshPhysicalMaterial {
    const videoTexture = useVideoTexture(src) as VideoTexture;

    if (videoTexture.image) {
        const videoAspectRatio = videoTexture.image.videoWidth / videoTexture.image.videoHeight;
        const meshAspectRatio = meshWidth * 10 / meshHeight;

        if (videoAspectRatio > meshAspectRatio) {
            videoTexture.repeat.set(zoom, zoom * (meshAspectRatio / videoAspectRatio));
        } else {
            videoTexture.repeat.set(zoom * (videoAspectRatio / meshAspectRatio), zoom);
        }

        videoTexture.offset.set(offsetX, offsetY);
        videoTexture.rotation = rotation;
        videoTexture.center.set(0.5, 0.5); // Center the texture
        videoTexture.needsUpdate = true;
    }

    return new MeshPhysicalMaterial({
        roughness: 0,
        clearcoat: 0.5,
        side: FrontSide,
        map: videoTexture,
        toneMapped: true,
        transparent: true,
        opacity
    });
}

interface TextureMaterialProps {
    texturePath: string;
    scale?: Vector2;
    scrollSpeed?: number
    wrapX?: boolean
    wrapY?: boolean
    color?: string
    textureOffset?: Vector2
}

export function useTextureMaterial({ texturePath, scale = new Vector2(1, 1), scrollSpeed = 0, wrapX = false, wrapY = false, color = "white", textureOffset = new Vector2(0, 0) }: TextureMaterialProps) {
    const texture = useLoader(TextureLoader, texturePath);

    useEffect(() => {
        texture.wrapS = wrapX ? RepeatWrapping : ClampToEdgeWrapping;
        texture.wrapT = wrapY ? RepeatWrapping : ClampToEdgeWrapping;
        const offset = new Vector2(0.5 - scale.x / 2, 0.5 - scale.y / 2);
        texture.offset.set(offset.x + textureOffset.x, offset.y + textureOffset.y);
        texture.repeat.set(scale.x, scale.y);
    }, [])

    useEffect(() => {
        if (texture) {
            texture.needsUpdate = true;
        }
    }, [texture]);

    useFrame((_state, delta) => {
        texture.offset.x -= scrollSpeed * delta
    })

    const material = new MeshBasicMaterial({ map: texture, color: color, transparent: true })
    return material;
}
