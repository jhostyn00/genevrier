import { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";

const Navegator = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [textColor, setTextColor] = useState("text-white"); // Color del texto por defecto es negro
  let lastScrollY = 0;

  const toggleMenu = () => {
    if (!menuOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(".fullscreen-menu", {
        duration: 0.5,
        x: 0,
        opacity: 1,
        ease: "power3.out",
      });
    } else {
      document.body.style.overflow = "";
      gsap.to(".fullscreen-menu", {
        duration: 0.5,
        x: "100%",
        opacity: 0,
        ease: "power3.in",
      });
    }
    setMenuOpen(!menuOpen);
  };

  // Observador de intersección para el Banner
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Si el Banner está visible, cambiar el color del texto a blanco
            if (entry.target.id === "banner") {
              setTextColor("text-white");
            }
          } else {
            // Si el Banner no está visible, volver el color del texto a negro
            if (entry.target.id === "banner") {
              setTextColor("text-black");
            }
          }
        });
      },
      { threshold: 0 } // Se activa cuando cualquier parte del componente está visible
    );

    const bannerComponent = document.querySelector("#banner");

    // Observar el Banner
    if (bannerComponent) observer.observe(bannerComponent);

    // Limpiar observer al desmontar el componente
    return () => {
      if (bannerComponent) observer.unobserve(bannerComponent);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && lastScrollY <= window.scrollY) {
        gsap.to(".navbar", { y: "-100%", opacity: 0, duration: 0.3 });
        setIsVisible(false);
      } else if (window.scrollY < 100 || lastScrollY > window.scrollY) {
        gsap.to(".navbar", { y: "0%", opacity: 1, duration: 0.3 });
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navegador */}
      <div
        className={`navbar fixed top-0 left-0 z-40 flex items-center justify-between w-screen h-16 px-4 py-2 ${textColor} bg-transparent ${
          isVisible ? "" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo y Link */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={1010}
              height={1191}
              alt="Logo"
              className="w-auto h-12"
            />
            <Link href="/" className="text-xl titulo hover:text-gray-300">
              GENEVRIER
            </Link>
          </div>

          {/* Icono de menú */}
          <div onClick={toggleMenu} className="cursor-pointer">
            <AlignJustify className="size-8" />
          </div>
        </div>
      </div>

      {/* Menú de pantalla completa */}
      <div
        className="fixed top-0 right-0 z-50 flex items-center justify-around w-screen h-screen min-h-screen p-6 translate-x-full opacity-0 max-sm:flex-col fullscreen-menu bg-gradient-to-br from-black via-gray-800 to-gray-900"
        style={{ transition: "opacity 0.5s ease" }}
      >
        <div className="absolute cursor-pointer top-4 right-4" onClick={toggleMenu}>
          <X className="text-white size-8" />
        </div>

        <ul className="flex flex-col gap-10 text-5xl text-white">
          <li className="mb-4">
            <a href="#banner" onClick={toggleMenu}>
              Inicio
            </a>
          </li>
          <li className="mb-4">
            <a href="#perfumes" onClick={toggleMenu}>
              Perfumes
            </a>
          </li>
          <li className="mb-4">
            <a href="#bestChoice" onClick={toggleMenu}>
              Sobre nosotros
            </a>
          </li>
          <li className="mb-4">
            <a href="#footer" onClick={toggleMenu}>
              Contacto
            </a>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-center gap-5">
            <div className="text-6xl font-bold text-white titulo">GENEVRIER</div>
            <Image src="/logo.png" width={1010} height={1191} alt="Logo" className="w-auto h-32" />
        </div>
      </div>
    </div>
  );
};

export default Navegator;
