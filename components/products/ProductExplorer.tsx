"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { RotateCcw, Search, X } from "lucide-react";
import type { ProductSummary } from "@/lib/products";
import type { ClinicalFocus, SubcategorySlug } from "@/types/product";
import { track } from "@/lib/analytics/track";
import { enquiryHref } from "@/lib/enquiry-events";
import { cn } from "@/lib/utils";
import { buttonClasses } from "@/components/ui/Button";
import { ProductCard } from "./ProductCard";

interface Option<T extends string> {
  value: T;
  label: string;
}

interface ProductExplorerProps {
  products: ProductSummary[];
  categories: Option<string>[];
  systemTypes: Option<SubcategorySlug>[];
  focusOptions: Option<ClinicalFocus>[];
  /**
   * Heading level for group titles when products are grouped by system type
   * (unfiltered view). Cards use the next level down; in the filtered flat list
   * cards use this level.
   */
  groupHeading?: "h2" | "h3";
  /** Sync filters to the URL (?type=&focus=&q=) — enable on the dedicated products page. */
  syncUrl?: boolean;
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 shrink-0 snap-start items-center rounded-full border px-3.5 text-sm font-medium transition-colors duration-200 sm:h-10 sm:px-4",
        active
          ? "border-slate-950 bg-slate-950 text-white"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-950",
      )}
    >
      {children}
    </button>
  );
}

