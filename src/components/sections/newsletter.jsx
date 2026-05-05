"use client";

import { useState } from "react";

export function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-10 sm:px-10">
      <div className="max-w-2xl space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Newsletter</p>
        <h3 className="text-3xl font-bold tracking-tight text-slate-900">Get exclusive deals directly in your inbox</h3>
        <p className="text-slate-600">Join 120k+ shoppers getting launch alerts, coupon drops, and curated recommendations.</p>
      </div>
      <form
        className="mt-6 flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          setSubscribed(true);
        }}
      >
        <input type="email" required placeholder="Enter your email address" className="h-12 flex-1 rounded-full border border-blue-200 bg-white px-5 outline-none ring-blue-500 placeholder:text-slate-400 focus:ring-2" />
        <button type="submit" className="h-12 rounded-full bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700">
          Subscribe
        </button>
      </form>
      {subscribed ? <p className="mt-3 text-sm font-semibold text-green-700">You are subscribed successfully.</p> : null}
    </section>
  );
}
