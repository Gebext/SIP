
import AboutSection from "./about/page";
import NewsSection from "./news-and-update/page";
import Footer from "@/components/shared/footer";
import Hero from "@/components/shared/hero";

export default function Home() {
  return (
    <div >
      <Hero/>
      <AboutSection/>
      <NewsSection  />
      <Footer/>
    </div>
  );
}
