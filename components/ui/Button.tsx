import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-sm gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-sm gap-2",
    lg: "text-base px-7 py-3.5 rounded-sm gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-stone-900 text-stone-100 hover:bg-stone-800 shadow-sm border border-stone-800 hover:border-stone-700",
    secondary:
      "bg-stone-100 text-stone-900 hover:bg-stone-200 border border-stone-300",
    gold:
      "bg-[#C5A880] text-stone-950 font-semibold hover:bg-[#B39366] shadow-sm border border-[#B39366]",
    outline:
      "bg-transparent text-stone-900 border border-stone-400 hover:border-stone-900 hover:bg-stone-900/5",
    ghost:
      "bg-transparent text-stone-700 hover:text-stone-900 hover:bg-stone-200/50",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#20BD5A] font-semibold shadow-sm border border-[#1EAA50]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
