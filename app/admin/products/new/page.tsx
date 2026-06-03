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
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          placeholder="Product Name"
          className="w-full border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="SKU"
          className="w-full border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              sku: e.target.value,
            })
          }
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <select
          className="w-full border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              baseUnit: e.target.value,
            })
          }
        >
          <option>g</option>
          <option>kg</option>
          <option>mL</option>
          <option>L</option>
          <option>item</option>
        </select>

        <input
          type="number"
          placeholder="Base Price"
          className="w-full border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              basePrice: e.target.value,
            })
          }
        />

        <input
          type="number"
          placeholder="Stock Quantity"
          className="w-full border p-2"
          onChange={(e) =>
            setForm({
              ...form,
              stockQuantity: e.target.value,
            })
          }
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}