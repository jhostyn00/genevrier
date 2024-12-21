import Image from 'next/image';

const BestChoice = () => {
  return (
    <div className='w-full'>

        <div className='mt-4 text-xl text-center'>
            Descubre por qué somos tu mejor elección.
        </div>

        <div className='flex flex-wrap w-full gap-6 my-6'>
            <Image 
                src="/img/promo/img1.png" 
                alt="bestChoice" 
                width={734} 
                height={387} 
                className='w-[70%] max-w-[734px] h-auto' 
            />
            <div className='pl-[5%] pr-4 text-end w-full'>
                Fragancias cuidadosamente elaboradas para brindarte una experiencia sensorial inolvidable.
            </div>
        </div>

        <div className='flex flex-wrap w-full gap-6 mb-6'>
            {/* Contenedor relativo para posicionar imágenes */}
            <div className='relative flex justify-end w-full'>
                {/* Imagen principal (img3) */}
                <Image 
                    src="/img/promo/img3.png" 
                    alt="bestChoice" 
                    width={734} 
                    height={387} 
                    className="w-[70%] max-w-[734px] h-auto" 
                />
                {/* Imagen secundaria (img2) en posición absoluta */}
            </div>

            <div className='pr-[5%] pl-4'>
                Inspiradas en aromas selectos, diseñadas para destacar tu estilo y personalidad.
            </div>
        </div>
        
    </div>
  );
};

export default BestChoice;
