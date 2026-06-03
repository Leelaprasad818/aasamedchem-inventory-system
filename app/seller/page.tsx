import Link from "next/link";
import { Package, FilePlus, ClipboardList } from "lucide-react";

export default function SellerDashboard() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-400/5">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Seller Portal</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Seller Dashboard</h1>
            <p className="mt-2 max-w-2xl text-slate-600">Browse your product catalog, create quotes, and keep orders moving with a polished workflow.</p>
          </div>
          <Link href="/seller/products" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
            Browse Products
          </Link>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-3">
        <Link href="/seller/products" className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <Package className="h-5 w-5 text-sky-600" />
            <p className="text-lg font-semibold">Product Catalog</p>
          </div>
          <p className="mt-3 text-slate-600">Search and explore inventory with clean product cards.</p>
        </Link>
        <Link href="/seller/quotation" className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <FilePlus className="h-5 w-5 text-sky-600" />
            <p className="text-lg font-semibold">Generate Quotation</p>
          </div>
          <p className="mt-3 text-slate-600">Quickly build quotes with flexible units and pricing preview.</p>
        </Link>
        <Link href="/seller/orders" className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <ClipboardList className="h-5 w-5 text-sky-600" />
            <p className="text-lg font-semibold">My Orders</p>
          </div>
          <p className="mt-3 text-slate-600">View active and past order summaries in a simple layout.</p>
        </Link>
      </div>
    </div>
  );
}