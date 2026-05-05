import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export function SiteShell({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}
