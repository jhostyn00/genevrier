// components/LoadingScreen.js
import React, { useEffect, useState } from 'react';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); // 4 segundos de espera

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-silver-200 to-gray-300">
                {/* Contenedor con efecto de animación */}
                <div className="relative w-36 h-36 lg:w-48 lg:h-48">
                    {/* Círculos pulsantes con animación de expansión */}
                    <div className="absolute inset-0 delay-1000 border-8 border-white rounded-full opacity-50 animate-pulse"></div>
                    <div className="absolute inset-0 border-8 border-gray-400 rounded-full opacity-50 animate-pulse delay-2000"></div>
                    <div className="absolute inset-0 border-8 rounded-full opacity-50 border-silver-600 animate-pulse delay-3000"></div>

                    {/* Efecto de rotación con el borde */}
                    <div className="absolute inset-0 w-full h-full border-4 border-transparent rounded-full animate-spin-slow border-t-white"></div>

                    {/* Efecto de expansión de círculos */}
                    <div className="absolute inset-0 border-4 border-gray-300 rounded-full animate-expand"></div>
                </div>
            </div>
        );
    }

    return null;
};

export default LoadingScreen;
