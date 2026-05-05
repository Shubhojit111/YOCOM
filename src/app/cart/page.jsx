"use client";

import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import { useStore } from "@/context/store-context";

export default function CartPage() {
  const { cartProducts, updateQuantity, removeFromCart, clearCart } = useStore();
  const subtotal = cartProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = cartProducts.length ? 10 : 0;

  return (
    <div className="space-y-8">
      <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900">Your Cart</h1>
      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-4">
          {cartProducts.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
              Your cart is empty. Add products from the shop.
            </div>
          ) : null}
          {cartProducts.map((item) => (
            <article key={item.productId} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
              <div>
                <p className="font-semibold text-slate-900">{item.product.name}</p>
                <p className="text-sm text-slate-500">{item.product.category}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                    className="rounded border border-slate-300 px-2"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                    className="rounded border border-slate-300 px-2"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.productId)}
                    className="ml-3 text-xs font-semibold text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="font-semibold text-slate-900">{formatCurrency(item.product.price * item.quantity)}</p>
            </article>
          ))}
        </div>
        <aside className="h-fit space-y-4 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-lg font-semibold text-slate-900">Order Summary</p>
          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{formatCurrency(shipping)}</span></div>
          </div>
          <div className="flex justify-between border-t border-slate-200 pt-3 font-semibold text-slate-900">
            <span>Total</span><span>{formatCurrency(subtotal + shipping)}</span>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="block w-full rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-700 hover:bg-slate-100"
          >
            Clear Cart
          </button>
          <Link href="/checkout" className="block rounded-full bg-slate-900 px-6 py-3 text-center font-semibold text-white hover:bg-slate-700">
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </div>
  );
}
