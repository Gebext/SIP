interface SectionProps {
    title: string;
    heading: string;
    description: string;
    imageRight: boolean;
  }
  
  export default function EachFokusSection({ title, heading, description, imageRight }: SectionProps) {
    return (
      <section className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div
          className={`relative h-[400px] ${
            imageRight ? "order-2 md:order-2" : "order-2 md:order-1"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-orange-500/20 rounded-lg" />
        </div>
  
        {/* Text Content */}
        <div
          className={`space-y-6 ${
            imageRight ? "order-1 md:order-1" : "order-1 md:order-2"
          }`}
        >
          <h2 className="text-zinc-400 text-lg">{title}</h2>
          <h3 className="text-5xl font-light leading-tight">{heading}</h3>
          <p className="text-zinc-400 text-lg">{description}</p>
        </div>
      </section>
    );
  }