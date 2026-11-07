"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?:
    | "primary"
    | "cyan"
    | "navy"
    | "ice"
    | "dark"
    | "whatsapp"
    | "outline"
    | "outlineCyan"
    | "outlineNavy"
    | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "sm",
  variant = "primary",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-[13px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[14px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[15px] font-bold tracking-wide",
  }[size];

  // ISOMINAS Brand Palette:
  // Cyan (#0088E0), Electric Ice (#00A3FF), Deep Navy (#0A1C38), Ice Surface (#EBF5FE), WhatsApp (#16A34A)
  const variantClasses = {
    primary:
      "bg-[#0088E0] hover:bg-[#0070BA] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-sky-500/30 transition-all border border-[#0088E0] hover:-translate-y-0.5 active:translate-y-0",
    cyan:
      "bg-[#00A3FF] hover:bg-[#0088E0] text-white font-black shadow-sm hover:shadow-lg hover:shadow-sky-400/35 transition-all border border-[#0090E8] hover:-translate-y-0.5 active:translate-y-0",
    navy:
      "bg-[#0A1C38] hover:bg-[#051329] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-blue-950/30 transition-all border border-[#0A1C38] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#051329] hover:bg-[#020A17] text-white font-bold shadow-sm hover:shadow-lg transition-all border border-[#004B99] hover:-translate-y-0.5 active:translate-y-0",
    ice:
      "bg-[#EBF5FE] hover:bg-[#D6ECFD] text-[#0070BA] font-bold shadow-xs hover:shadow-md transition-all border border-[#BAE0FD] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16A34A] hover:bg-[#15803D] text-white font-bold shadow-sm hover:shadow-md hover:shadow-green-600/35 transition-all border border-[#16A34A] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#0088E0] hover:border-[#0088E0] hover:bg-[#F0F8FF] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineCyan:
      "border-2 border-[#0088E0] bg-transparent text-[#0088E0] hover:bg-[#0088E0] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-bold",
    outlineNavy:
      "border-2 border-[#0A1C38] bg-transparent text-[#0A1C38] hover:bg-[#0A1C38] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-bold",
    white:
      "border border-slate-200 bg-white text-[#0A1C38] hover:text-[#0088E0] hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-bold",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0088E0] select-none text-center cursor-pointer whitespace-nowrap " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
