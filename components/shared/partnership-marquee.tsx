import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Marquee from "react-fast-marquee";
import Kominfo from "../../public/partnership/kominfo-removebg-preview.png";
import PupukIndonesia from "../../public/partnership/pupukindonesia.png";
import Inalum from "../../public/partnership/inalum.png";
import Asdp from "../../public/partnership/asdp.png";
import Mandiri from "../../public/partnership/Bank_Mandiri_logo_2016.svg-removebg-preview.png";
import BankBni from "../../public/partnership/BNI_logo.svg-removebg-preview.png";

interface Sponsor {
  name: string;
  logo: StaticImageData;
}

const sponsors: Sponsor[] = [
  { name: "Kominfo", logo: Kominfo },
  { name: "PupukIndonesia", logo: PupukIndonesia },
  { name: "Inalum", logo: Inalum },
  { name: "Asdp", logo: Asdp },
  { name: "Mandiri", logo: Mandiri },
  { name: "BankBni", logo: BankBni },
];

export default function SponsorMarquee() {
  const t = useTranslations();

  return (
    <div className="bg-black py-8 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-8 sm:mb-12 text-center">
          {t("partnerAndKlien")}
        </h2>

        <Marquee
          gradient={true}
          gradientColor="rgb(0, 0, 0)"
          gradientWidth={64}
          speed={40}
          className="overflow-hidden"
        >
          {sponsors.map((sponsor, index) => (
            <SponsorLogo key={`${sponsor.name}-${index}`} sponsor={sponsor} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="flex items-center justify-center w-[200px] sm:w-[300px] h-[100px] sm:h-[100px] mx-4 sm:mx-8">
      <Image
        src={sponsor.logo}
        alt={`${sponsor.name} logo`}
        width={200}
        height={100}
        className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}
