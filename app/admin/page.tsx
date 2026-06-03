export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid gap-4">

        <a
          href="/admin/products"
          className="border p-4 rounded shadow"
        >
          📦 Manage Products
        </a>

        <a
          href="/admin/products/new"
          className="border p-4 rounded shadow"
        >
          ➕ Add Product
        </a>

        <a
          href="/admin/orders"
          className="border p-4 rounded shadow"
        >
          📋 Manage Orders
        </a>

      </div>
    </div>
  );
}