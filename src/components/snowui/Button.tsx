import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
};

const base = "inline-flex items-center justify-center rounded-[var(--su-radius)] font-medium transition";
const sizes = {
  sm: "text-xs px-3 py-2",
  md: "text-sm px-4 py-2.5",
  lg: "text-base px-5 py-3",
};
const styles = {
  primary: "bg-[var(--su-brand)] text-white hover:bg-[var(--su-brand-700)] shadow",
  secondary: "bg-white text-[var(--su-fg)] border border-[var(--su-line)] hover:bg-slate-50 dark:bg-[var(--su-card)]",
  ghost: "text-[var(--su-fg)] hover:bg-slate-100/60 dark:hover:bg-white/5",
  danger: "bg-[var(--su-danger)] text-white hover:brightness-95 shadow",
};

export default function Button({ variant="primary", size="md", className="", ...props }: Props){
  return <button className={`${base} ${sizes[size]} ${styles[variant]} ${className}`} {...props} />;
}