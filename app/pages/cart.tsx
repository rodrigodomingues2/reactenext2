import React, { useEffect, useState } from "react";
import { Product } from "../types/product";

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div>
      <h1>Meu Carrinho</h1>
      <ul>
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <li key={index}>
              {product.title} - €{product.price}
            </li>
          ))
        ) : (
          <p>O carrinho está vazio.</p>
        )}
      </ul>
    </div>
  );
};

export default CartPage;
