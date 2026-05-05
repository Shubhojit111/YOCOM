export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900">About YOCOM</h1>
      <p className="max-w-3xl text-slate-600">
        YOCOM is a modern marketplace-style storefront focused on quality products, transparent pricing, and fast
        delivery experience.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-2xl font-bold text-slate-900">100k+</p>
          <p className="text-sm text-slate-600">Happy customers</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-2xl font-bold text-slate-900">50+</p>
          <p className="text-sm text-slate-600">Partner brands</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-2xl font-bold text-slate-900">30 days</p>
          <p className="text-sm text-slate-600">Easy returns</p>
        </div>
      </div>
    </div>
  );
}
