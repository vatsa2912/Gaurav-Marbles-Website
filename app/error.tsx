"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#FDFCF7] font-sans-clean text-center">
      <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 border border-red-200 flex items-center justify-center mb-6">
        <AlertCircle className="w-8 h-8" />
      </div>

      <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900">
        Something Went Wrong
      </h1>

      <p className="text-stone-600 text-xs sm:text-sm mt-2 max-w-md leading-relaxed">
        We encountered an unexpected issue while loading this page. Please try refreshing or return to the main showroom page.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={() => reset()}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-100 py-3 px-6 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Try Again</span>
        </button>

        <Link
          href="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 py-3 px-6 text-xs font-semibold uppercase tracking-wider rounded-xs border border-stone-300 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
