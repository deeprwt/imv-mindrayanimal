import type { ProductSpecification } from "@/types/product";

/** Label/value specification list — a stacked layout on mobile, two columns from `sm`. */
export function SpecList({ specs }: { specs: ProductSpecification[] }) {
  return (
    <dl className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {specs.map((spec) => (
        <div key={spec.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-6 sm:px-6">
          <dt className="text-sm font-semibold text-slate-950">{spec.label}</dt>
          <dd className="text-sm leading-relaxed text-slate-600">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}
