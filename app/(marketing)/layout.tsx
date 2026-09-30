import type { ReactNode } from "react";
import { ClickTracker } from "@/components/analytics/ClickTracker";
import { Footer } from "@/components/navigation/Footer";
import { Header } from "@/components/navigation/Header";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        {children}
      </main>
      <Footer />
      <ClickTracker />
    </>
  );
}
