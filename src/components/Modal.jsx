import { useLoader, Canvas } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { MeshStandardMaterial } from "three";
import { OrbitControls } from "@react-three/drei";

const Modal = ({ product }) => {
    const fbx = useLoader(FBXLoader, "./Shower+Base.fbx");
    const colorMap = useLoader(TextureLoader, product.img);

    const materialWithTexture = new MeshStandardMaterial({
        map: colorMap,
        roughness: 0.1,
        metalness: 0.01,
    });

    fbx.children.forEach((mesh) => {
        mesh.material = materialWithTexture;
    });

    return (
        <Canvas className="canvas">
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 0, 2]} intensity={1} />
            <group rotation={[90, 0, 0]}>
                <primitive object={fbx} scale={0.3} position={[0, 0, 0]} />
            </group>
        </Canvas>
    );
}

export default Modal;
