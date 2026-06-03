"use client";

import { useEffect, useState } from "react";

export default function SellerProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(
    (product: any) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Product Catalog
      </h1>

      <input
        type="text"
        placeholder="Search Products..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border p-2 w-full mb-6"
      />

      <div className="grid gap-4">
        {filteredProducts.map((product: any) => (
          <div
            key={product.id}
            className="border p-4 rounded"
          >
            <h2 className="font-bold">
              {product.name}
            </h2>

            <p>SKU: {product.sku}</p>
            <p>Unit: {product.baseUnit}</p>
            <p>Price: ₹{product.basePrice}</p>

            <a
              href="/seller/quotation"
              className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Get Quote
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}