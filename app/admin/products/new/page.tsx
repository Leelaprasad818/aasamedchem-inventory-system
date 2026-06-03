"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    description: "",
    baseUnit: "g",
    basePrice: "",
    stockQuantity: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log(data);

    alert("Product Added Successfully");
  }

  return (
    <div className="mx-auto max-w-xl space-y-8 py-10">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-400/5">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Inventory Setup</p>
          <h1 className="text-3xl font-semibold text-slate-900">Add New Product</h1>
          <p className="text-slate-600">Create a new inventory item for your inventory catalog with clear product data.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Product Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                placeholder="Glucose Powder"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="sku" className="block text-sm font-medium text-slate-700">SKU</label>
                <input
                  id="sku"
                  type="text"
                  value={form.sku}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      sku: e.target.value,
                    })
                  }
                  placeholder="SM-001"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="baseUnit" className="block text-sm font-medium text-slate-700">Unit</label>
                <select
                  id="baseUnit"
                  value={form.baseUnit}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      baseUnit: e.target.value,
                    })
                  }
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                >
                  <option>g</option>
                  <option>kg</option>
                  <option>mL</option>
                  <option>L</option>
                  <option>item</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-slate-700">Description</label>
              <textarea
                id="description"
                value={form.description}
                onChange={(e) =>
                  setForm({
                    ...form,
                    description: e.target.value,
                  })
                }
                placeholder="Brief details about the product"
                className="h-28 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="basePrice" className="block text-sm font-medium text-slate-700">Base Price</label>
                <input
                  id="basePrice"
                  type="number"
                  value={form.basePrice}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      basePrice: e.target.value,
                    })
                  }
                  placeholder="250"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="stockQuantity" className="block text-sm font-medium text-slate-700">Stock Quantity</label>
                <input
                  id="stockQuantity"
                  type="number"
                  value={form.stockQuantity}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      stockQuantity: e.target.value,
                    })
                  }
                  placeholder="120"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center rounded-3xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Save Product
          </button>
        </form>
      </div>
    </div>
  );
}