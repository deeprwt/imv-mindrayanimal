import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ProductBreadcrumb } from "@/lib/products";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ items, className }: { items: ProductBreadcrumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("no-scrollbar -mx-4 overflow-x-auto px-4", className)}>
      <ol className="flex items-center gap-1.5 text-sm whitespace-nowrap text-slate-500">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 ? <ChevronRight aria-hidden="true" className="size-3.5 text-slate-400" /> : null}
              {last ? (
                <span aria-current="page" className="font-medium text-slate-900">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-slate-900">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
