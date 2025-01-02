/* /components/MunicipalityCard/MunicipalityCard.tsx */

import React from 'react';
import { Municipality } from '@/app/models/interfaces';

export default function MunicipalityCard({ id, district_name, name }: Municipality) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '4px', padding: '8px' }}>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Distrito: {district_name}</p>
    </div>
  );
}