/* models/interface.ts */

export interface Municipality {
    id: string;
    district_name: string;
    name: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    // ...quaisquer outros campos retornados pela API DEISI Shop
  }