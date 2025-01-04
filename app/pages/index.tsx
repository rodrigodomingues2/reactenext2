import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";

const initialProducts: Product[] = [
  { id: 1, title: "Produto 1", description: "Descrição do Produto 1", price: 10, image: "/images/produto1.png" },
  { id: 2, title: "Produto 2", description: "Descrição do Produto 2", price: 20, image: "/images/produto2.png" },
  { id: 3, title: "Produto 3", description: "Descrição do Produto 3", price: 30, image: "/images/produto3.png" },
];

const HomePage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Adiciona um produto ao carrinho
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Salva o carrinho no localStorage sempre que ele for atualizado
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Carrega o carrinho do localStorage ao carregar a página
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        {initialProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <h2>Carrinho</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            {product.title} - €{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
