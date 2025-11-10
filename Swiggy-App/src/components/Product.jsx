import React from "react";

export default function Product({ item }) {
  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} className="rounded-lg mb-3" />
      <h2 className="text-xl font-semibold mb-1">{item.name}</h2>
      <p className="text-gray-700 mb-2">₹ {item.price}</p>

      <button className="bg-orange-500 text-white w-full py-2 rounded-lg hover:bg-orange-600">
        Add to Cart
      </button>
    </div>
  );
}
