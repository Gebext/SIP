import Hero from "@/components/shared/hero";
import Fokus from "@/components/shared/fokuslayanansection";
import { Sparkle } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="min-h-screen bg-black text-neutral-200 p-8">
        <header className="mb-24">
          <span className="text-neutral-400">/ Introduction</span>
        </header>

        <div className="max-w-6xl">
          <h1 className="text-[#e6ddd5] text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-12 tracking-tight">
            Accelerating Global
            <br />
            Brands
            <span className="inline-flex items-center mx-4">
              <span className="h-px w-12 bg-current" />
              <Sparkle className="w-8 h-8 mx-2 text-[#e6ddd5]" />
            </span>
            Years ahead.
          </h1>

          <p className="text-neutral-400 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            We are a world—class team of industry—leading professionals, who
            constantly push new technology to its limits.
          </p>
        </div>
      </div>
      <Fokus />
    </div>
  );
}
