import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "success" | "outline" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
}: BadgeProps) {
  const base = "inline-flex items-center font-medium rounded-xs tracking-wider uppercase";

  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
  };

  const variantStyles = {
    default: "bg-stone-100 text-stone-700 border border-stone-200",
    gold: "bg-[#F7F2EB] text-[#8C6D3B] border border-[#E3D4BC]",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    outline: "bg-transparent text-stone-600 border border-stone-300",
    dark: "bg-stone-900 text-stone-200 border border-stone-800",
  };

  return (
    <span
      className={`${base} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
