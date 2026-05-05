import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Undo2 } from "lucide-react";

const pills = [
  { icon: Truck, text: "Same day dispatch" },
  { icon: Undo2, text: "7-day easy returns" },
  { icon: ShieldCheck, text: "100% secure payments" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 px-6 py-14 text-white sm:px-10">
      <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-blue-400/30 blur-3xl" />
      <div className="absolute bottom-4 left-1/2 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative max-w-3xl space-y-6">
        <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
          Mega Summer Sale Live
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Discover premium products at prices you will love.
        </h1>
        <p className="text-lg text-slate-200">
          Built for everyday life: electronics, fashion, home essentials, and more in one modern storefront.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-900">
            Shop Now <ArrowRight size={16} />
          </Link>
          <Link href="/deals" className="rounded-full border border-white/30 px-6 py-3 font-semibold">
            View Deals
          </Link>
        </div>
        <div className="grid gap-2 pt-2 sm:grid-cols-3">
          {pills.map((pill) => (
            <p key={pill.text} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm">
              <pill.icon size={15} /> {pill.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
