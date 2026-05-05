import Link from "next/link";
import { ProductGrid } from "@/components/product/product-grid";
import { FeatureStrip } from "@/components/sections/feature-strip";
import { Hero } from "@/components/sections/hero";
import { Newsletter } from "@/components/sections/newsletter";
import { SectionTitle } from "@/components/ui/section-title";
import { categories, dealsOfTheDay, featuredProducts } from "@/data/products";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <Hero />
      <FeatureStrip />

      <section>
        <SectionTitle
          eyebrow="Categories"
          title="Shop by category"
          description="Quickly discover what you need from curated product groups."
          action={
            <Link href="/categories" className="text-sm font-semibold text-blue-600 hover:text-blue-800">
              View all categories
            </Link>
          }
        />
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category}
              href="/categories"
              className="rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Featured"
          title="Trending products"
          description="Most loved products from top brands and in-house picks."
          action={<Link href="/shop" className="text-sm font-semibold text-blue-600">Explore catalog</Link>}
        />
        <ProductGrid products={featuredProducts} />
      </section>

      <section>
        <SectionTitle
          eyebrow="Deals"
          title="Best offers today"
          description="Grab these discounted products before stock runs out."
          action={<Link href="/deals" className="text-sm font-semibold text-blue-600">See all deals</Link>}
        />
        <ProductGrid products={dealsOfTheDay} />
      </section>

      <Newsletter />
    </div>
  );
}
