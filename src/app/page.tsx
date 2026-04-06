import ScrollProgress from "@/components/ScrollProgress";
import RevealObserver from "@/components/RevealObserver";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import Posicionamento from "@/components/sections/Posicionamento";
import Diferenciacao from "@/components/sections/Diferenciacao";
import Compliance from "@/components/sections/Compliance";
import Ecossistema from "@/components/sections/Ecossistema";
import FoundingClients from "@/components/sections/FoundingClients";
import PainelContador from "@/components/sections/PainelContador";
import Roadmap from "@/components/sections/Roadmap";
import Regulatorio from "@/components/sections/Regulatorio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <RevealObserver />
      <Navbar />
      <Hero />
      <Divider />
      <Posicionamento />
      <Divider />
      <Diferenciacao />
      <Divider />
      <Compliance />
      <Divider />
      <Ecossistema />
      <Divider />
      <FoundingClients />
      <Divider />
      <PainelContador />
      <Divider />
      <Roadmap />
      <Divider />
      <Regulatorio />
      <Footer />
    </>
  );
}
