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
            <OrbitControls enableZoom={true} />
            <ambientLight intensity={0.6} />
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
        colorMap.magFilter = THREE.LinearFilter;
    }
        const materialWithTexture = new MeshStandardMaterial({
            map:colorMap,
            roughness: 0.5,
            metalness: 0.6,
            transparent:true,
            clipIntersection:true,
            stencilWrite:true,
            side: THREE.FrontSide,
            clipShadows:true,
        });

        fbx.children.forEach((mesh) => {
            console.log(mesh.material);
            mesh.material = materialWithTexture;
        });

    return <primitive object={fbx} scale={0.4} position={[0, 0, 0]} />;
}
export default Modal;
