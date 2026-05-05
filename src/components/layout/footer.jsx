import Link from "next/link";

const footerCols = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/deals", label: "Deals" },
      { href: "/categories", label: "Categories" },
      { href: "/brands", label: "Brands" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/account", label: "My Account" },
      { href: "/wishlist", label: "Wishlist" },
      { href: "/cart", label: "Cart" },
      { href: "/track-order", label: "Track Order" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact Us" },
      { href: "/faq", label: "FAQ" },
      { href: "/policies/shipping", label: "Shipping" },
      { href: "/policies/returns", label: "Returns" },
      { href: "/policies/privacy", label: "Privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-2xl font-black text-white">YOCOM</p>
          <p className="mt-3 text-sm text-slate-400">
            Modern shopping experience inspired by top marketplaces.
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title} className="space-y-2 text-sm">
            <p className="font-semibold text-white">{col.title}</p>
            {col.links.map((link) => (
              <Link key={link.href} href={link.href} className="block text-slate-400 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} YOCOM. All rights reserved.
      </div>
    </footer>
  );
}
