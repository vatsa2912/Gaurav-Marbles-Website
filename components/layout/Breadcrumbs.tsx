import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbsSchema } from "@/components/seo/SchemaData";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Home", url: "/" }, ...items];

  return (
    <>
      <BreadcrumbsSchema items={allItems} />
      <nav aria-label="Breadcrumb" className="py-3 text-xs text-stone-500 font-sans-clean">
        <ol className="flex items-center space-x-2 flex-wrap">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400 mx-1.5 shrink-0" />
                )}
                {index === 0 && (
                  <Link
                    href="/"
                    className="hover:text-stone-900 transition-colors flex items-center mr-1"
                    aria-label="Home"
                  >
                    <Home className="w-3.5 h-3.5" />
                  </Link>
                )}
                {isLast ? (
                  <span className="text-stone-900 font-medium truncate max-w-[200px] sm:max-w-none">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-stone-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
