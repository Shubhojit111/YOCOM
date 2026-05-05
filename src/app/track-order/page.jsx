"use client";

import { useState } from "react";

export default function TrackOrderPage() {
  const [tracked, setTracked] = useState(false);

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900">Track Your Order</h1>
      <form
        className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
        onSubmit={(event) => {
          event.preventDefault();
          setTracked(true);
        }}
      >
        <input required className="h-12 w-full rounded-xl border border-slate-300 px-4" placeholder="Order ID (e.g. #TZ-1024)" />
        <input required className="h-12 w-full rounded-xl border border-slate-300 px-4" placeholder="Email or Phone" />
        <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700">
          Track Order
        </button>
        {tracked ? <p className="text-sm font-semibold text-green-700">Order found: currently in transit.</p> : null}
      </form>
    </div>
  );
}
