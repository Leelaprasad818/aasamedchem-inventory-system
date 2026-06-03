import Link from "next/link";
import { Box, PlusCircle, ClipboardList } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-400/5">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Admin Console</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-900">Admin Dashboard</h1>
            <p className="mt-2 max-w-2xl text-slate-600">Monitor inventory health, manage products, and oversee order progress from one polished dashboard.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/admin/products/new" className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">
              <PlusCircle className="h-4 w-4" /> Add Product
            </Link>
            <Link href="/admin/orders" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              <ClipboardList className="h-4 w-4 text-slate-600" /> View Orders
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <Box className="h-5 w-5 text-sky-600" />
            <div>
              <p className="text-sm font-semibold">Product Inventory</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">120+</p>
            </div>
          </div>
          <p className="mt-4 text-slate-600">Track stock levels and SKU coverage for your chemical inventory.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <ClipboardList className="h-5 w-5 text-sky-600" />
            <div>
              <p className="text-sm font-semibold">Order Workflow</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">38 Active</p>
            </div>
          </div>
          <p className="mt-4 text-slate-600">Approve, reject, and monitor order statuses with confidence.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <ClipboardList className="h-5 w-5 text-sky-600" />
            <div>
              <p className="text-sm font-semibold">Quotations</p>
              <p className="mt-3 text-3xl font-semibold text-slate-900">7 Pending</p>
            </div>
          </div>
          <p className="mt-4 text-slate-600">Review quote requests and respond with accurate pricing quickly.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Link href="/admin/products" className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <Box className="h-5 w-5 text-sky-600" />
            <p className="text-lg font-semibold">Manage Products</p>
          </div>
          <p className="mt-3 text-slate-600">Browse the full product catalog and update item details.</p>
        </Link>
        <Link href="/admin/products/new" className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <PlusCircle className="h-5 w-5 text-sky-600" />
            <p className="text-lg font-semibold">Add New Product</p>
          </div>
          <p className="mt-3 text-slate-600">Create a new inventory item in just a few clicks.</p>
        </Link>
        <Link href="/admin/orders" className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
          <div className="flex items-center gap-3 text-slate-900">
            <ClipboardList className="h-5 w-5 text-sky-600" />
            <p className="text-lg font-semibold">Order Management</p>
          </div>
          <p className="mt-3 text-slate-600">Review incoming orders, update status, and keep your team aligned.</p>
        </Link>
      </div>
    </div>
  );
}