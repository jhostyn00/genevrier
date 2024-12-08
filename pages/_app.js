import "@/styles/globals.css";
import { Azeret_Mono } from 'next/font/google';

const azeretMono = Azeret_Mono({
    subsets: ['latin'], // Incluye los caracteres necesarios
    weight: 'variable', // Carga todos los pesos
    style: ['normal', 'italic'], // Carga estilos normal e itálico
    variable: '--font-azeret-mono', // Define una variable CSS para la fuente
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
