import Image from "next/image";
import localFont from "next/font/local";
import Canvas from '../components/Canvas'; // Asegúrate de importar el Slider correctamente

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main>
      <div className="text-amber-950">hello</div>
      <Canvas />
    </main>
  );
}
