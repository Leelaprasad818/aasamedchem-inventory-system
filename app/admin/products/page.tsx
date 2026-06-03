export default function ProductsPage() {
  const dummyProducts = [
    {
      id: 1,
      name: "Sugar",
      unit: "g",
      price: "0.08",
    },
    {
      id: 2,
      name: "Milk",
      unit: "mL",
      price: "0.05",
    },
  ]

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Products
        </h1>

        <a
          href="/admin/products/new"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Product
        </a>
      </div>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Unit</th>
            <th className="border p-2">Price</th>
          </tr>
        </thead>

        <tbody>
          {dummyProducts.map(product => (
            <tr key={product.id}>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">{product.unit}</td>
              <td className="border p-2">
                ₹ {product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}