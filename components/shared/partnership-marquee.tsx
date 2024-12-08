import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Kominfo from "../../public/partnership/kominfo-removebg-preview.png";
import PupukIndonesia from "../../public/partnership/pupukindonesia.png";
import Inalum from "../../public/partnership/inalum.png";
import Asdp from "../../public/partnership/asdp.png";
import Esdm from "../../public/partnership/isdm.png";

interface Sponsor {
  name: string;
  logo: string | StaticImageData;
}

const sponsors: Sponsor[] = [
  { name: "Kominfo", logo: Kominfo },
  { name: "PupukIndonesia", logo: PupukIndonesia },
  { name: "Inalum", logo: Inalum },
  { name: "ESDM", logo: Esdm },
  { name: "Asdp", logo: Asdp },
];

export default function SponsorMarquee() {
  const t = useTranslations();

  return (
    <div className="bg-black py-8 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-light mb-8 sm:mb-12 text-center">
          {t("partnerAndKlien")}
        </h2>

        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex overflow-hidden relative w-full">
            <motion.div
              className="flex gap-2 md:gap-12 items-center"
              animate={{ x: [0, -100] }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                display: "flex",
                minWidth: "400%", // Double the width for infinite loop
              }}
            >
              {sponsors.map((sponsor, index) => (
                <SponsorLogo
                  key={`${sponsor.name}-${index}`}
                  sponsor={sponsor}
                />
              ))}
              {sponsors.map((sponsor, index) => (
                <SponsorLogo
                  key={`${sponsor.name}-${index}-duplicate`}
                  sponsor={sponsor}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="flex items-center justify-center w-[300px] sm:w-[300px] h-[100px] sm:h-[100px] opacity-80 hover:opacity-100 transition-opacity ">
      <Image
        src={sponsor.logo}
        alt={`${sponsor.name} logo`}
        width={400}
        height={200}
        className="object-contain brightness-0 invert"
      />
    </div>
  );
}
