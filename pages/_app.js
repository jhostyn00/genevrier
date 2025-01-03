// pages/_app.js
import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen'; 
import { Tangerine } from 'next/font/google';// Importa el LoadingScreen


const gwendolyn = Tangerine({
    subsets: ['latin'], // Subconjunto necesario
    weight: ['400', '700'], // Pesos disponibles: regular (400) y bold (700)
    style: ['normal'], // Solo estilo normal está disponible
    variable: '--font-gwendolyn', // Variable CSS para usar la fuente
});

export default function App({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); // Duración de la carga de 4 segundos

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && <LoadingScreen />}
            <Component {...pageProps} />
        </>
    );
}
