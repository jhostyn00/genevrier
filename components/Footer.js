import { useState } from "react";

export default function Footer() {
  // Estados para controlar las secciones
  const [showSobreNosotros, setShowSobreNosotros] = useState(false);
  const [showProximamente, setShowProximamente] = useState(false);

  return (
    <footer className="w-full px-4 py-8 text-white bg-black">
      <div className="mb-6 text-5xl font-bold text-center titulo">
        GENEVRIER
      </div>



      {/* Sección Sobre Nosotros */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between mb-2 text-lg font-semibold cursor-pointer footo"
          onClick={() => setShowSobreNosotros(!showSobreNosotros)}
        >
          Sobre nosotros
          <span className="text-3xl text-white">{showSobreNosotros ? "−" : "+"}</span>
        </div>
        {showSobreNosotros && (
          <p className="text-sm foot">
            En Genevrier, creamos fragancias alternativas inspiradas en las grandes casas de lujo. Ofrecemos perfumes sofisticados y exclusivos para quienes buscan elegancia y autenticidad.
          </p>
        )}
        <div className="mt-4 border-t border-white"></div>
      </div>

      {/* Sección Próximamente */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between mb-2 text-lg font-semibold cursor-pointer footo"
          onClick={() => setShowProximamente(!showProximamente)}
        >
          Próximamente
          <span className="text-3xl text-white">{showProximamente ? "−" : "+"}</span>
        </div>
        {showProximamente && (
          <p className="text-sm foot">Nuevas colecciones y sorpresas.</p>
        )}
        <div className="mt-4 border-t border-white"></div>
      </div>

      {/* Sección Contacto */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold footo">Contáctanos:</h3>
        <ul className="space-y-2 text-sm foot">
          <li className="foot">WhatsApp: +51 925 743 244</li>
        </ul>
        <div className="mt-4 border-t border-white"></div>
      </div>

      {/* Flecha hacia arriba */}
      <div className="mb-4 text-center">
        <button className="text-3xl text-white">↑</button>
      </div>

      {/* Ubicación */}
      <div className="text-sm text-center">
        Lima - Perú
      </div>
    </footer>
  );
}
