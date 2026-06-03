export default function SellerDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Seller Dashboard
      </h1>

      <div className="grid gap-4">

        <a
          href="/seller/products"
          className="border p-4 rounded shadow"
        >
          📦 Browse Products
        </a>

        <a
          href="/seller/quotation"
          className="border p-4 rounded shadow"
        >
          💰 Generate Quotation
        </a>

        <a
          href="/seller/orders"
          className="border p-4 rounded shadow"
        >
          🛒 My Orders
        </a>

      </div>
    </div>
  );
}