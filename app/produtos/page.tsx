'use client';
import useSWR from 'swr';
import ProductCard from '@/app/components/ProductCard';
import Card from '@/app/components/Card/card';

export default function ProductsPage() {
    const fetcher = (url: string) => fetch(url).then(res => res.json());
    const { data, error, isLoading } = useSWR('/api/products', fetcher);

    if (error) return <div>Erro ao carregar os produtos.</div>;
    if (isLoading) return <div>Carregando produtos...</div>;

    // Adicione este log para inspecionar o que está sendo retornado
    console.log('Data retornada pela API:', data);

    if (!data || !Array.isArray(data)) {
        return <div>Não há produtos disponíveis ou os dados não estão no formato esperado.</div>;
    }

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((product) => (
                <Card
                    key={product.id}
                    name={product.title} // Atualize conforme o atributo correto
                    price={product.price}
                    description={product.description}
                    image={product.image}
                />
            ))}
        </div>
    );
}
