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
    <div className="space-y-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-400/5">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Product Catalog</h1>
            <p className="mt-2 text-slate-600">Search inventory and build quotations from a clean product listing.</p>
          </div>
          <div className="w-full max-w-sm">
            <label htmlFor="search" className="sr-only">Search Products</label>
            <input
              id="search"
              type="text"
              placeholder="Search Products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product: any) => (
          <div
            key={product.id}
            className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-400/5"
          >
            <div>
              <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
              <p className="mt-2 text-sm text-slate-500">SKU: {product.sku}</p>
            </div>
            <div className="grid gap-2 text-sm text-slate-600">
              <p>Unit: {product.baseUnit}</p>
              <p>Price: ₹{product.basePrice}</p>
            </div>
            <a
              href="/seller/quotation"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Get Quote
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}