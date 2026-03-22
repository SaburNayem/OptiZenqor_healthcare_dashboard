import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const sourceSans = Source_Sans_3({ variable: "--font-source-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OptiZenqor Healthcare Dashboard",
  description: "Multi-role healthcare control center with safety-first UX.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sourceSans.variable} h-full`}>
      <body className="min-h-full bg-[var(--surface-primary)] text-[var(--text-strong)] antialiased">{children}</body>
    </html>
  );
}
