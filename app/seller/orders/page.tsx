"use client";

import { useState } from "react";

export default function OrdersPage() {
  const [message, setMessage] =
    useState("");

  async function placeOrder() {
    const response = await fetch(
      "/api/orders",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
  userId: "admin1",
  totalAmount: 160,
}),
      }
    );

    const data =
      await response.json();

    console.log(data);

    setMessage(
      "Order Placed Successfully"
    );
  }

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Orders
      </h1>

      <button
        onClick={placeOrder}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Place Sample Order
      </button>

      <p className="mt-4">
        {message}
      </p>

    </div>
  );
}