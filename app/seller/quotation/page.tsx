"use client";

import { useState } from "react";
import {
  convertToBaseUnit,
  calculatePrice,
} from "@/lib/conversions";

export default function QuotationPage() {
  const products = [
    {
      id: 1,
      name: "Sugar",
      basePrice: 0.08,
    },
    {
      id: 2,
      name: "Milk",
      basePrice: 0.05,
    },
  ];

  const [selectedProduct, setSelectedProduct] =
    useState(products[0]);

  const [quantity, setQuantity] =
    useState(1);

  const [unit, setUnit] =
    useState("kg");

  const converted =
    convertToBaseUnit(
      quantity,
      unit
    );

  const total =
    calculatePrice(
      quantity,
      unit,
      selectedProduct.basePrice
    );

  return (
    <div className="max-w-xl mx-auto mt-10">

      <h1 className="text-3xl font-bold mb-6">
        Generate Quote
      </h1>

      <select
        className="w-full border p-2 mb-4"
        onChange={(e) => {
          const product =
            products.find(
              p =>
                p.id ===
                Number(e.target.value)
            );

          if (product) {
            setSelectedProduct(product);
          }
        }}
      >
        {products.map(product => (
          <option
            key={product.id}
            value={product.id}
          >
            {product.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        value={quantity}
        onChange={(e) =>
          setQuantity(
            Number(e.target.value)
          )
        }
        className="w-full border p-2 mb-4"
      />

      <select
        value={unit}
        onChange={(e) =>
          setUnit(e.target.value)
        }
        className="w-full border p-2 mb-4"
      >
        <option>g</option>
        <option>kg</option>
        <option>mL</option>
        <option>L</option>
      </select>

      <div className="border p-4 rounded">

        <p>
          Product:
          {" "}
          {selectedProduct.name}
        </p>

        <p>
          Converted Quantity:
          {" "}
          {converted}
        </p>

        <p>
          Unit Price:
          {" "}
          ₹
          {selectedProduct.basePrice}
        </p>

        <p>
          Total Price:
          {" "}
          ₹
          {total.toFixed(2)}
        </p>

      </div>

    </div>
  );
}