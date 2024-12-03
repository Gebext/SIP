import { BarChart, BrainCircuit, PieChart } from "lucide-react";
import FeatureCard from "@/components/shared/featurecard";

export default function FokusLayananSection() {
  // Data layanan
  const layananData = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      title: "Riset",
      description:
        "Melakukan riset kualitatif dan kuantitatif secara komprehensif dengan didukung data yang valid sehingga membantu klien dalam memecahkan kompleksitas dan akar masalah yang dihadapi. Kami melakukan kajian, penelitian dan memberikan layanan di bidang kebijakan publik, ekonomi bisnis dan sosial yang membantu mengidentifikasi masalah, merumuskan strategi kebijakan yang akurat dan memberikan solusi yang tepat dalam pengambilan keputusan secara efektif dan rasional mencerahkan.",
    },
    {
      icon: <PieChart className="h-6 w-6 text-primary" />,
      title: "Rekomendasi dan Formulasi Strategis",
      description:
        "Dengan didukung para ahli di bidangnya masing-masing, kami memberikan rekomendasi strategis yang berbasiskan integrasi data dan informasi sehingga membantu klien dalam menentukan keputusan strategis yang lebih baik. Klien akan lebih mudah merumuskan pembuatan kebijakan yang akurat, tepat waktu dan berkualitas serta membantu agar proses tahapannya lebih terukur, mulai dari perencanaan, pemantauan, analis data dan fase evaluasinya.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Data dan Analisis",
      description:
        "Berbasiskan jaringan yang luas, kami dapat memperoleh data dan informasi akurat saat melakukan pemetaan kebutuhan dan tantangan klien. Sekmen ini termasuk survei pasar, survei opini publik, survei perilaku yang diperlukan di lapangan. Dengan pendekatan kajian ilmian, klien akan dimudahkan saat hendak mengetahui potensi dan keunggulannya sehingga target klien bisa lebih terukur.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "AdMove/Advokasi",
      description:
        "Kami juga turut serta membuka kesempatan kerjasama dengan berbagai stakeholder untuk mendorong terwujudnya berbagai isu strategis yang berkontribusi terhadap peningkatan kualitas keadaban dan kepentingan publik, yang mempercepat terciptanya kesejahteraan dan keadilan sosial melalui program-program yang menyentuh akar rumput dalam bentuk grassroots activation maupun pemetaan lapangan.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Text Section */}
        <div className="space-y-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Fokus Layanan
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium animi cupiditate fugit?
            </p>
          </div>

          <div className="relative">
          <img
              src="/andrew-neel-ute2XAFQU2I-unsplash.jpg" // Use the relative path from the public folder
              alt="Person working on laptop"
              className="object-cover rounded-lg max-h-[680px]"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          {layananData.map((layanan, index) => (
            <FeatureCard
              key={index}
              icon={layanan.icon}
              title={layanan.title}
              description={layanan.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
