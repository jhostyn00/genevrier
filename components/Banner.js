import { Canvas } from '@react-three/fiber';
import { Perfume2 } from './Perfume2';

const Banner = () => {
    return (
        <div className="flex flex-col w-screen min-h-screen pt-16 text-white bg-black">
            {/* Título ajustable */}
            <div className="font-extrabold text-center text-[20vw] ">
                GENEVRIER
            </div>

            {/* Sección del Canvas ajustable */}
            <div className="flex items-center justify-center flex-grow w-full h-full">
                <Canvas camera={{ position: [0, 0, 10], fov: 80 }}>
                    <ambientLight intensity={0.9} />
                    <directionalLight position={[5, 5, 5]} />
                    <Perfume2 />
                </Canvas>
            </div>

            {/* Información de la fórmula */}
            <div className="flex items-center justify-between h-10 px-6">
                <p className="m-0 text-base">40% ESCENCIA</p>
                <div className="w-px h-full bg-white"></div>
                <p className="m-0 text-base">35% FIJADOR</p>
                <div className="w-px h-full bg-white"></div>
                <p className="m-0 text-base">25% ALCOHOL</p>
            </div>
        </div>

    );
};

export default Banner;
