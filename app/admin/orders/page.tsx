async function getOrders() {
  const res = await fetch(
    "http://localhost:3000/api/orders",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function AdminOrdersPage() {
  const orders = await getOrders();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Order Management
      </h1>

      {orders.length === 0 ? (
        <p>No Orders Found</p>
      ) : (
        orders.map((order: any) => (
          <div
            key={order.id}
            className="border p-4 rounded mb-4"
          >
            <p>
              <strong>Order ID:</strong>{" "}
              {order.id}
            </p>

            <p>
              <strong>Total:</strong> ₹
              {order.totalAmount}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {order.status}
            </p>

            <p>
              <strong>Created:</strong>{" "}
              {new Date(
                order.createdAt
              ).toLocaleString()}
            </p>

            <div className="flex gap-3 mt-3">
              <button className="bg-green-600 text-white px-3 py-1 rounded">
                Approve
              </button>

              <button className="bg-red-600 text-white px-3 py-1 rounded">
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}