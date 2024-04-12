// import Navbar from "@/components/navbar/page";
import HeroSection from "@/components/hero-section/page";
import ClientSection from "@/components/client-section/page";
import FeatureComponent from "@/components/features-component/page";


export default function Home() {
  return (
  <div className="home">
      <HeroSection/>
      <ClientSection/>
      <FeatureComponent/>
  </div>
  );
}
