import { ProfileShell } from "@/components/profile/profile-shell";

const orders = [
  { id: "#TZ-2142", date: "May 02, 2026", status: "Delivered", total: "$129" },
  { id: "#TZ-2048", date: "Apr 20, 2026", status: "Shipped", total: "$449" },
  { id: "#TZ-1993", date: "Apr 08, 2026", status: "Delivered", total: "$89" },
];

export default function ProfileOrdersPage() {
  return (
    <ProfileShell title="My Orders" description="Track and review your latest purchases.">
      <div className="space-y-3">
        {orders.map((order) => (
          <article key={order.id} className="flex flex-wrap items-center justify-between rounded-xl border border-slate-200 p-4">
            <p className="font-semibold text-slate-900">{order.id}</p>
            <p className="text-sm text-slate-600">{order.date}</p>
            <p className="text-sm text-slate-600">{order.status}</p>
            <p className="font-semibold text-slate-900">{order.total}</p>
          </article>
        ))}
      </div>
    </ProfileShell>
  );
}
