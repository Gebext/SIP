
import AboutSection from "./about/page";
import LandingPage from "./fokus-layanan/page";
import NewsSection from "./news-and-update/page";

export default function Home() {
  return (
    <div >
      <LandingPage/>
      <AboutSection/>
      <NewsSection  />
    </div>
  );
}
