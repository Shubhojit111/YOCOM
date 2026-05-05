import { Inter, Poppins } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { AppProvider } from "@/components/providers/app-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "YOCOM Store",
  description: "Production-style frontend e-commerce built with Next.js and React.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-slate-50 font-sans text-slate-900" suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <AppProvider>
            <SiteShell>{children}</SiteShell>
          </AppProvider>
        </div>
      </body>
    </html>
  );
}
