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
    | "gold"
    | "royal"
    | "navy"
    | "ice"
    | "dark"
    | "whatsapp"
    | "outline"
    | "outlineRoyal"
    | "outlineNavy"
    | "outlineGold"
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

  // FRIOMAX Brand Palette:
  // Royal Cobalt (#0047FF / #012B8E), Imperial Gold (#F59E0B / #FACC15), Deep Navy (#07152B), Ice Surface (#EFF6FF), WhatsApp (#16A34A)
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#0047FF] to-[#012B8E] hover:from-[#0036CC] hover:to-[#001D66] text-white font-bold shadow-md hover:shadow-lg hover:shadow-blue-600/35 transition-all border border-blue-500/30 hover:-translate-y-0.5 active:translate-y-0",
    royal:
      "bg-[#012B8E] hover:bg-[#001D66] text-white font-bold shadow-md hover:shadow-lg hover:shadow-blue-900/35 transition-all border border-[#012B8E] hover:-translate-y-0.5 active:translate-y-0",
    gold:
      "bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#D97706] hover:from-[#EAB308] hover:to-[#B45309] text-[#07152B] font-extrabold shadow-md hover:shadow-lg hover:shadow-amber-500/35 transition-all border border-amber-300 hover:-translate-y-0.5 active:translate-y-0",
    navy:
      "bg-[#07152B] hover:bg-[#030A17] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-blue-950/40 transition-all border border-slate-700/60 hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#0B1E3F] hover:bg-[#07152B] text-white font-bold shadow-sm hover:shadow-lg transition-all border border-blue-900 hover:-translate-y-0.5 active:translate-y-0",
    ice:
      "bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#012B8E] font-bold shadow-xs hover:shadow-md transition-all border border-[#BFDBFE] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16A34A] hover:bg-[#15803D] text-white font-bold shadow-md hover:shadow-lg hover:shadow-green-600/35 transition-all border border-[#16A34A] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#0047FF] hover:border-[#0047FF] hover:bg-[#EFF6FF] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineRoyal:
      "border-2 border-[#0047FF] bg-transparent text-[#0047FF] hover:bg-[#0047FF] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-bold",
    outlineNavy:
      "border-2 border-[#07152B] bg-transparent text-[#07152B] hover:bg-[#07152B] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-bold",
    outlineGold:
      "border-2 border-[#F59E0B] bg-transparent text-[#D97706] hover:bg-[#F59E0B] hover:text-[#07152B] shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-bold",
    white:
      "border border-slate-200 bg-white text-[#07152B] hover:text-[#0047FF] hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-bold",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0047FF] select-none text-center cursor-pointer whitespace-nowrap " +
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
