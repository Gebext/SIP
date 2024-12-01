

export default function AboutSection() {
  return (
    <section className="bg-[#f3f2ee] py-16">
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 items-center gap-12">
 
        <div className="relative w-full h-[300px] lg:h-[400px]">
          <img
            src="/path-to-your-image.jpg" 
            alt="Tentang Samudra Intidaya Perkasa"
       
            className="object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-gray-800">
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6">
            Tentang Samudra Intidaya Perkasa
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            SIP adalah perusahaan profesional independen yang bergerak di bidang
            konsultasi bisnis dan kebijakan publik. Kami mengandalkan informasi,
            data, jaringan, riset, dan analisa terintegrasi yang prediktif, akurat,
            aktual, serta berkualitas sehingga mampu membantu klien mengambil
            keputusan strategis yang menguntungkan.
          </p>
          <p className="text-lg leading-relaxed">
            Dengan didukung sumber daya manusia yang ahli, kredibel, dan
            berpengalaman, kami bisa lebih terukur dan efektif dalam melakukan
            identifikasi masalah, termasuk merumuskan strategi, pemetaan,
            antisipasi serta rekomendasi berbasis pertimbangan rasional dan ilmiah.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 border-t pt-8 text-center">
        <div>
          <h3 className="text-2xl font-serif font-semibold">$30+ billion</h3>
          <p className="text-sm text-gray-600">Assets under administration</p>
        </div>
        <div>
          <h3 className="text-2xl font-serif font-semibold">1K++ Users</h3>
          <p className="text-sm text-gray-600">Client satisfaction</p>
        </div>
        <div>
          <h3 className="text-2xl font-serif font-semibold">4x faster</h3>
          <p className="text-sm text-gray-600">
            Management times than the average
          </p>
        </div>
      </div>
    </section>
  );
}
