async function getProducts() {
  const res = await fetch(
    "http://localhost:3000/api/products",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-400/5">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Administration</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Product Inventory</h1>
            <p className="mt-2 text-slate-600">Review all inventory items with stock levels, pricing, and SKU insights.</p>
          </div>
          <a
            href="/admin/products/new"
            className="inline-flex items-center justify-center rounded-3xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Add New Product
          </a>
        </div>
      </div>

      <div className="grid gap-4">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">SKU {product.sku}</p>
                <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
              </div>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                {product.baseUnit.toUpperCase()}
              </span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-4">
              <div className="rounded-3xl bg-slate-50 p-4 text-slate-700">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Price</p>
                <p className="mt-2 text-lg font-semibold">₹{product.basePrice}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 text-slate-700">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Stock</p>
                <p className="mt-2 text-lg font-semibold">{product.stockQuantity}</p>
              </div>
              <div className="sm:col-span-2 rounded-3xl bg-slate-50 p-4 text-slate-700">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Description</p>
                <p className="mt-2 text-sm text-slate-600">{product.description || "No description available."}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}