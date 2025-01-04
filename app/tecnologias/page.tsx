'use client';
import tecnologias from '@/app/app/data/tecnologias.json';
import TechCard from '@/app/components/TechCard/techcard';

export default function TecnologiasPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Tecnologias</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tecnologias.map((tech, index) => (
          <TechCard
            key={index}
            title={tech.title}
            image={tech.image}
            description={tech.description}
            rating={tech.rating}
          />
        ))}
      </div>
    </div>
  );
}
