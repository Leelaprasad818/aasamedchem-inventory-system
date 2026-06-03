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
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      {products.map((product: any) => (
        <div
          key={product.id}
          className="border p-4 rounded mb-4"
        >
          <h2 className="font-bold">
            {product.name}
          </h2>

          <p>SKU: {product.sku}</p>

          <p>Unit: {product.baseUnit}</p>

          <p>
            Price: ₹{product.basePrice}
          </p>

          <p>
            Stock: {product.stockQuantity}
          </p>
        </div>
      ))}
    </div>
  );
}