import { useLoader, Canvas } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { MeshStandardMaterial } from "three";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Modal = ({ product }) => {
    const fbx = useLoader(FBXLoader, "/Shower+Base.fbx");
    const colorMap = product && useLoader(TextureLoader, product.img);

    return (
        <Canvas className="canvas">
            <OrbitControls
             enableZoom={true}
            dampingFactor={0.02} 
             />
            <ambientLight intensity={0.85} />
            <directionalLight position={[20, 500, 2]} intensity={1} />
            <group rotation={[0.5, -0.7, 0]}>
                <Model fbx={fbx} colorMap={colorMap} />
            </group>
        </Canvas>
    );
}

const Model = ({ fbx, colorMap }) => {
    if(colorMap) 
    {
        colorMap.wrapS = THREE.CanvasTexture.DEFAULT_ANISOTROPY_COLORMAP;
        colorMap.wrapT = THREE.CanvasTexture.DEFAULT_ANISOTROPY_COLORMAP;
        colorMap.repeat.set(0.1,0.1); 
    }
        const materialWithTexture = new MeshStandardMaterial({
            map: colorMap,
            roughness: colorMap ? 0.85 : 0.2,
            metalness: colorMap ? 0 : 0.6,
        });

        fbx.children.forEach((mesh) => {
            mesh.material = materialWithTexture;
        });

    return <primitive object={fbx} scale={0.4} position={[0, 0, 0]} />;
}
export default Modal;
