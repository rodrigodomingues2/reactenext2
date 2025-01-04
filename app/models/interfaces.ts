export interface Product {
  id: number;
  title: string; // Use 'title' em vez de 'name'
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
      rate: number;
      count: number;
  };
}
