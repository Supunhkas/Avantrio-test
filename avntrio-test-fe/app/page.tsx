"use client";
import { useEffect, useState } from "react";
import ProductCard, { ProductCardProps } from "./shared/compoents/prodcutCard";

export default function Home() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    async function loadData() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/products/all`,
      );
      const data = await response.json();
      setProducts(data);
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
          Products
        </h1>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
