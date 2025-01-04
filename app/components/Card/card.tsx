import Image from 'next/image';

interface CardProps {
    name: string;
    price: number;
    description: string;
    image: string;
}

export default function Card({ name, price, description, image }: CardProps) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
            <div className="relative h-48 w-full">
                <Image 
                    src={image} 
                    alt={name} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
                <p className="text-blue-500 font-bold text-lg mt-2">€{price.toFixed(2)}</p>
            </div>
        </div>
    );
}
