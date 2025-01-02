// pages/_app.js
import "@/styles/globals.css";
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen'; // Importa el LoadingScreen

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
