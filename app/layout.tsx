import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "PL&CO",
  description: "Sito istituzionale di PL&CO",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <div className="site-root">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>

        {/* ANALYTICS */}
        <Analytics />

      </body>
    </html>
  );
}
