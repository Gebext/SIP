import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode; // Untuk menerima ikon sebagai prop
  title: string; // Judul dari card
  description: string; // Deskripsi dari card
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="border-none shadow-lg hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground text-[14px]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
