import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AasaMedChem Inventory",
  description: "Modern inventory and order management dashboard for AasaMedChem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-50 text-slate-900">
        <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3 text-slate-900">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-sky-600 to-indigo-600 text-white shadow-lg shadow-sky-500/20">
                A
              </span>
              <div>
                <p className="text-lg font-semibold tracking-tight">AasaMedChem</p>
                <p className="text-sm text-slate-500">Inventory & Orders</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-3 md:flex">
              <Link href="/admin" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                Admin
              </Link>
              <Link href="/seller" className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                Seller
              </Link>
              <Link href="/login" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                Login
              </Link>
            </nav>
          </div>
        </div>

        <main className="flex-1">
          <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
