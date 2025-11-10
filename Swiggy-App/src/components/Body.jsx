import React, { useState } from "react";
import Product from "./Product";
import productsData from "./products.json";

export default function Body() {
  const [products] = useState(productsData);

  return (
    <div className="product-grid">
  {products.map((product) => (
    <Product key={product.id} item={product} />
  ))}
</div>

  );
}
