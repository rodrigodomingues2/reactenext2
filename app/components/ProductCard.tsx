import React from "react";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", margin: "8px" }}>
      <img src={product.image} alt={product.title} style={{ width: "100px" }} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Preço: €{product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductCard;
