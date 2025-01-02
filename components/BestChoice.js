// components/BestChoice.js
const BestChoice = () => {
    return (
      <section className="relative py-6 overflow-hidden text-black bg-[#ededed]">
        <div className="absolute inset-0 bg-[#ededed]"></div>
        <div className="relative z-10 px-6 mx-auto text-center max-w-7xl">
          <h2 className="mb-16 text-6xl font-extrabold text-black drop-shadow-lg">
            Descubre por qué somos tu mejor elección
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {/* Bloque 1 */}
            <div className="relative group w-96">
              <img
                src="/img/promo/img1.png"
                alt="Calidad Premium"
                className="object-cover w-full transition-transform transform rounded-lg shadow-xl h-72 group-hover:scale-105"
              />
              <p className="px-6 py-3 mt-6 text-2xl font-semibold text-black transition-transform transform rounded-lg shadow-md bg-white/80 backdrop-blur-md group-hover:-translate-y-2">
                Calidad Premium garantizada
              </p>
            </div>
            {/* Bloque 2 */}
            <div className="relative group w-96">
              <img
                src="/img/promo/img2.png"
                alt="Servicio Excepcional"
                className="object-cover w-full transition-transform transform rounded-lg shadow-xl h-72 group-hover:scale-105"
              />
              <p className="px-6 py-3 mt-6 text-2xl font-semibold text-black transition-transform transform rounded-lg shadow-md bg-white/80 backdrop-blur-md group-hover:-translate-y-2">
                Servicio al cliente excepcional
              </p>
            </div>
            {/* Bloque 3 */}
            <div className="relative group w-96">
              <img
                src="/img/promo/img3.png"
                alt="Innovación Continua"
                className="object-cover w-full transition-transform transform rounded-lg shadow-xl h-72 group-hover:scale-105"
              />
              <p className="px-6 py-3 mt-6 text-2xl font-semibold text-black transition-transform transform rounded-lg shadow-md bg-white/80 backdrop-blur-md group-hover:-translate-y-2">
                Innovación en cada detalle
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default BestChoice;
  