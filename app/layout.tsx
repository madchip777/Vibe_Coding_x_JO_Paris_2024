import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "JO Paris 2024 | Tableau de bord interactif",
  description:
    "Webapp multi-pages sur les Jeux Olympiques de Paris 2024 : écosystème, performances, héritage et innovations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={poppins.variable}>
        <div className="site-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
