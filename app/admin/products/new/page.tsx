export default function NewProductPage() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Add Product
      </h1>

      <form className="space-y-4">

        <input
          placeholder="Product Name"
          className="w-full border p-2"
        />

        <input
          placeholder="SKU"
          className="w-full border p-2"
        />

        <textarea
          placeholder="Description"
          className="w-full border p-2"
        />

        <select className="w-full border p-2">
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
        />

        <input
          type="number"
          placeholder="Stock Quantity"
          className="w-full border p-2"
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Product
        </button>

      </form>
    </div>
  )
}