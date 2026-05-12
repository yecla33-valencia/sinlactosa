import NavbarLactosa from "@/components/lactosa/NavbarLactosa";
import HeroLactosa from "@/components/lactosa/HeroLactosa";
import FeaturesLactosa from "@/components/lactosa/FeaturesLactosa";
import MenuSectionLactosa from "@/components/lactosa/MenuSectionLactosa";
import FeaturesSecondaryLactosa from "@/components/lactosa/FeaturesSecondaryLactosa";
import InfoSectionLactosa from "@/components/lactosa/InfoSectionLactosa";
import FAQLactosa from "@/components/lactosa/FAQLactosa";
import AlergenosLactosa from "@/components/lactosa/AlergenosLactosa";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const LactosaFree = () => {
  useEffect(() => {
    document.title = "Hamburguesas sin lactosa en Valencia · Yecla 33";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Hamburguesas sin lactosa en Valencia. Yecla 33, sabor artesanal 100% lactose free. A domicilio y para llevar.");
  }, []);

  return (
    <div className="min-h-screen">
      <NavbarLactosa />
      <HeroLactosa />
      <FeaturesLactosa />
      <MenuSectionLactosa />
      <FeaturesSecondaryLactosa />
      <InfoSectionLactosa />
      <AlergenosLactosa />
      <FAQLactosa />
      <Footer />
    </div>
  );
};

export default LactosaFree;
