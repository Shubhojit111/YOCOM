import Image from "next/image";
import { notFound } from "next/navigation";
import { Shield, Star, Truck } from "lucide-react";
import { products } from "@/data/products";
import { formatCurrency } from "@/lib/utils";
import { ProductActions } from "@/components/product/product-actions";
import { ProductDetails } from "@/components/product/product-details";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | YOCOM`,
    description: `Buy ${product.name} for ${formatCurrency(product.price)}. Top-rated product in ${product.category}.`,
    openGraph: {
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="relative h-[460px] overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <Image 
          src={product.image} 
          alt={product.name} 
          fill 
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover" 
        />
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-blue-600">{product.category}</p>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-slate-900">{product.name}</h1>
          <p className="mt-3 text-slate-600">Top-rated product with premium quality and marketplace-grade support.</p>
        </div>
        <div className="flex items-center gap-2 text-amber-500">
          <Star size={18} fill="currentColor" />
          <span className="font-medium text-slate-700">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-3xl font-bold text-slate-900">{formatCurrency(product.price)}</p>
          {product.oldPrice ? <p className="text-lg text-slate-500 line-through">{formatCurrency(product.oldPrice)}</p> : null}
        </div>
        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 sm:grid-cols-3">
          <p className="flex items-center gap-2"><Truck size={16} /> Fast delivery</p>
          <p className="flex items-center gap-2"><Shield size={16} /> Brand warranty</p>
          <p className="flex items-center gap-2"><Shield size={16} /> Secure checkout</p>
        </div>
        <ProductActions productId={product.id} />
      </div>
    </div>
      <ProductDetails product={product} />
    </>
  );
}
