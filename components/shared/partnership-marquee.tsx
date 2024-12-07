import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Pertamina from "../../public/partnership/5564019d1058191bb7ea3a4b990f612a.png";
import Telkom from "../../public/partnership/kisspng-logo-brand-telkom-indonesia-sponsor-font-the-partners-maxima-indonesia-5b64d7ae1b3340.8438705715333354701115.png";
import Mandiri from "../../public/partnership/3dd61b75202154e6633ca00512528070.png";
import WonderfulIndonesia from "../../public/partnership/a55098aa4874d3805410909048bf54f5.png";
import KI from "../../public/partnership/f5491bae2d092c2f5c2482e8960bcbcc.png";
import Garuda from "../../public/partnership/98b9358da9ed726a23f48299e0e42e26.png";

interface Sponsor {
  name: string;
  logo: string | StaticImageData;
}

const sponsors: Sponsor[] = [
  {
    name: "Pertamina",
    logo: Pertamina, // Pertamina logo as StaticImageData
  },
  {
    name: "Telkom",
    logo: Telkom, // Path to image file
  },
  {
    name: "Mantle",
    logo: Mandiri, // Path to image file
  },
  {
    name: "IDSG",
    logo: WonderfulIndonesia, // Path to image file
  },
  {
    name: "Kraken",
    logo: KI, // Path to image file
  },
  {
    name: "Morpho",
    logo: Garuda, // Path to image file
  },
];

export default function SponsorMarquee() {
  const t = useTranslations();
  return (
    <div className="bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-white text-2xl md:text-3xl font-light mb-12 text-center">
          {t("partnerAndKlien")}
        </h2>

        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            {/* First Set of Logos */}
            <motion.div
              className="flex gap-16 items-center min-w-full"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex items-center justify-center w-[120px] opacity-60 hover:opacity-100 transition-opacity"
                >
                  {typeof sponsor.logo === "string" ? (
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="w-full h-auto filter grayscale" // Apply grayscale effect here
                    />
                  ) : (
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={120}
                      height={40}
                      className="filter grayscale" // Apply grayscale effect here
                    />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Duplicated Set of Logos */}
            <motion.div
              className="flex gap-16 items-center min-w-full absolute left-full"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {sponsors.map((sponsor) => (
                <div
                  key={`${sponsor.name}-duplicate`}
                  className="flex items-center justify-center w-[120px] opacity-60 hover:opacity-100 transition-opacity"
                >
                  {typeof sponsor.logo === "string" ? (
                    <img
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      className="w-full h-auto filter grayscale" // Apply grayscale effect here
                    />
                  ) : (
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={120}
                      height={40}
                      className="filter grayscale" // Apply grayscale effect here
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
