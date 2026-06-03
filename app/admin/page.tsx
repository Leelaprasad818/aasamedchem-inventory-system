export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="space-y-4">

        <a
          href="/admin/products"
          className="block border p-4 rounded"
        >
          Product Management
        </a>

        <a
          href="/admin/orders"
          className="block border p-4 rounded"
        >
          Orders
        </a>

      </div>
    </div>
  )
}