export function ProductExplorer({
  products,
  categories,
  systemTypes,
  focusOptions,
  groupHeading = "h3",
  syncUrl = false,
}: ProductExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [systemType, setSystemType] = useState<SubcategorySlug | null>(null);
  const [focus, setFocus] = useState<ClinicalFocus | null>(null);
  const [newOnly, setNewOnly] = useState(false);
  const searchId = useId();
  const searchTimer = useRef<number | undefined>(undefined);

  // Initial filters from the URL (supports deep links from ads, e.g. /products?type=portable-ultrasound).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const f = params.get("focus");
    /* eslint-disable react-hooks/set-state-in-effect -- one-time hydration from the URL */
    if (type && systemTypes.some((o) => o.value === type)) setSystemType(type as SubcategorySlug);
    if (f && focusOptions.some((o) => o.value === f)) setFocus(f as ClinicalFocus);
    if (params.get("q")) setQuery(params.get("q")!.slice(0, 80));
    if (params.get("new") === "1") setNewOnly(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [systemTypes, focusOptions]);

  useEffect(() => {
    if (!syncUrl) return;
    const url = new URL(window.location.href);
    const set = (key: string, value: string | null) => (value ? url.searchParams.set(key, value) : url.searchParams.delete(key));
    set("type", systemType);
    set("focus", focus);
    set("q", query.trim() || null);
    set("new", newOnly ? "1" : null);
    window.history.replaceState(window.history.state, "", url);
  }, [syncUrl, systemType, focus, query, newOnly]);

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return products.filter(
      (p) =>
        (!category || p.categoryName === category) &&
        (!systemType || p.subcategory === systemType) &&
        (!focus || p.focus.includes(focus)) &&
        (!newOnly || p.isNew) &&
        terms.every((t) => p.searchText.includes(t)),
    );
  }, [products, query, category, systemType, focus, newOnly]);

  const filtered = Boolean(query || category || systemType || focus || newOnly);
  const grouped = !filtered && systemTypes.length > 1;

  function reset() {
    setQuery("");
    setCategory(null);
    setSystemType(null);
    setFocus(null);
    setNewOnly(false);
  }

  function onSearch(value: string) {
    setQuery(value);
    window.clearTimeout(searchTimer.current);
    if (value.trim().length >= 2) {
      searchTimer.current = window.setTimeout(() => track("product_search", { search_term: value.trim().slice(0, 80) }), 900);
    }
  }

  function toggle<T extends string>(current: T | null, value: T | null, set: (v: T | null) => void, group: string) {
    const next = current === value ? null : value;
    set(next);
    track("product_filter", { filter_group: group, filter_value: next ?? "all" });
  }

  return (
    <div>
      <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-3 sm:gap-4 sm:p-5">
        <div className="relative">
          <label htmlFor={searchId} className="sr-only">
            Search veterinary products
          </label>
          <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-slate-400" />
          <input
            id={searchId}
            type="search"
            inputMode="search"
            enterKeyHint="search"
            autoComplete="off"
            placeholder="Search veterinary products..."
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            onKeyDown={(e) => {
              // Close the on-screen keyboard so results are visible on phones.
              if (e.key === "Enter") e.currentTarget.blur();
            }}
            className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pr-12 pl-12 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:outline-none sm:h-13 sm:text-[0.9375rem] [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute top-1/2 right-2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200"
              aria-label="Clear search"
            >
              <X aria-hidden="true" className="size-4" />
            </button>
          ) : null}
        </div>

        {/* One swipeable chip row on phones; wraps from `sm` up. */}
        <div className="no-scrollbar -mx-3 flex snap-x items-center gap-2 overflow-x-auto overscroll-x-contain px-3 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {categories.length > 1 ? (
            <div role="group" aria-label="Category" className="flex shrink-0 gap-2 sm:flex-wrap">
              <Chip active={!category} onClick={() => setCategory(null)}>All categories</Chip>
              {categories.map((o) => (
                <Chip key={o.value} active={category === o.value} onClick={() => toggle(category, o.value, setCategory, "category")}>
                  {o.label}
                </Chip>
              ))}
            </div>
          ) : null}

          <div role="group" aria-label="System type" className="flex shrink-0 gap-2 sm:flex-wrap">
            <Chip active={!systemType && !newOnly} onClick={() => { setSystemType(null); setNewOnly(false); }}>
              All
            </Chip>
            {systemTypes.map((o) => (
              <Chip key={o.value} active={systemType === o.value} onClick={() => toggle(systemType, o.value, setSystemType, "system_type")}>
                {o.label.replace(/ Ultrasound$/, "")}
              </Chip>
            ))}
            <Chip active={newOnly} onClick={() => { setNewOnly(!newOnly); track("product_filter", { filter_group: "new", filter_value: String(!newOnly) }); }}>
              New
            </Chip>
          </div>

          <span aria-hidden="true" className="h-6 w-px shrink-0 bg-slate-200" />

          <div role="group" aria-label="Clinical focus" className="flex shrink-0 gap-2 sm:flex-wrap">
            {focusOptions.map((o) => (
              <Chip key={o.value} active={focus === o.value} onClick={() => toggle(focus, o.value, setFocus, "clinical_focus")}>
                {o.label}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 sm:mt-6">
        <p aria-live="polite" className="text-sm text-slate-600">
          Showing <span className="font-semibold text-slate-950">{results.length}</span> of {products.length} systems
        </p>
        {filtered ? (
          <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-brand-700">
            <RotateCcw aria-hidden="true" className="size-3.5" />
            Reset filters
          </button>
        ) : null}
      </div>

      {results.length && grouped ? (
        <div className="mt-6 space-y-10 sm:mt-8 sm:space-y-14">
          {systemTypes.map((type) => {
            const items = results.filter((p) => p.subcategory === type.value);
            if (!items.length) return null;
            const GroupHeading = groupHeading;
            return (
              <div key={type.value}>
                <div className="flex items-baseline justify-between gap-4 border-b border-slate-200 pb-3 sm:pb-4">
                  <GroupHeading className="text-lg font-semibold tracking-tight sm:text-2xl">{type.label}</GroupHeading>
                  <span className="text-sm text-slate-500">
                    {items.length} {items.length === 1 ? "system" : "systems"}
                  </span>
                </div>
                <ul className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                  {items.map((p) => (
                    <li key={p.slug}>
                      <ProductCard product={p} location="explorer" headingLevel={groupHeading === "h2" ? "h3" : "h4"} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : results.length ? (
        <ul className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {results.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} location="explorer" headingLevel={groupHeading} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
          <p className="text-lg font-semibold text-slate-950">No systems match those filters.</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
            Try a broader search, or tell us what you need and a veterinary imaging specialist will recommend a system.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={reset} className={buttonClasses({ variant: "secondary", size: "md" })}>
              Reset filters
            </button>
            <a
              href={enquiryHref("general")}
              data-enquiry="general"
              data-track="cta_click"
              data-track-cta="specialist"
              data-track-location="explorer_empty"
              className={buttonClasses({ size: "md" })}
            >
              Talk to a Specialist
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
