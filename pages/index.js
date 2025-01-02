import { useEffect } from "react";
import Image from "next/image";
import Banner from '../components/Banner'; 
import Navegator from '../components/Navegator'; 
import Frase from "@/components/Frase";
import PerfumesPage from "@/components/PerfumesPage";
import BestChoice from "@/components/BestChoice";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Hacer scroll hacia la parte superior al cargar la página
    window.scrollTo(0, 0);

    // Eliminar el ancla de la URL al recargar la página
    if (window.location.hash) {
      window.history.pushState("", document.title, window.location.pathname);
    }
  }, []);

  return (
    <main>
      <section id="navegator">
        <Navegator />
      </section>
      <section id="banner">
        <Banner />
      </section>
      <section id="frase">
        <Frase />
      </section>
      <section id="perfumes">
        <PerfumesPage />
      </section>
      <section id="bestChoice">
        <BestChoice />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}
