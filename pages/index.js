import Image from "next/image";
import Banner from '../components/Banner'; 
import Navegator from '../components/Navegator'; 
import Frase from "@/components/Frase";
import PerfumesPage from "@/components/PerfumesPage";
import BestChoice from "@/components/BestChoice";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main>
    
      <Banner />
      <Navegator />
      <Frase />
      <PerfumesPage />
      <BestChoice />
      <Footer />

    </main>
  );
}
