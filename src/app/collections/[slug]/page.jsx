import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product/product-grid";
import { collections } from "@/data/collections";
import { products } from "@/data/products";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export default async function CollectionDetailPage({ params }) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);

  if (!collection) notFound();

  const items = products.filter((product) => collection.productSlugs.includes(product.slug));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900">{collection.name}</h1>
        <p className="mt-2 text-slate-600">{collection.description}</p>
      </div>
      <ProductGrid products={items} />
    </div>
  );
}
