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
    | "blue"
    | "cyan"
    | "sunset"
    | "orange"
    | "yellow"
    | "dark"
    | "outline"
    | "outlineNavy"
    | "outlineBlue"
    | "outlineSunset"
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
  variant = "blue",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-[13px] font-semibold tracking-wide",
    md: "px-5 py-2.5 text-[14px] font-semibold tracking-wide",
    lg: "px-6 py-3.5 text-[15px] font-bold tracking-wide",
  }[size];

  // Quatro Estações Piscinas | Aguazul Sete Lagoas Palette:
  // Aguazul Ocean Blue (#0A6DB0), Sunset Orange (#EE8220), Solar Yellow (#F7D511), Deep Navy (#07172C), WhatsApp (#16A34A)
  const variantClasses = {
    blue:
      "bg-[#0A6DB0] hover:bg-[#085990] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-sky-500/30 transition-all border border-[#0A6DB0] hover:-translate-y-0.5 active:translate-y-0",
    primary:
      "bg-[#0A6DB0] hover:bg-[#085990] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-sky-500/30 transition-all border border-[#0A6DB0] hover:-translate-y-0.5 active:translate-y-0",
    cyan:
      "bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-cyan-400/30 transition-all border border-[#0284C7] hover:-translate-y-0.5 active:translate-y-0",
    sunset:
      "bg-[#EE8220] hover:bg-[#D96E14] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all border border-[#EE8220] hover:-translate-y-0.5 active:translate-y-0",
    orange:
      "bg-[#EE8220] hover:bg-[#D96E14] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all border border-[#EE8220] hover:-translate-y-0.5 active:translate-y-0",
    yellow:
      "bg-[#F7D511] hover:bg-[#E5C309] text-[#07172C] font-extrabold shadow-sm hover:shadow-lg hover:shadow-yellow-400/35 transition-all border border-[#F7D511] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#07172C] hover:bg-[#0B2344] text-white font-bold shadow-sm hover:shadow-lg transition-all border border-[#1E4E8C] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16A34A] hover:bg-[#15803D] text-white font-bold shadow-sm hover:shadow-md hover:shadow-green-600/30 transition-all border border-[#16A34A] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#0A6DB0] hover:border-[#0A6DB0] hover:bg-[#F0F8FF] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineNavy:
      "border border-[#07172C] bg-transparent text-[#07172C] hover:bg-[#07172C] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineBlue:
      "border border-[#0A6DB0] bg-transparent text-[#0A6DB0] hover:bg-[#0A6DB0] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineSunset:
      "border border-[#EE8220] bg-transparent text-[#EE8220] hover:bg-[#EE8220] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    light:
      "border border-[#BAE6FD] bg-[#F0F8FF] text-[#0A6DB0] hover:bg-[#E0F2FE] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    white:
      "border border-slate-200 bg-white text-[#0A6DB0] hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A6DB0] select-none text-center cursor-pointer whitespace-nowrap " +
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
