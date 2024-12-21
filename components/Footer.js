import { useState } from "react";

export default function Footer() {
  // Estados para controlar las secciones
  const [showFragancias, setShowFragancias] = useState(true);
  const [showSobreNosotros, setShowSobreNosotros] = useState(false);
  const [showProximamente, setShowProximamente] = useState(false);

  return (
    <footer className="w-full px-4 py-8 text-white bg-black">
      <div className="mb-6 text-4xl font-bold text-center ">
        GENEVRIER
      </div>

      {/* Sección Fragancias */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between mb-2 text-lg font-semibold cursor-pointer"
          onClick={() => setShowFragancias(!showFragancias)}
        >
          Fragancias
          <span className="text-white">{showFragancias ? "−" : "+"}</span>
        </div>
        {showFragancias && (
          <ul className="space-y-2 text-sm">
            <li>Todas las fragancias</li>
            <li>Para damas</li>
            <li>Para varones</li>
          </ul>
        )}
        <div className="mt-4 border-t border-white"></div>
      </div>

      {/* Sección Sobre Nosotros */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between mb-2 text-lg font-semibold cursor-pointer"
          onClick={() => setShowSobreNosotros(!showSobreNosotros)}
        >
          Sobre nosotros
          <span className="text-white">{showSobreNosotros ? "−" : "+"}</span>
        </div>
        {showSobreNosotros && (
          <p className="text-sm">
            Información sobre nuestra historia y filosofía.
          </p>
        )}
        <div className="mt-4 border-t border-white"></div>
      </div>

      {/* Sección Próximamente */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between mb-2 text-lg font-semibold cursor-pointer"
          onClick={() => setShowProximamente(!showProximamente)}
        >
          Próximamente
          <span className="text-white">{showProximamente ? "−" : "+"}</span>
        </div>
        {showProximamente && (
          <p className="text-sm">Nuevas colecciones y sorpresas.</p>
        )}
        <div className="mt-4 border-t border-white"></div>
      </div>

      {/* Sección Contacto */}
      <div className="mb-6">
        <h3 className="mb-2 text-lg font-semibold">Contáctanos:</h3>
        <ul className="space-y-2 text-sm">
          <li>WhatsApp</li>
          <li>Instagram</li>
          <li>Correo electrónico</li>
        </ul>
        <div className="mt-4 border-t border-white"></div>
      </div>

      {/* Flecha hacia arriba */}
      <div className="mb-4 text-center">
        <button className="text-2xl text-white">↑</button>
      </div>

      {/* Ubicación */}
      <div className="text-sm text-center">
        Lima - Perú
      </div>
    </footer>
  );
}
