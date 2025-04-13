import AboutUs from "@/containers/homepage/AboutUs";
import HeroBanner from "@/containers/homepage/HeroBanner";
import Services from "@/containers/homepage/Services";

export default function Home() {
  return (
    <div className="space-y-20">
      <HeroBanner />
      <Services />
      <AboutUs />
    </div>
  );
}
