import { AlignJustify } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

const Navegator = () => {
    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-between w-screen h-auto px-4 py-2 text-white bg-black">
            <div className="flex items-center justify-between w-full">
                {/* Logo y Link */}
                <div className="flex items-center gap-[2vw]">
                    <Image src="/logo.png" width={1010} height={1191} alt="Logo" className='w-auto h-[10vw] ' />
                    <Link href="/" className="text-[4vw] font-semibold text-gray-400 hover:text-gray-300">GENEVRIER</Link>
                </div>
                
                {/* Icono de menú */}
                <div> {/* Solo visible en pantallas pequeñas */}
                    <AlignJustify className='size-[6vw]' />
                </div>
            </div>
        </div>
    );
}

export default Navegator;