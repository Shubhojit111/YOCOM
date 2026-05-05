"use client";

import { useState } from "react";
import { useStore } from "@/context/store-context";

export default function CheckoutPage() {
  const [placed, setPlaced] = useState(false);
  const { clearCart } = useStore();

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <section className="space-y-6">
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">Secure Checkout</h1>
        <form
          className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6"
          onSubmit={(event) => {
            event.preventDefault();
            clearCart();
            setPlaced(true);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input required className="h-12 rounded-xl border border-slate-300 px-4" placeholder="First Name" />
            <input required className="h-12 rounded-xl border border-slate-300 px-4" placeholder="Last Name" />
          </div>
          <input required className="h-12 w-full rounded-xl border border-slate-300 px-4" placeholder="Email" />
          <input required className="h-12 w-full rounded-xl border border-slate-300 px-4" placeholder="Address" />
          <div className="grid gap-4 sm:grid-cols-3">
            <input required className="h-12 rounded-xl border border-slate-300 px-4" placeholder="City" />
            <input required className="h-12 rounded-xl border border-slate-300 px-4" placeholder="State" />
            <input required className="h-12 rounded-xl border border-slate-300 px-4" placeholder="Zip Code" />
          </div>
          <button type="submit" className="h-12 rounded-full bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700">
            Place Order
          </button>
        </form>
        {placed ? <p className="text-sm font-semibold text-green-700">Order placed successfully. Thank you for shopping!</p> : null}
      </section>
      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-lg font-semibold text-slate-900">Payment options</p>
        <p className="mt-2 text-sm text-slate-600">
          Visa, Mastercard, UPI, wallets and net banking supported in this frontend-ready checkout layout.
        </p>
      </aside>
    </div>
  );
}
