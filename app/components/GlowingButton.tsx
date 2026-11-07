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
    | "navy"
    | "yellow"
    | "ice"
    | "dark"
    | "outline"
    | "outlineNavy"
    | "outlineYellow"
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
  variant = "navy",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-[13px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[14px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[15px] font-bold tracking-wide",
  }[size];

  // Grupo Frio Bel Palette:
  // Navy (#001A78), Electric Yellow (#FDEB01), Ice Blue (#0284C7), Slate (#414954), WhatsApp (#16A34A)
  const variantClasses = {
    primary:
      "bg-[#001A78] hover:bg-[#00124D] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-blue-950/25 transition-all border border-[#001A78] hover:-translate-y-0.5 active:translate-y-0",
    navy:
      "bg-[#001A78] hover:bg-[#00124D] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-blue-950/25 transition-all border border-[#001A78] hover:-translate-y-0.5 active:translate-y-0",
    yellow:
      "bg-[#FDEB01] hover:bg-[#E5D300] text-[#001A78] font-black shadow-sm hover:shadow-lg hover:shadow-yellow-500/30 transition-all border border-[#E5D300] hover:-translate-y-0.5 active:translate-y-0",
    ice:
      "bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-sky-500/25 transition-all border border-[#0284C7] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#00124D] hover:bg-[#000D36] text-white font-bold shadow-sm hover:shadow-lg transition-all border border-[#001A78] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16A34A] hover:bg-[#15803D] text-white font-bold shadow-sm hover:shadow-md hover:shadow-green-600/30 transition-all border border-[#16A34A] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#001A78] hover:border-[#001A78] hover:bg-[#F0F4FF] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineNavy:
      "border-2 border-[#001A78] bg-transparent text-[#001A78] hover:bg-[#001A78] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-bold",
    outlineYellow:
      "border-2 border-[#FDEB01] bg-transparent text-[#FDEB01] hover:bg-[#FDEB01] hover:text-[#001A78] shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-extrabold",
    light:
      "border border-[#C7D7FE] bg-[#F0F4FF] text-[#001A78] hover:bg-[#E0E7FF] shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-semibold",
    white:
      "border border-slate-200 bg-white text-[#001A78] hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0 font-bold",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001A78] select-none text-center cursor-pointer whitespace-nowrap " +
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
