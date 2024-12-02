
import AboutSection from "./about/page";
import LandingPage from "./fokus-layanan/page";
import NewsSection from "./news-and-update/page";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <div >
      <LandingPage/>
      <AboutSection/>
      <NewsSection  />
      <Footer/>
    </div>
  );
}
