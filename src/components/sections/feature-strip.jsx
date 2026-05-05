import { BadgePercent, Headset, ShieldCheck, Truck } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Delivery", desc: "On all orders above $99" },
  { icon: BadgePercent, title: "Daily Discounts", desc: "Exclusive flash and combo deals" },
  { icon: ShieldCheck, title: "Safe Payments", desc: "Cards, UPI, net banking, wallets" },
  { icon: Headset, title: "Live Support", desc: "24/7 help for orders and products" },
];

export function FeatureStrip() {
  return (
    <section className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-2 xl:grid-cols-4">
      {features.map((item) => (
        <article key={item.title} className="flex items-start gap-3">
          <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
            <item.icon size={18} />
          </div>
          <div>
            <p className="font-semibold text-slate-900">{item.title}</p>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
