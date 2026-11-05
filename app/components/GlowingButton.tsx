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
    | "green"
    | "dark"
    | "outline"
    | "outlineNavy"
    | "outlineBlue"
    | "outlineOrange"
    | "outlineSunset"
    | "light"
    | "white"
    | "whatsapp"
    | "shopee";
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

  // Piscinas Na Hora BH Palette:
  // Royal Blue (#044296), Cyan Splash (#04ACD3), Action Orange (#F97804), Summer Yellow (#FCD504), Fresh Lime (#83C809), Deep Navy (#02245B), WhatsApp (#16A34A)
  const variantClasses = {
    blue:
      "bg-[#044296] hover:bg-[#033477] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-blue-900/30 transition-all border border-[#044296] hover:-translate-y-0.5 active:translate-y-0",
    primary:
      "bg-[#044296] hover:bg-[#033477] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-blue-900/30 transition-all border border-[#044296] hover:-translate-y-0.5 active:translate-y-0",
    cyan:
      "bg-[#04ACD3] hover:bg-[#0396B9] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-cyan-400/30 transition-all border border-[#04ACD3] hover:-translate-y-0.5 active:translate-y-0",
    sunset:
      "bg-[#F97804] hover:bg-[#DF6800] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all border border-[#F97804] hover:-translate-y-0.5 active:translate-y-0",
    orange:
      "bg-[#F97804] hover:bg-[#DF6800] text-white font-bold shadow-sm hover:shadow-lg hover:shadow-orange-500/30 transition-all border border-[#F97804] hover:-translate-y-0.5 active:translate-y-0",
    yellow:
      "bg-[#FCD504] hover:bg-[#E5C103] text-[#031838] font-extrabold shadow-sm hover:shadow-lg hover:shadow-yellow-400/35 transition-all border border-[#FCD504] hover:-translate-y-0.5 active:translate-y-0",
    green:
      "bg-[#83C809] hover:bg-[#72B006] text-white font-extrabold shadow-sm hover:shadow-lg hover:shadow-lime-500/30 transition-all border border-[#83C809] hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-[#02245B] hover:bg-[#031838] text-white font-bold shadow-sm hover:shadow-lg transition-all border border-[#044296] hover:-translate-y-0.5 active:translate-y-0",
    whatsapp:
      "bg-[#16A34A] hover:bg-[#15803D] text-white font-bold shadow-sm hover:shadow-md hover:shadow-green-600/30 transition-all border border-[#16A34A] hover:-translate-y-0.5 active:translate-y-0",
    shopee:
      "bg-[#EE4D2D] hover:bg-[#D73211] text-white font-bold shadow-sm hover:shadow-md hover:shadow-orange-600/30 transition-all border border-[#EE4D2D] hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:text-[#044296] hover:border-[#044296] hover:bg-[#EBF3FC] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineNavy:
      "border border-[#02245B] bg-transparent text-[#02245B] hover:bg-[#02245B] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineBlue:
      "border border-[#044296] bg-transparent text-[#044296] hover:bg-[#044296] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineOrange:
      "border border-[#F97804] bg-transparent text-[#F97804] hover:bg-[#F97804] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    outlineSunset:
      "border border-[#F97804] bg-transparent text-[#F97804] hover:bg-[#F97804] hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    light:
      "border border-[#B9D7F9] bg-[#EBF3FC] text-[#044296] hover:bg-[#DBEAFE] shadow-xs hover:-translate-y-0.5 active:translate-y-0",
    white:
      "border border-slate-200 bg-white text-[#044296] hover:bg-slate-50 shadow-xs hover:-translate-y-0.5 active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#044296] select-none text-center cursor-pointer whitespace-nowrap " +
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
