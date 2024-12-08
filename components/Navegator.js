import { AlignJustify } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Navegator = () => {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-between w-full h-16 px-4 py-2 text-white bg-transparent">
            <div className="flex items-center justify-between w-full mx-auto">
                {/* Logo y Link */}
                <div className="flex items-center space-x-4">
                    <Image src="/logo.png" width={50} height={50} alt="Logo" />
                    <Link href="/" className="text-lg font-semibold text-white hover:text-gray-300">GENEVRIER</Link>
                </div>
                
                {/* Icono de menú */}
                <div> {/* Solo visible en pantallas pequeñas */}
                    <AlignJustify size={30} />
                </div>
            </div>
        </div>
    );
}

export default Navegator;