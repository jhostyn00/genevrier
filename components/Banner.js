import { Canvas } from '@react-three/fiber';
import { Perfume3 } from './Perfume3';
import { ArrowUpRight } from 'lucide-react';
import { Environment } from '@react-three/drei';

const Banner = () => {
    return (
        <div className="flex flex-col w-screen h-screen pt-8 overflow-hidden text-white bg-black">
            {/* Título ajustable */}
            <div className="font-extrabold text-center text-[20vw] ">
                GENEVRIER
            </div>

            {/* Sección con 3 Canvas */}
            <div className='w-full h-full'>
                
                hola
            
            </div>

            {/* Información de la fórmula */}
            <div className="flex flex-col items-center justify-center w-full gap-4 px-4 py-4">
                {/* Fórmula con divisores */}
                <div className="flex items-center justify-center w-full h-full gap-4">
                    <p className="m-0 text-[3.4vw] text-center flex-1">25% ALCOHOL</p>
                    <div className="w-px h-[4vh] bg-white"></div>
                    <p className="m-0 text-[3.4vw] text-center flex-1">35% FIJADOR</p>
                    <div className="w-px h-[4vh] bg-white"></div>
                    <p className="m-0 text-[3.4vw] text-center flex-1">40% ESCENCIA</p>
                </div>

                {/* Botón centrado */}
                <div className="flex items-center justify-center">
                    <button
                        className="flex items-center justify-center gap-2 px-4 py-2 text-[4vw] font-medium text-white transition-colors duration-200 border border-white hover:bg-white hover:text-black"
                    >
                        CONSULTAR
                        <ArrowUpRight className="w-[4vw] h-[4vw]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
