import Image from 'next/image';

interface TechCardProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

export default function TechCard({ title, image, description, rating }: TechCardProps) {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <Image src={image} alt={title} width={100} height={100} className="mx-auto" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-yellow-500">⭐ {rating}/5</p>
    </div>
  );
}
