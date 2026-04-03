import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Divider } from "@/components/ui/Divider";
import { SectionPosicionamento } from "@/components/sections/SectionPosicionamento";
import { SectionDiferenciacao } from "@/components/sections/SectionDiferenciacao";
import { SectionCompliance } from "@/components/sections/SectionCompliance";
import { SectionEcossistema } from "@/components/sections/SectionEcossistema";
import { SectionFoundingClients } from "@/components/sections/SectionFoundingClients";
import { SectionPainelContador } from "@/components/sections/SectionPainelContador";
import { SectionRoadmap } from "@/components/sections/SectionRoadmap";
import { SectionRegulatorio } from "@/components/sections/SectionRegulatorio";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Divider />
        <SectionPosicionamento />
        <Divider />
        <SectionDiferenciacao />
        <Divider />
        <SectionCompliance />
        <Divider />
        <SectionEcossistema />
        <Divider />
        <SectionFoundingClients />
        <Divider />
        <SectionPainelContador />
        <Divider />
        <SectionRoadmap />
        <Divider />
        <SectionRegulatorio />
      </main>
      <Footer />
    </>
  );
}
