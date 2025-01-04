/* app/products/page.tsx */
'use client';

import React from 'react';
import useSWR from 'swr';
import { Product } from '@/app/models/interfaces';

export default function ProductsPage() {
  // Função que será usada pelo SWR para buscar dados
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // useSWR<tipo>(endpoint, fetcher)
  // Troque '/api/products' pela URL do seu endpoint interno ou externo
  const { data, error, isLoading } = useSWR<Product[]>('/api/products', fetcher);

  // Se houve erro
  if (error) {
    return <div>Ocorreu um erro ao buscar os produtos.</div>;
  }

  // Se ainda estiver carregando
  if (isLoading) {
    return <div>A carregar produtos...</div>;
  }

  // Se não tiver dados
  if (!data || data.length === 0) {
    return <div>Não há produtos disponíveis.</div>;
  }

  // Se deu certo, iteramos pelos produtos
  return (
    <div>
      <h1>Lista de Produtos</h1>
      {data.map((product) => (
        <div key={product.id}>
          {product.title} {/* Aqui você vê só o nome, para testar */}
        </div>
      ))}
    </div>
  );
}