export default function AdminOrdersPage() {
  const orders = [
    {
      id: "ORD001",
      user: "Seller 1",
      product: "Sugar",
      quantity: "2 kg",
      total: "₹160",
      status: "Pending",
    },
  ];

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Order Management
      </h1>

      {orders.map(order => (
        <div
          key={order.id}
          className="border p-4 rounded mb-4"
        >
          <p>Order ID: {order.id}</p>
          <p>User: {order.user}</p>
          <p>Product: {order.product}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Total: {order.total}</p>
          <p>Status: {order.status}</p>

          <div className="flex gap-3 mt-3">
            <button className="bg-green-600 text-white px-3 py-1 rounded">
              Approve
            </button>

            <button className="bg-red-600 text-white px-3 py-1 rounded">
              Reject
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}