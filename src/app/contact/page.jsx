"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <section className="space-y-4">
        <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900">Contact Us</h1>
        <p className="text-slate-600">Need help with products or orders? Our team is available daily.</p>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
          <p>Email: support@techzuno.com</p>
          <p className="mt-2">Phone: +1 800 000 1234</p>
          <p className="mt-2">Hours: Monday to Saturday, 9AM - 8PM</p>
        </div>
      </section>
      <form
        className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <input required className="h-12 w-full rounded-xl border border-slate-300 px-4" placeholder="Your name" />
        <input required type="email" className="h-12 w-full rounded-xl border border-slate-300 px-4" placeholder="Your email" />
        <textarea required className="h-32 w-full rounded-xl border border-slate-300 p-4" placeholder="Your message" />
        <button type="submit" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700">Send Message</button>
        {sent ? <p className="text-sm font-semibold text-green-700">Message sent successfully.</p> : null}
      </form>
    </div>
  );
}
