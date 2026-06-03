export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="border p-4 rounded">
          Products
        </div>

        <div className="border p-4 rounded">
          Orders
        </div>

        <div className="border p-4 rounded">
          Inventory
        </div>
      </div>
    </div>
  )
}