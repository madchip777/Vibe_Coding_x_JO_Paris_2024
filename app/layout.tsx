import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibe Coding x JO Paris 2024",
  description: "Vibe coded web site for ynov e-learnings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
