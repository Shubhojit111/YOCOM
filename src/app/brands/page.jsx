const brands = ["Apple", "Samsung", "Sony", "JBL", "Nike", "Adidas", "Ikea", "Philips", "Bose", "Asus", "Acer", "Lenovo"];

export default function BrandsPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900">Top Brands</h1>
      <p className="text-slate-600">Shop products from trusted global and local brands.</p>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {brands.map((brand) => (
          <div key={brand} className="rounded-xl border border-slate-200 bg-white p-5 text-center font-semibold text-slate-700">
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}
