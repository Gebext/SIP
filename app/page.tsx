import AboutSection from "./about/page";
import Hero from "@/components/shared/hero";
import  FokusLayananSection  from "./fokus-layanan/page";

export default function Home() {
  return (
    <div >
      <Hero/>
      <AboutSection/>
      <FokusLayananSection/>
    </div>
  );
}
