import Link from "next/link";
import { ArrowRight, Briefcase, ShoppingCart, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-400/5">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">AasaMedChem</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Modern inventory and order management for chemical supplies.
            </h1>
            <p className="max-w-xl text-slate-600 sm:text-lg">
              A streamlined dashboard experience for admins and sellers to manage products, quotations, and order workflows with clarity and confidence.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/admin" className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
                Go to Admin dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/seller" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                Browse Seller tools
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Products</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">120+</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Orders</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">38 Active</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Quotes</p>
              <p className="mt-4 text-3xl font-semibold text-slate-900">7 Pending</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <Briefcase className="h-5 w-5 text-sky-600" />
            <h2 className="text-lg font-semibold">Catalog Management</h2>
          </div>
          <p className="mt-4 text-slate-600">Add, update and organize inventory with clear product cards and metrics.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <ShoppingCart className="h-5 w-5 text-sky-600" />
            <h2 className="text-lg font-semibold">Order Operations</h2>
          </div>
          <p className="mt-4 text-slate-600">Manage order status, review order history, and accelerate fulfillment workflows.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <ShieldCheck className="h-5 w-5 text-sky-600" />
            <h2 className="text-lg font-semibold">Secure Admin Access</h2>
          </div>
          <p className="mt-4 text-slate-600">Role-aware access and simple navigation keep data secure and workflows efficient.</p>
        </div>
      </section>
    </div>
  );
}
