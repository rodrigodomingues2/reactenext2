/* app/municipalities/page.tsx */

'use client';

import React from 'react';
import useSWR from 'swr';
import { Municipality } from '@/app/models/interfaces';
import MunicipalityCard from '@/app/components/MunicipalityCard/MunicipalityCard';

export default function Municipalities() {
  // Função que o SWR usará para buscar dados (fetcher)
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // useSWR<tipoDoRetorno, tipoDeErro>(endpoint, funçãoFetcher)
  const {
    data: municipalities,
    error,
    isLoading,
  } = useSWR<Municipality[], Error>('/api/municipalities', fetcher);

  // Enquanto carrega...
  if (isLoading) return <div>Loading...</div>;

  // Se deu erro...
  if (error) return <div>Failed to load</div>;

  // Se não houver dados...
  if (!municipalities) return <div>No data available</div>;

  // Se tudo der certo, percorremos a lista de municípios
  return (
    <div>
      <h1>Lista de Municípios</h1>
      {municipalities.map((mun) => (
        <MunicipalityCard
          key={mun.id}
          id={mun.id}
          name={mun.name}
          district_name={mun.district_name}
        />
      ))}
    </div>
  );
}