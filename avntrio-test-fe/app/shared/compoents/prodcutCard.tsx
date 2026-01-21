import React from "react";

export type ProductCardProps = {
  id: number;
  name: string;
  price: number;
};
const ProductCard = (product: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">
        {product.name}
      </h2>
      <p className="text-sm text-gray-500 mb-2">ID: {product.id}</p>
      <span className="text-xl font-bold text-green-600">
        ${product.price.toFixed(2)}
      </span>
    </div>
  );
};

export default ProductCard;
