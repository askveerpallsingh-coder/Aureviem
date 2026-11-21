import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aureviem | Tender Intelligence",
  description: "AI-powered government tender discovery, eligibility analysis and bid costing."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}