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
    | "royal"
    | "aqua"
    | "dark"
    | "outline"
    | "outlineNavy"
    | "outlineCyan"
    | "outlineRoyal"
    | "light"
    | "white"
    | "whatsapp";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "sm",
  variant = "cyan",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-[13px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[14px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[15px] font-bold tracking-wide",
  }[size];

  // Modelo Piscinas Palette: Deep Oceanic Navy (#121F54 / #0D163B), Vibrant Pool Cyan (#00B4F5), Royal Indigo (#2524A8), WhatsApp (#16A34A)
  const variantClasses = {
    cyan:
      "bg-[#00B4F5] hover:bg-[#009BD4] text-[#070D24] font-bold shadow-sm hover:shadow-lg hover:shadow-cyan-400/30 transition-all border border-[#00B4F5] hover:-translate-y-0.5 active:translate-y-0",
    aqua:
      "bg-[#00B4F5] hover:bg-[#009BD4] text-[#070D24] font-bold shadow-sm hover:shadow-lg hover:shadow-cyan-400/30 transition-all border border-[#00B4F5] hover:-translate-y-0.5 active:translate-y-0",
    royal:
      "bg-[#2524A8] hover:bg-[#1E1C8F] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-indigo-600/30 transition-all border border-[#2524A8] hover:-translate-y-0.5 active:translate-y-0",
    primary:
      "bg-[#121F54] hover:bg-[#0D163B] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-blue-950/30 transition-all border border-[#121F54] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#0D163B] hover:bg-[#121F54] text-white font-bold shadow-sm hover:shadow-lg transition-all border border-[#1E3485] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16A34A] hover:bg-[#15803D] text-white font-bold shadow-sm hover:shadow-md hover:shadow-green-600/25 transition-all border border-[#16A34A] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#121F54] hover:border-[#121F54] hover:bg-[#F0F9FF] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineNavy:
      "border border-[#121F54] bg-transparent text-[#121F54] hover:bg-[#121F54] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineCyan:
      "border border-[#00B4F5] bg-transparent text-[#121F54] hover:bg-[#00B4F5] hover:text-[#070D24] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineRoyal:
      "border border-[#2524A8] bg-transparent text-[#2524A8] hover:bg-[#2524A8] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    light:
      "border border-[#BAE6FD] bg-[#F0F9FF] text-[#121F54] hover:bg-[#E0F2FE] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    white:
      "border border-slate-200 bg-white text-[#121F54] hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B4F5] select-none text-center cursor-pointer whitespace-nowrap " +
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
