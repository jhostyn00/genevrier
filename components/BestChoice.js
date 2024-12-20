import Image from 'next/image';

const BestChoice = () => {
  return (
    <div>

        <div>
            Descubre por qué somos tu mejor elección.
        </div>

        <div>
            <Image src="/img/promo/img1.png" alt="bestChoice" width={734} height={387} />
            <div>
                Fragancias cuidadosamente elaboradas para brindarte una experiencia sensorial inolvidable.
            </div>
        </div>
        <div>
            <Image src="/img/promo/img2.png" alt="bestChoice" width={734} height={387} />
            <Image src="/img/promo/img3.png" alt="bestChoice" width={734} height={387} />
            <div>
                Inspiradas en aromas selectos, diseñadas para destacar tu estilo y personalidad.
            </div>
        </div>
        
    </div>
  );
};

export default BestChoice;
