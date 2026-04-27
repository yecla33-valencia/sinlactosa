import NavbarLactosa from "@/components/lactosa/NavbarLactosa";
import HeroLactosa from "@/components/lactosa/HeroLactosa";
import FeaturesLactosa from "@/components/lactosa/FeaturesLactosa";
import MenuSectionLactosa from "@/components/lactosa/MenuSectionLactosa";
import FeaturesSecondaryLactosa from "@/components/lactosa/FeaturesSecondaryLactosa";
import InfoSection from "@/components/InfoSection";
import FAQLactosa from "@/components/lactosa/FAQLactosa";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const LactosaFree = () => {
  useEffect(() => {
    document.title = "Hamburguesas sin lactosa en Valencia · Yecla 33";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Hamburguesas sin lactosa en Valencia. Yecla 33, sabor artesanal 100% lactosa free. A domicilio y para llevar.");
  }, []);

  return (
    <div className="min-h-screen">
      <NavbarLactosa />
      <HeroLactosa />
      <FeaturesLactosa />
      <MenuSectionLactosa />
      <FeaturesSecondaryLactosa />
      <InfoSection />
      <FAQLactosa />
      <Footer />
    </div>
  );
};

export default LactosaFree;
