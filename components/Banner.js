import { Canvas } from '@react-three/fiber';
import { useEffect, useState, Link } from 'react';
import { Model as Perfume1 } from './Perfume1'; 
import { Model as Perfume2 } from './Perfume2'; 
import { Model as Perfume3 } from './Perfume3'; 
import { ArrowUpRight } from 'lucide-react';
import { OrbitControls, Environment } from '@react-three/drei';

const Banner = () => {

    const [positions, setPositions] = useState({
        perfume1: [-1.6, 2, 0],
        perfume2: [1.6, 0.4, 0],
        perfume3: [-0.2, -1.8, 0],
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 700) {
                setPositions({
                    perfume1: [-1.6, 2.4, 0],
                    perfume2: [1.6, 0.8, 0],
                    perfume3: [-0.2, -1.6, 0],
                });
            } else {
                setPositions({
                    perfume1: [-3, 2.4, 0],
                    perfume2: [3, 0.8, 0],
                    perfume3: [0, -1.6, 0],
                });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Trigger on initial render

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        
        <div id='banner' className="relative flex flex-col w-full min-h-screen pt-24 overflow-hidden text-white bg-gradient-to-br from-black via-gray-900 10% to-black">
                <img
                    src="/humo.png"
                    className="absolute top-0 left-0 object-cover w-full h-full pointer-events-none opacity-40"
                    alt="Humo"
                />
            {/* Título ajustable */}
            <div className="text-5xl text-center sm:text-8xl titulo">
                GENEVRIER
            </div>

            {/* Sección con 3 Canvas */}
            <div className="w-full h-[66vh]">
                <Canvas>
                    <Perfume1 position={positions.perfume1} scale={[0.30, 0.30, 0.30]} rotation={[0, 0, Math.PI / -8]} />
                    <Perfume2 position={positions.perfume2} scale={[0.30, 0.30, 0.30]} rotation={[0, 0, Math.PI / 8]} />
                    <Perfume3 position={positions.perfume3} scale={[0.30, 0.30, 0.30]} rotation={[Math.PI / -20, 0, Math.PI / -20]} />
                    <Environment preset="studio" />
                </Canvas>
            </div>

            {/* Contenedor fijo para los porcentajes y el botón */}
            <div className="absolute left-0 right-0 flex flex-col items-center gap-6 px-4 bottom-8">
                {/* Información de la fórmula */}
                <div className="flex items-center justify-center w-full gap-6 lg:gap-8">
                    <p className="m-0 text-[5vw] lg:text-[2.5vw] text-center flex-1">20% ALCOHOL</p>
                    <div className="w-px h-[4vh] bg-white"></div>
                    <p className="m-0 text-[5vw] lg:text-[2.5vw] text-center flex-1">30% FIJADOR</p>
                    <div className="w-px h-[4vh] bg-white"></div>
                    <p className="m-0 text-[5vw] lg:text-[2.5vw] text-center flex-1">50% ESCENCIA</p>
                </div>

                {/* Botón centrado */}
                <div className="flex items-center justify-center">
                    <a
                        href="https://wa.me/51925743244?text=Hola%2C%20quiero%20consultar%20sobre%20tus%20productos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 text-[4vw] lg:text-[2.5vw] font-medium text-white transition-colors duration-200 border border-white hover:bg-white hover:text-black"
                    >
                        CONSULTAR
                        <ArrowUpRight className="w-[4vw] h-[4vw] lg:w-[2.5vw] lg:h-[2.5vw]" />
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Banner;
